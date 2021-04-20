
//01
function sortLetters (string) {
    return [...string].sort((a, b) => a.localeCompare(b)).join("");
  }
  console.log(sortLetters("konexio")); 
  
  //02
  function countEach (string){
      string = ("x","x","x","o","o");
      x = 3;
      o = 3;
      for (var i = 0; i < string.length; i++){
        if (string[x == o]) {
            return (true);
        }
      else {

           return (false);}
      }
  }
      console.log(countEach("xxxoooox"));
      console.log(countEach("xoxxx"));

      //03

      function checkpal (string){
             var re = /[^A-Za-z0-9]/g;
            var lowRegStr = string.toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join(''); 
            return reverseStr === lowRegStr;
          }
          console.log(checkpal("racecar"));
          console.log(checkpal("laptop"));

//04
function swap (string){
     var newLetters = "";
        for(var i = 0; i<string.length; i++){
            if(string[i] === string[i].toLowerCase()){
                newLetters += string[i].toUpperCase();
            }else {
                newLetters += string[i].toLowerCase();
            }
        }
        return newLetters;
    }
    console.log (swap("Hello World"));

    //*
    function makeItSpongeBob (string) { 
        var bob = '';
        for (var i = 0; i < string.length; i++) {
          if(Math.random() > .5){
            bob += string.charAt(i).toUpperCase();
          } else {
            bob += string.charAt(i).toLowerCase();
          }
        }
        return bob;
      }
      console.log(makeItSpongeBob("Javascript is easy"));

    //** 
    function sortLetters (string) {
        var text = '';
        for (var i = 0; i < string.length; i++) {
          if(Math.random() > .5){
            text += string.charAt(i).toUpperCase();
          } else {
            text += string.charAt(i).toLowerCase();
          }
        }
        return text;
      }
      console.log(sortLetters("Konexio"));

