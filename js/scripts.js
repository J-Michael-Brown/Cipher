$(document).ready(function() {

  var cipherPhase1 = function(sentence) {
    var newSentence = sentence.toUpperCase().charAt(0);
    alert(newSentence);
  };

  var cipherPhase2 = function(sentence) {
    // var last = newSentence.length - 1;
    var newSentence = sentence.toUpperCase().charAt(length-1);
    alert(newSentence);

  };


  var sentence = prompt("Please type a sentence.");
  var length = sentence.length;
  alert(length);
  cipherPhase1(sentence);
  cipherPhase2(sentence);

});
