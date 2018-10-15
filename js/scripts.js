$(document).ready(function() {

  var cipherPhase1 = function(sentence) {
    var firstLetter = sentence.toUpperCase().charAt(0);
    alert(firstLetter);
    var lastLetter = sentence.toUpperCase().charAt(sentence.length-1);
    alert(lastLetter);
    // lastLetter "middle of string" firstLetter
    sentence = sentence.replace(sentence.charAt(sentence.length-1), firstLetter);
    sentence = sentence.replace(sentence.charAt(0), lastLetter);
    alert(sentence);

  };


  var sentence = prompt("Please type a sentence.");
  cipherPhase1(sentence);


});
