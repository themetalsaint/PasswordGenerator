//**To Do**
//Need the elements
//Need the button to work
//Need it to prompt if we want each character
//Need to accept which ones user wants
//Need to produce the correct password
//Need a maximum length of min 8 and max 128 characters




// ***Assignment Code***
var generateBtn = document.querySelector("#generate");

var special = [ '!', '@', '#', "$", '*', '?', '"', '&', '+', '~']
var num = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
console.log('special', special)


function userinput(){

  var length = prompt('How many characters would you like?');
  

    //conditional statement
    if(isNaN(length) === true){
      alert("Please enter a valid number.")
      return;
    }

    if(length<8 || length>128){
      alert("Characters must be between 8 and 128")
      return;
    }

    var wantsSpecial = confirm('Do you want special characters?')
    var wantsNum = confirm('Do you want Num characters?')
    var wantsLowercase = confirm('Do you want Lowercase characters?')
    var wantsUppercase = confirm('Do you want Uppercase characters?')

    if(
      wantsSpecial === false && 
      wantsNum === false &&
      wantsUppercase === false &&
      wantsLowercase === false
    ){
      alert('Please make a selection')
      return;
    }
    var userAnswer = {
      length: length,
      wantsSpecial: wantsSpecial,
      wantsNum: wantsNum,
      wantsUppercase: wantsUppercase,
      wantsLowercase: wantsLowercase
    };

    return userAnswer;
}


function random(choice){
var random1 =  Math.floor(Math.random() * choice.length);
var randomSaved = choice[random1];
return randomSaved;
}

//generate pass function








//****Write password to the #password input***(right before on click)
function writePassword() {
  var password = userinput(); //last step change userinput to generatepassword
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  // if("click") {
  //   prompt("Do you want Uppercase letters?")
  //   prompt("Do you want Lowercase letters?")
  //   prompt("Do you want Numbers?")
  //   prompt("Do you want Special Characters?")
  //   console.log()
  
  
  
  // var index = Math.floor(Math.random() * special.length) <- can be done w/ function
  
  
  
  // ***Add event listener to generate button***
  generateBtn.addEventListener("click", writePassword); /////ends the code
  
  // document.getElementById("generate").addEventListener("click", functions())
  // // { alert("password"));
  
  
  // };
  
// }

