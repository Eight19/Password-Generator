// Assignment code here
var generateBtn = document.querySelector("#generate");

var randomPasswordGenerated = "";

for (let i = 0; i < (parseInt(passwordLength) - minimumPasswordLength); i++) {

  }

function generatePassword () {

  var passwordLength = prompt("Your password must be between 8 and 128 characters.");
  var upperCases = confirm("Would you like to use uppercase letters in your password?");
  var lowerCases = confirm("Would you like to use lowercase letters in your password?");
  var numbers = confirm("Would you like to use number in your password?")
  var specialCharacters = confirm("Would you like to use special characters in your password?");
 
  var minimumUpperCases = 0;
  var minimumLowerCases = 0;
  var minimumNumbers = 0;
  var minimumSpecialCharacters = 0;
  
  const specialCharacters = "=+*!%$#@&()";
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


