//01
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
let value = "age";
console.log(cat[value]);

if(cat.hasOwnProperty("isCute")){
    console.log("So cute!");
}
//02
var cat2 = {
    name: "Gaaar",
    age: 5,
    isCute: false
};
let cats = [ cat, cat2];
console.log(cat.age);
let value2 = "age";
console.log(cat[value2]);
console.log(cat2.isCute);
let value3 = "isCute";
console.log(cat2[value3]);

//03
function checkIfEven (num)
