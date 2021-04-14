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
var score = 64;
if (score >= limit  &&  password.length > 5){
    phrase = "Everything is good";
}
 else if  (score < limit  ||  password.length > 5){
    phrase = "Something is good";
}
 else  {
     phrase = "Nothing is good";
 } 
 console.log(phrase);

  

// - Combinez les deux conditions précedents (exercices 6 et 7)
// - Afficher "Everything is good" si les deux conditions sont vraies
// - Afficher "Something is good" si une des deux conditions est vraie
// - Afficher "Nothing is good" si aucune des deux conditions n'est vraie

