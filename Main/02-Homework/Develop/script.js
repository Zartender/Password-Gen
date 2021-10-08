// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseVariable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCaseVariable); // Logs in console an array of lowercase letter strings.
var upperCaseVariable = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCaseVariable); // Logs in console an array of uppercase letter strings.
var numberVariable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numberVariable); // Logs in console an array of number strings.
var specialCharVariable = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
console.log(specialCharVariable); // Logs in console an array of special character strings.
// Write password to the #password input
var defaultDecline = ("Accept necessary criteria or forget utilizing our generator, human!");
console.log(defaultDecline);
var defaultAcceptCrit = ("Confirm to generate password utilizing ");
function writePassword() {
  var userChoice = prompt("Your password has to be between 8 and 128 characters. Click OK to continue.)");
  // var computerChoice = Math.random();
  if (userChoice < 8 || userChoice > 128) {
    alert("Password not available. Please try again.");
  } else {
    generatePassword(); // continue here
  }


};
var passwordText = document.querySelector("#password");

passwordText.value = password;



function generatePassword() {
  console.log("Inside generate password");
  lowerCaseVariable = confirm(defaultAcceptCrit + "lowercase letters?");
    console.log("include " + lowerCaseVariable);
      if (lowerCaseVariable == false) {
        alert(defaultDecline);
      } else {upperCaseVariable = confirm(defaultAcceptCrit + "uppercase letters?");
      if (upperCaseVariable == false) {
        alert(defaultDecline);
      } else {numberVariable = confirm(defaultAcceptCrit + "numbers?");
      if (numberVariable == false) {
        alert(defaultDecline);
      } else {specialCharVariable = confirm(defaultAcceptCrit + "special characters?");
      if (specialCharVariable == false) {
        alert(defaultDecline);
      }

      }

      }
      }
}

// Generate password

//  First attempt  

// console.log(finalPassword);

//Choice list for letters sand numbers 

//Prompt the user for password length 
// var userChoice = prompt("How long should your password be? (8-128 Characters)");
// // var computerChoice = Math.random();
// if (userChoice < 7 || userChoice > 128) {
//   alert("Password not available. Please retry.")
// }
//   else {
//     //Confirm include lowercase / uppercase /numeric / special characters 
//     var inCludeLow = confirm("Confirm to include lowercase.");
//     console.log("include lowercase " + inCludeLow);

//     var inCludeUp = confirm("Confirm to include uppercase letters?");
//     console.log("include uppercase " + inCludeUp);
//     // Sacing
//     var inCludeNo = confirm("Confirm whether or not to include numbers?");
//     console.log("include numbers " + inCludeNo);

//     var inCludeSpec = confirm("I confirm whether or not to include special characters?");
//     console.log("include special characters " + inCludeSpec);

//     //At least include one character type 

//     //FOR LOOP STARTS HERE 

//     //Random charcters and combine all together 
// if (inCludeLow === true) {
//   var randomLower = lowercaseList[Math.floor(Math.random() * lowercaseList.length)];
//   console.log(randomLower);

//       if (inCludeUp === true) {
//         var randomUpper = uppercaseList[Math.floor(Math.random() * uppercaseList.length)];

//         if(inCludeNo === true)  {
//           var randomNumber = numberList[Math.floor(Math.random() * numberList.length)];

//           if(inCludeSpec === true) {
//             var randomCharacter = special[Math.floor(Math.random() * special.length)];
//           }
//         }  
//       }
//       //appending the random letter to the password 
//       // finalPassword == finalPassword.concat(randomUpper, randomCharacter, randomLower, randomNumber);
//       finalPassword += randomLower + randomUpper + randomNumber + randomCharacter;
//       console.log(finalPassword);
//     }

//     //FOR LOOP ENDSS HERE 
//   }

//   // console.log(finalPassword);


//   //return the combined new password 
//   return finalPassword;
// }
var finalPassword = '';
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
