$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    // var numbers = [2,3,4,5,6,7,8,9,10];
    // var letters = ["ace", "jack", "queen", "king"]
    // var numOutput =[];
    // var letterOutput = [];
    var suites = ["clubs", "spades", "hearts", "diamonds"]
    var values = ["ace",2,3,4,5,6,7,8,9,10,"jack", "queen", "king"];
    var cardOutput = [];
    
    
    suites.forEach(function(suite){
      values.forEach(function(value){
        var valueDeck = value + " of " + suite;
        
      });
    });

    // cardOutput = numDeck.concat(letterDeck);
    // console.log(cardOutput);



   // [number] of [suite]
   // [letter] of [suite]
  });
});
// var deck = [a,2,3,4,5,6,7,8,9,0,10,j,q,k];

// var suites = [];
// numbers.forEach(function(number) {
  








