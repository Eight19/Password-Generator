// Assignment code here

var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var passwordPrompt = prompt("Choose between 8 and 128 characters for your password.")
  var passwordLength = parseInt(passwordPrompt);
  return generatePassword(); 

}

  if (passwordLength < 8 || passwordLength > 128) {
    alert("The length of your password must be between 8 and 128 characters.");
    return generatePassword(); 

    var password = "";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
    var specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";
    var possible = "";
  } 
  else {
    var upperCase = confirm("Use uppercase letters in your password?");
    var lowerCase = confirm("Use lowercase letters in your password?");
    var numeric = confirm("Use number in your password?");
    var specialCharacters = confirm("Use special characters in your password?");
  }
  
  // var upperCases = confirm("Would you like to use uppercase letters in your password?");var lowerCases = confirm("Would you like to use lowercase letters in your password?"); var numbers = confirm("Would you like to use number in your password?");var specialCharacters = confirm("Would you like to special characters in your password?");
  
 
  
  var randomPasswordGenerated = "";
  var password = "";
  
  if (upperCase) {
    possible += upperCaseLetters;
  }
  
  if (lowerCase) {
    possible += lowerCaseLetters;
  }
  
  if (hasNumber) {
    possible += numeric;
  }
  
  if (specialCharacters) {
    possible += specialCharacters;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var randomPasswordGenerated = Math.floor(Math.random() * randomPasswordGenerated.length);
    password += randomPasswordGenerated[random];
    console.log(random);
    
    return generatePassword;
  }





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  return randomPasswordGenerated;

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)