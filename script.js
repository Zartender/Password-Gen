// global variables
var lowerCaseVariable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseVariable = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolList = ["!", "@", "#", "%", "$", "^", "&", "*", "?"];
var userChoiceDecline = ("Password not available. Please try again.")


// Assignment Code
var generateButton = document.querySelector("#generate");
// Assigns the functionality of button to object generateButton.
console.log(generateButton)

// Write password to the #password input.
function writePassword() {
  // instructions for the interpretor to write the password.
  var password = generatePassword();
  // says the object password is = to function generatePassword.
  var passwordText = document.querySelector("#password");
  // says object passwordText has a value of the id="password" text area input.
  passwordText.value = password;
  // says whatever the output is of function generatePassword() is the password. 
  console.log(password);
  // logs the password to the console.
  console.log(passwordText.value);
  // logs the passwordText.value to the console.
}



// Add event listener to generate button.
generateButton.addEventListener("click", writePassword);
// listens for the click on the <Generate Password> button.


function generatePassword() {
  var userChoice = window.prompt("Please enter a password character value between 8 and 128 and click Ok to continue.");
  // var computerChoice = Math.random();
  if (!userChoice || userChoice < 8 || userChoice > 128) {
    window.alert(userChoiceDecline);
    console.log(userChoiceDecline);

  } else {

    writeLowerCase(userChoice);
    writeUpperCase(writeLowerCase);
    writeNumberList(writeUpperCase);
    writeSymbolList(writeNumberList);
    

  }
  // 3. based on the confirm append all the arrayss together into a new variable  = combined list 
  var charSetLowUP = lowerCaseVariable.concat(upperCaseVariable);
  var charSetNumSym = numberList.concat(symbolList);
  var charSet = charSetNumSym.concat(charSetLowUP);
  console.log(charSet);
    
  var emptyPassword = [];
  // 4. For loop until password length 
  for (var i = 0; i < userChoice; i++) {
   var charSetFinal = charSet[Math.floor(Math.random() * charSet.length)];
    emptyPassword.push(charSetFinal);
    console.log(charSetFinal);
  }


    //4.1 Generate random index on the combined list 
    // var index = Math.floor(Math.random() * options.length);
    // var generateChoice = options[index];


  //4.1 Generate random index on the combined list 
 
  //4.2 generate a random leter 

  //4.3 append it to new final password variable created 




  //5. return the final password
  var password = emptyPassword.join("");
  console.log("Your password is: " + password);
  return password;

}




function writeLowerCase() {
  var userChoiceLower = window.confirm("Password must contain lowercase letters. Press Ok to continue.")

  if (userChoiceLower == false) {
    window.alert(userChoiceDecline);
    console.log(userChoiceDecline);
    return;
  } else { console.log(lowerCaseVariable) };
}

function writeUpperCase() {
  var userChoiceUpper = window.confirm("Password must contain uppercase letters. Press Ok to continue.")

  if (userChoiceUpper == false) {
    window.alert(userChoiceDecline);
    console.log(userChoiceDecline);
    return;
  } else { console.log(upperCaseVariable) };
}

function writeNumberList() {
  var userChoiceNumber = window.confirm("Password must contain numbers. Press Ok to continue.")

  if (userChoiceNumber == false) {
    window.alert(userChoiceDecline);
    console.log(userChoiceDecline);
    return;
  } else { console.log(numberList) };
}

function writeSymbolList() {
  var userChoiceSymbol = window.confirm("Password must contain symbols. Press Ok to continue.")

  if (userChoiceSymbol == false) {
    window.alert(userChoiceDecline);
    console.log(userChoiceDecline);
    return;
  } else { console.log(symbolList) };
}













// // Write password to the #password input
// var ecuComp = "";
// console.log(ecuComp);
// var lowerConUpper = lowerCaseVariable.concat(upperCaseVariable);
// console.log(lowerConUpper);
// var numberConSpec = numberVariable.concat(specialCharVariable);
// console.log(numberConSpec);
// var passCharIndex = lowerConUpper.concat(numberConSpec);
// console.log("Combine list", passCharIndex);

// var userChoicePas;
// // var targetCharIndex = passCharIndex[CharacterIndex].split("");
// // console.log(targetCharIndex);
// var defaultDecline = ("Accept necessary criteria or forget utilizing our generator, human!");
// console.log(defaultDecline);
// var defaultAcceptCrit = ("Confirm to generate password utilizing ");
// function writePassword() {


//   var password = generatePassword();

// var passwordText = document.querySelector("#password");
// passwordText.value = password;
// }

// // Declares commencement of password generation.
// function generatePassword() {
//   console.log("Inside generate password");
//   var userChoice = prompt("Your password has to be between 8 and 128 characters. Click OK to continue.)");
//   // var computerChoice = Math.random();
//   if (userChoice < 8 || userChoice > 128) {
//     alert("Password not available. Please try again.");
//     console.log(userChoice);
//     return;
//   }
//   lowerCaseVariable = confirm(defaultAcceptCrit + "lowercase letters?");
//   console.log("include " + lowerCaseVariable);
//   if (lowerCaseVariable == false) {
//     alert(defaultDecline);
//   } else {
//     upperCaseVariable = confirm(defaultAcceptCrit + "uppercase letters?");
//     console.log("include " + upperCaseVariable);
//   } if (upperCaseVariable == false) {
//     alert(defaultDecline);
//   } else {
//     numberVariable = confirm(defaultAcceptCrit + "numbers?");
//     console.log("include " + numberVariable);
//   } if (numberVariable == false) {
//     alert(defaultDecline);
//   } else {
//     specialCharVariable = confirm(defaultAcceptCrit + "special characters?");
//     console.log("include " + specialCharVariable);
//   } if (specialCharVariable == false) {
//     alert(defaultDecline);
//   }

//   userChoicePas = userChoice
//   var passwordFinal = "";
//   for (var i = 0; i < userChoicePas; i++) {
//     // password = CharacterIndex * ecuComp.length;
//     var CharacterIndex = Math.floor(Math.random() * passCharIndex.length);
//     console.log("Random Index", CharacterIndex);
//     passwordFinal += passCharIndex[CharacterIndex];
//     console.log(passwordFinal);
//   }
//   return passwordFinal;
// }





// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
