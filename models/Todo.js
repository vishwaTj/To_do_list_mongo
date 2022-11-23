const mongoose=require('mongoose');

const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
    }
})

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;