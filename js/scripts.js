$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    var numbers = [2,3,4,5,6,7,8,9,10];
    var letters = ["ace", "jack", "queen", "king"]
    var suites = ["clubs", "spades", "hearts", "diamonds"]
    //var deck = [ace,2,3,4,5,6,7,8,9,10,jack, queen, king];
    var numOutput =[];
    var letterOutput = [];
    var cardOutput = [];
    
    
    suites.forEach(function(suite){
      numbers.forEach(function(number){
        var numDeck = number + " of " + suite;
        // console.log(numDeck);
        numOutput = numDeck;
        // console.log(cardOutput);
      });
      letters.forEach(function(letter){
        var letterDeck = letter + " of " + suite;
        letterOutput = letterDeck
      });
    });

    cardOutput = numOutput.concat(letterOutput);
    console.log(cardOutput);



   // [number] of [suite]
   // [letter] of [suite]
  });
});
// var deck = [a,2,3,4,5,6,7,8,9,0,10,j,q,k];

// var suites = [];
// numbers.forEach(function(number) {
  








