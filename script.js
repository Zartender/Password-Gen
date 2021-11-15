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









