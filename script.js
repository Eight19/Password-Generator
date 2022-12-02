// Assignment code here
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var passwordLength = passwordPrompt;
  var passwordPrompt = prompt("Choose between 8 and 128 characters for your password.");
}   
  
if (passwordLength < 8 || passwordLength > 128) {
     alert("The length of your password must be between 8 and 128 characters.")
  } 

  else {
    var upperCase = confirm("Use uppercase letters in your password?");
    var lowerCase = confirm("Use lowercase letters in your password?");
    var numeric = confirm("Use number in your password?");
    var specialCharacters = confirm("Use special characters in your password?");
  }
 
  // var upperCases = confirm("Would you like to use uppercase letters in your password?");var lowerCases = confirm("Would you like to use lowercase letters in your password?"); var numbers = confirm("Would you like to use number in your password?");var specialCharacters = confirm("Would you like to special characters in your password?");

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";

 
  var randomPasswordGenerated = "";
  var password = "";

if (upperCase) {
  randomPasswordGenerated += upperCaseLetters;
}

if (lowerCase) {
  randomPasswordGenerated += lowerCaseLetters;
}

if (number) {
  randomPasswordGenerated += numeric;
}

if (specialCharacters) {
  randomPasswordGenerated += specialCharacters;
}

for (var i = 0; i < passwordLength; i++) {
  var randomPasswordGenerated = Math.floor(Math.random() * randomPasswordGenerated.length);
  password += randomPasswordGenerated[random];
  console.log(random);
}



// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

return randomPasswordGenerated;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
