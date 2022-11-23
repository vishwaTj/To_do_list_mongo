const express = require('express');
const path = require('path');
const port = 7000;

//connecting to the database script and schema
const db = require('./config/mongoose');
const Todo = require('./models/Todo');
const app = express();

// seting up view engine to view it on browser
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));


// using a middleware to read and send data to and from ejs script
app.use(express.urlencoded());

// These are the static files ( the css and the script of the htl page)
app.use(express.static('assets'));


 // giving a sample no sql data base to test 
var To_do = [
    {
        name:"Washig Clothes",
        date:"24-07-2022",
        Category:"Personal"
    },
    {
        name:"Watching TV",
        date:"08-09-2000",
        Category:"Professional"
    }
]


// sending data to title variable on homepage using get method
app.get('/',function(req,res){
    Todo.find({},function(err,todolist){
        if(err){
            console.log("There was an error retrieving the contacts : ",err);
            return;
        }
        return res.render('home',{
            title:"To Do List Application",
            To_do_List : todolist
        })
    });
});


//  registering the add task form acction using post method
app.post('/add-Task',function(req,res){
    Todo.create({
        name:req.body.name,
        date:req.body.date,
        Category:req.body.Category,
        completed:false
    },function(err,NewItem){
        if(err){
            console.log('An error occured while creating the schema : ',err);
            return;
        }
        console.log('*******',NewItem);
        return res.redirect('back');
    });
});


// delete data from database using from the delete button (form action) using post and Object.keys
app.post('/delete',function(req,res){
    console.log("hello");
    console.log(req.body);
    const id=req.body;
    var count = Object.keys(id).length;
    console.log(count);
    for(let i=0;i<count;i++){

        Todo.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log("error in deleting tasks");
            }
            console.log("successfully deleted:",Object.keys(id)[i]);
        })
    }
    return res.redirect('back');
});



// checking if the servr got connected to the port or not
app.listen(port,function(err){
    if(err){
        console.log(`There is an error: ${err}`);
        return;
    }
    console.log('My server is up and running on port:',port);
})