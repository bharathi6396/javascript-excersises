// var request = require("request");
// console.log("avant");
// request.get("https://restcountries.eu/rest/v2/name/france", function (err, res, body) {
//     console.log(err);
//     console.log(res.statusCode);
//     console.log(body);
// });
// console.log("aprés");

01
console.log("ex-01");
var request = require("request");
// console.log("avant");
request.get("https://restcountries.eu/rest/v2/all", 
function(err, asynchrone, body){
    countriesNames = [ ];
    let getCountries = JSON.parse(body);
    countriesNames = getCountries.map(function(element){
        return element.name + "-";
    }); 
    console.log(countriesNames); 
});
console.log("aprés");

// // //02
// console.log("02.ChuckNourris");
// var request = require("request");
// console.log("avant");
// request.get("https://api.chucknorris.io/jokes/random",
// function(err, res, body){
//     let getFact = JSON.parse(body);
//    let blagues = getFact.value;
//     });
//     console.log ("error", err);
//     console.log("blagues", blagues);
// });
// console.log("aprés")

//03
var request = require("request");
console.log("avant");
request.get("https://pokeapi.co/api/v2/",
function(err, res, body){
    let getPokemon = JSON.parse(body);
    numbers = getPokemon.filter(function (element) {
            var isPokemon = typeof element === "pokemon";
            return isPokemon;
        });
    console.log(numbers)
});
