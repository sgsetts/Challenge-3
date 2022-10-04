// Assignment Code
var generateBtn = document.querySelector("#generate");

// function for generating password
function generatePassword() {

  // promts user to input password length
  var userInput = window.prompt("Thank you for using Steve's password generator! Choose a password length between 8 and 128 characters: ");
  var passLength  = parseInt(userInput);

  // ensures the user's input is valid
  if (isNaN(passLength)) {
    window.alert("Invalid, please input an integer.");
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("Password must be between 8 and 128 characters, try again.");
    return;
  }

  // promts user to select password options
  var userNumbers = window.confirm("Would you like to use numbers?");
  var userSymbols = window.confirm("Would you like to use symbols?");
  var userLower = window.confirm("Would you like to use lowercase letters?");
  var userUpper = window.confirm("Would you like to use uppercase letters?");

  // ensures the user's input is valid
  if (userNumbers === false && userSymbols === false && userLower === false && userUpper === false) {
    window.alert("You must select at least one option, try again.");
    return;
  }

  // arrays that store potential options
  var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbolArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', '-', '+'];
  var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // array to store selected options, followed by concats to merge previous arrays into the selectedOptions array
  var selectedOptions = [];

  if (userNumbers === true) {
    selectedOptions = selectedOptions.concat(numberArr);
  }
  if (userSymbols === true) {
    selectedOptions = selectedOptions.concat(symbolArr);
  }
  if (userLower === true) {
    selectedOptions = selectedOptions.concat(lowerArr);
  }
  if (userUpper === true) {
    selectedOptions = selectedOptions.concat(upperArr);
  }

  // assembles random characters from the selected options into the new password, using the amount of characters the user first selected
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randIndex = Math.floor(Math.random() * selectedOptions.length);
    password = password + selectedOptions[randIndex];
  }

  return password;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


