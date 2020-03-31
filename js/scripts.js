$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var numbers = [2,3,4,5,6,7,8,9,10];
    var letters = ["ace", "jack", "queen", "king"]
    var suites = ["clubs", "spades", "hearts", "diamonds"];
    
    
    
    suites.forEach(function(suite){
      numbers.forEach(function(number){
        var numDeck = number + " of " + suite;
        // console.log(numDeck);
        var cardOutput = [numDeck[0]];
        console.log(cardOutput);
      });
      letters.forEach(function(letter){
        var letterDeck = letter + " of " + suite;
        // console.log(letterDeck);
      });
    });



   // [number] of [suite]
   // [letter] of [suite]
  });
});
// var deck = [a,2,3,4,5,6,7,8,9,0,10,j,q,k];

// var suites = [];
// numbers.forEach(function(number) {
  








