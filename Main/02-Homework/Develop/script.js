// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseVariable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCaseVariable); // Logs in console an array of lowercase letter strings.
var upperCaseVariable = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCaseVariable); // Logs in console an array of uppercase letter strings.
var numberVariable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numberVariable); // Logs in console an array of number strings.
var specialCharVariable = ["!", "@", "#", "%", "$", "^", "&", "*", "?"];
console.log(specialCharVariable); // Logs in console an array of special character strings.
// Write password to the #password input
var ecuComp = "";
console.log(ecuComp);
var lowerConUpper = lowerCaseVariable.concat(upperCaseVariable);
console.log(lowerConUpper);
var numberConSpec = numberVariable.concat(specialCharVariable);
console.log(numberConSpec);
var passCharIndex = lowerConUpper.concat(numberConSpec);
console.log(passCharIndex);
var CharacterIndex = Math.floor(Math.random() * passCharIndex.length);
console.log(CharacterIndex);
var userChoicePas;
// var targetCharIndex = passCharIndex[CharacterIndex].split("");
// console.log(targetCharIndex);
var defaultDecline = ("Accept necessary criteria or forget utilizing our generator, human!");
console.log(defaultDecline);
var defaultAcceptCrit = ("Confirm to generate password utilizing ");
function writePassword() {
  var userChoice = prompt("Your password has to be between 8 and 128 characters. Click OK to continue.)");
  // var computerChoice = Math.random();
  if (userChoice < 8 || userChoice > 128) {
    alert("Password not available. Please try again.");
    console.log(userChoice);
    return;
  }
  
  var password = generatePassword();
  // Declares commencement of password generation.
  function generatePassword() {
  console.log("Inside generate password");
  lowerCaseVariable = confirm(defaultAcceptCrit + "lowercase letters?");
  console.log("include " + lowerCaseVariable);
  if (lowerCaseVariable == false) {
    alert(defaultDecline);
  } else {
    upperCaseVariable = confirm(defaultAcceptCrit + "uppercase letters?");
    console.log("include " + upperCaseVariable);
  } if (upperCaseVariable == false) {
    alert(defaultDecline);
  } else {
    numberVariable = confirm(defaultAcceptCrit + "numbers?");
    console.log("include " + numberVariable);
  } if (numberVariable == false) {
    alert(defaultDecline);
  } else {
    specialCharVariable = confirm(defaultAcceptCrit + "special characters?");
    console.log("include " + specialCharVariable);
  } if (specialCharVariable == false) {
    alert(defaultDecline);
  }

  userChoicePas = userChoice
  var passwordFinal = "";
  for (var i = 0; i < userChoicePas; i++) {
  // password = CharacterIndex * ecuComp.length;
  passwordFinal = passCharIndex[CharacterIndex];
  console.log(passwordFinal);
  }
  return passwordFinal;
  }


  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



  // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
