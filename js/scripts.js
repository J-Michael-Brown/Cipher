$(document).ready(function() {

  var cipherPhase1 = function(sentence1) {
    var firstLetter = sentence1.toUpperCase().charAt(0);
    var lastLetter = sentence1.toUpperCase().charAt(sentence1.length-1);
    sentence1 = sentence1.replace(sentence1.charAt(0), firstLetter);
    sentence1 = sentence1.replace(sentence1.charAt(sentence1.length-1), lastLetter);
    alert(sentence1);
    // sentence1 = sentence1.replace(sentence1.charAt(sentence1.length-1), firstLetter); // this works as one function //
    // sentence1 = sentence1.replace(sentence1.charAt(0), lastLetter);
    // alert( "The working cipher: " + sentence1);
    return sentence1;

  };

  var cipherPhase2 = function(sentence2) {
    var firstChar = sentence2.charAt(0);
    var lastChar = sentence2.charAt(sentence2.length-1);
    sentence2 = sentence2.replace(sentence2.charAt(0), lastChar);
    sentence2 = sentence2.replace(sentence2.charAt(sentence2.length-1), firstChar);
    alert("The problem cipher: " + sentence2);
    return sentence2;
  }


  var userSentence = prompt("Please type a sentence.");
  // cipherPhase1(userSentence);
  cipherPhase1(userSentence);
  cipherPhase2(userSentence);

});
