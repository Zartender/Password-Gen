// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate apssword 
function generatePassword() {
  var finalPassword = '';
  // console.log(finalPassword);

  //Choice list for letters sand numbers 
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowercaseList)

  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(uppercaseList);

  var numberList = ["1","2","3","4","5","6","7","8","9","0"];

  var special = ["!","@","#","$","%","^","&","*","?"];
  //Prompt the user for password length 
  var userChoice = prompt("How long should your password be? (8-128 Characters)");
  // var computerChoice = Math.random();
  if (userChoice < 7 || userChoice > 128) {
    alert("Password not available. Please retry.")
  }
  else {
    //Confirm include lowercase / uppercase /numeric / special characters 
    var inCludeLow = confirm("Confirm to include lowercase.");
    console.log("include lowercase " + inCludeLow);

    var inCludeUp = confirm("Confirm to include uppercase letters?");
    console.log("include uppercase " + inCludeUp);
    // Sacing
    var inCludeNo = confirm("Confirm whether or not to include numbers?");
    console.log("include numbers " + inCludeNo);

    var inCludeSpec = confirm("I confirm whether or not to include special characters?");
    console.log("include special characters " + inCludeSpec);

    //At least include one character type 

    //FOR LOOP STARTS HERE 

    //Random charcters and combine all together 
    if (inCludeLow === true) {
      var randomLower = lowercaseList[Math.floor(Math.random() * lowercaseList.length)];
      console.log(randomLower);

      if (inCludeUp === true) {
        var randomUpper = uppercaseList[Math.floor(Math.random() * uppercaseList.length)];

        if(inCludeNo === true)  {
          var randomNumber = numberList[Math.floor(Math.random() * numberList.length)];

          if(inCludeSpec === true) {
            var randomCharacter = special[Math.floor(Math.random() * special.length)];
          }
        }  
      }
      //appending the random letter to the password 
      // finalPassword == finalPassword.concat(randomUpper, randomCharacter, randomLower, randomNumber);
      finalPassword += randomLower + randomUpper + randomNumber + randomCharacter;
      console.log(finalPassword);
    }

    //FOR LOOP ENDSS HERE 
  }

  // console.log(finalPassword);


  //return the combined new password 
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
