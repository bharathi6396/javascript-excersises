//01
var fruits = ["Mango", "Lemon", "Blueberry"]
console.log(fruits);
console.table(fruits);

//02
var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1]);
console.log (ingredients.indexOf("butter"));


//03
var objects = ["pen", "book", "lamp"]
objects.unshift("chair");
console.log(objects);
objects.pop("lamp");
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift("chair");
console.log(objects);

//04
var numbers = [4, 10, 8, 12, 6]
numbers.reverse();
console.log(numbers);
numbers.sort((a, b)=> a - b);
console.log(numbers);
numbers.sort();
console.log(numbers);

// //05
var total = 0;
var limit = 10;
for (var i=0; i < total.length; i++) {
	console.log(total);
}


//06
var sentence = "Hello Konexio!"
for (var i = sentence.length - 1; i >= 0; i--) {
 sentence += sentence[i];
 console.log(sentence);
}

//07
for (var i = 0; i < 100; i++){
    if( i % 3 == 0 && i % 5 == 0 ){
        console.log("fizzbuzz");
        continue;
    }
    if( i % 3 == 0 ){
        console.log("fizz");
        continue;
    }
    if( i % 5 == 0 ){
        console.log("buzz");
        continue;
    }
    if( i % 7 == 0){
        continue;
    }
    else {
        console.log(i);
    }
}