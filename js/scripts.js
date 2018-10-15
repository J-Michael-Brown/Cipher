$(document).ready(function() {

  var cipherPhase1 = function(sentence) {
  var newSentence = sentence.toUpperCase().charAt(0);
  alert(newSentence);

/*     alert(newSentence); */
};


var sentence = prompt("Please type a sentence.");
cipherPhase1(sentence);

});
