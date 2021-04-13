//01
var text;
text = "Hello world";
console.log(text);
//02
var test;
test = "my name is Bharathi";
console.log(test);
//03
var name;
name = "RAJENDRAN";
var text;
text = name + " Nice to meet you";
console.log(text);
//04
var testLength;
testLength = "i'm very long!";
console.log(testLength.length);
//05
var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

//06
var basic = "This is cool";
 var basicUpperCase = basic.toUpperCase();
 var basicLowerCase = basic.toLowerCase();
 console.log(basicUpperCase);
 console.log(basicLowerCase);
//07
 var word = "banana";
 var letters = word.split("");
 console.log(letters);

//08
 var age = "25";
 var template = " i'm" + age + " years old";
 var template = `i'm ${age} years old`;
 console.log(template);

 //10
 var phrase1 = "casse toi pov'con"; 
var phrase2 = "bisou mon chérie";
console.log(phrase1.includes("bisou"));      
console.log(phrase2.includes("bisou"));

//11
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}
var nombre1 = 11;
var nombre2 = 999;

function rightFillNum(num, targetLength) {
    return num.toString().padEnd(targetLength, 0);
}
var nombre3 = 2.2;
var nombre4 = 10.9; 
console.log(leftFillNum(nombre1, 4));
console.log(leftFillNum(nombre2, 4));
console.log(rightFillNum(nombre3, 4));
console.log(rightFillNum(nombre4, 5));

//12



 





