
// using an onload funciton to detect and change date automatically when page loads
window.onload=function(){
    console.log("Bait taken");

    // Getting elements as an array by tag name to alter date from 2023-30-30 to Mar 03 2023
    let htmlElements = document.getElementsByTagName("h7");
    for(let i = 0; i < htmlElements.length ; i++){
        let newstr = "";

        // Taking the string from date element tag
        let date_string = htmlElements[i].innerHTML;
        let month_value = date_string.substring(5,7);
        console.log(month_value,date_string);

        //detecting the month code and replacing it with month and modifying the date string
        if( month_value.localeCompare("01") == 0 ){
            console.log("Gone in");
            newstr+="Jan ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("02") == 0 ){
            console.log("Gone in");
            newstr+="Feb ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("04") == 0 ){
            console.log("Gone in");
            newstr+="Apr ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("05") == 0 ){
            console.log("Gone in");
            newstr+="May ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("06") == 0 ){
            console.log("Gone in");
            newstr+="Jun ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("07") == 0 ){
            console.log("Gone in");
            newstr+="Jul ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("08") == 0 ){
            console.log("Gone in");
            newstr+="Aug ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("09") == 0 ){
            console.log("Gone in");
            newstr+="Sep ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("10") == 0 ){
            console.log("Gone in");
            newstr+="Oct ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("11") == 0 ){
            console.log("Gone in");
            newstr+="Nov ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

        else if( month_value.localeCompare("12") == 0 ){
            console.log("Gone in");
            newstr+="Dec ";
            newstr+=date_string.substring(8, 10);
            newstr+=" ";
            newstr+=date_string.substring(0, 4);
            htmlElements[i].innerHTML=newstr;
            console.log(newstr);
        }

    }
}


 