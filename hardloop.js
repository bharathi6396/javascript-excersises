//01
let numbers = [ ];
let randomNum= 0;
for ( var i =1; i <=50; i++){
    randomNum = Math.floor(Math.random() * (100+1) +1);
    numbers.push(randomNum)
}
var sum = 0;
console.log ("i:",i);
for (var i=0; i<=numbers.length - 1; i++){
    sum += numbers[i];
}
console.log ("total:", sum);

//02
let number = [];
let randomNumber = 0;
for ( var i =1; i <=50; i++){
    randomNumber = Math.floor(Math.random() * (200-50+1) +50);
    number.push(randomNumber)
}
var maximum = 0;
for (var j = 0; j <= number.length - 1; j++) {
    if (maximum < number[j]) {
        maximum = number[j];
    }
}
console.log("max", maximum);

//03
let number = [];
let randomNumber = 0;
for ( var i =1; i <=50; i++){
    randomNumber = Math.floor(Math.random() * (200-50+1) +50);
    number.push(randomNumber)
}


//04
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var lettres = [];
var count = 0;

for (var i = 0; i <= words.length - 1; i++) {
lettres = words[i].split(" ").join("").split("");
   console.log(lettres);

  for (var j = 0; j <= lettres.length - 1; j++) {
        if (lettres[j] == "o") {
               count += 1;
        }
    }
}

console.log("total", count);

