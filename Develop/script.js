//To Do
//Need the elements
//Need the button to work
//Need it to prompt if we want each character
//Need to accept which ones user wants
//Need to produce the correct password
//Need a maximum length of min 8 and max 128 characters




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var special = [ '!', '@', '#', "$", '*', '?',]
var num = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
