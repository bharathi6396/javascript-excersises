var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);

var basic = 34;
var stringified = basic.toString();
console.log(stringified);
console.log(stringified.length);

//03
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

//04
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

//05
var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);              

//06
var limit = 50;
var score = 30;
if (score >= limit)
{
 phrase = "Ok good!";    
} else
{
    phrase = "Oh noooo...";
}
console.log(phrase);

//07
   var password = "azerty" ;
   if ( password.length > 5){
       phrase = "The password is secure";
   }
console.log(phrase);

//08
var limit = 50;
var score = 30;
if (score >= limit  &&  password.length > 5){
    phrase = "Everything is good";
}
 else if  (score >= limit  ||  password.length > 5){
    phrase = "Something is good";
}
 else  {
     phrase = "Nothing is good";
 } 
 console.log(phrase);

 //*
 var random = Math.random(integer);
 if(random == 10){
     phrase = "Yes I win!";
 }
 else{
     phrase = "So close..."
 }
 console.log(phrase);

 //** 
 var month = "January";
 switch (month) {
        case "February": 
            console.log(" Fall");
            break;
        case "March": 
            console.log("Autumn");
            break;
        case "April": 
            console.log("Summer");
            break;
        case "January": 
            console.log("Winter");
            break;
        default: 
            console.log("That's not a month...");
    }

    //*** 
    // partie 1

    var roundedNumber = 3.6;
    Math.floor(roundedNumber); 
    Math.ceil(roundedNumber); 
    if (roundedNumber % 1 >= 0.5) {
        console.log(Math.ceil(roundedNumber));
    } else {
        console.log(Math.floor(roundedNumber));
    }
    
    // partie 2
    var roundedNumber = "3.6";
    roundedNumber = roundedNumber.toString(); 
    if (roundedNumber % 1 >= 0.5) {
        console.log(Math.ceil(roundedNumber));
    } else {
        console.log(Math.floor(roundedNumber));
    }
   





  



