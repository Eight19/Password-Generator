
var generateBtn = document.querySelector("#generate");

var randomPasswordGenerated = "";

function generatePassword() {
  var passwordLength = prompt(
    "Choose between 8 and 128 characters for your password."
  );

}
// var upperCases = confirm("Would you like to use uppercase letters in your password?");var lowerCases = confirm("Would you like to use lowercase letters in your password?"); var numbers = confirm("Would you like to use number in your password?");var specialCharacters = confirm("Would you like to special characters in your password?");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "";
var possible = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";
var ensure = "";

  {
    var upperCase = confirm(
      "Would you like to use uppercase letters in your password?"
    );
    var lowerCase = confirm(
      "Would you like to use lowercase letters in your password?"
    );
    var numbers = confirm("Would you like to use number in your password?");
    var specialCharacters = confirm(
      "Would you like to special characters in your password?"
    )
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Length of password must be between 8 and 128 characters");
    } 
    if (upperCase) {
      alert[ "Has upperCase" ];
    }
    if (lowerCase) {
      alert[ "Has upperCase" ];
    }
    if (numbers) {
      alert[ "Has upperCase" ];
    }
    if (specialCharacters) {
      alert[ "Has upperCase" ];
    }
  
    var randomPasswordGenerated = "";
var password = "";

if (upperCase === true) {
  randomPasswordGenerated += upperCaseLetters;
}

if (lowerCase) {
  randomPasswordGenerated += lowerCaseLetters;
}

if (numbers) {
  randomPasswordGenerated += numeric;
}

if (specialCharacters) {
  randomPasswordGenerated += specialCharacters;
}

for (let i = 0; i < parseInt(passwordLength) - minimumPasswordLength; i++) {
  var randomPasswordGenerated = Math.floor(
    Math.random() * randomPasswordGenerated.length
  );
  password += randomPasswordGenerated[random];
  console.log(random);
}

return randomPasswordGenerated;

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
