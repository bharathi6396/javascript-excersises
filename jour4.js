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
function checkIfEven (num){
    if(num % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
checkIfEven (5);
checkIfEven(6);

//04
function compare (num1, num2) {
    if(num1 > num2) {
        console.log("num1 is bigger");
    }
    else {
        console.log("num2 is bigger");
    }
}
compare(3, 6);
compare(6, 3);

//05
function addUp (num){

}
