// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordPrompt = prompt(
    "Choose between 8 and 128 characters for your password."
  );
  var passwordLength = parseInt(passwordPrompt);
  // return randomPasswordGenerated;
  
  var randomPasswordGenerated = "";
  var password = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";
  var possible = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("The length of your password must be between 8 and 128 characters.");
    return password;
  } else {
    // var upperCases = confirm("Would you like to use uppercase letters in your password?");var lowerCases = confirm("Would you like to use lowercase letters in your password?"); var numbers = confirm("Would you like to use number in your password?");var specialCharacters = confirm("Would you like to special characters in your password?");
  }

  var uppercaseL = confirm("Use uppercase letters in your password?");
  var lowercaseL = confirm("Use lowercase letters in your password?");
  var numeric = confirm("Use number in your password?");
  var special = confirm("Use special characters in your password?");

  if (uppercaseL) {
    possible += uppercase;
  }

  if (lowercaseL) {
    possible += lowercase;
  }

  if (numeric) {
    possible += number;
  }

  if (special) {
    possible += specialCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {
    randomPasswordGenerated = Math.floor(
      Math.random() * possible.length
    );
    password += possible.substring(randomPasswordGenerated, randomPasswordGenerated +1);

  }
  return password;
  
  
  console.log(password);
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
