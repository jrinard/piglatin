// Back End Logic

ar userInput = "eat";
console.log(userInput);
var wordSeparate = userInput.split('');
var letterSeparate = "";
var vowels = ["a","e","i","o","u"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","|",".","<",">","?","-","=",":",";","'"];

var letterChecker = function(v1,n1){
	for (var index = 0; index < n1.length; index++) {// index++ is same as index +=1
  	letterSeparate = wordSeparate[index].split('');
    console.log(letterSeparate);
    for (var index2 = 0; index2 < v1.length; index2++){
      if (letterSeparate[0] === v1[index2]) {
        letterSeparate.push('ay');
        return false;
        console.log(letterSeparate);
      }
    }
//	debugger;


letterChecker(vowels, wordSeparate);
letterSeparate;

// Front End

$(document).ready(function() {







});
