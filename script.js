// Assignment code here

// arrays of characters for the password
let lowercaseArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
let uppercaseArray = ['A','B','C','D','E','F','G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z']
let numbersArray = [1,2,3,4,5,6,7,8,9,0]
let specialArray = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.']




// password generater
function generatePassword() {
  // prompt for passwoprd length
  let passwordLength = window.prompt("Password must be AT LEAST 8 characters in length and no more then 128, no special characters")
  console.log(passwordLength)
  // length must be between 8-128 characters, using while so it keeps prompting the user until they do it right
  while (passwordLength <=8 || passwordLength >=128){
    passwordLength = window.prompt("Password must be AT LEAST 8 characters in length and no more then 128, no special characters")
  }
  // asking user if they want to have different types of characters in the password
  let characterLowercase = window.confirm("Do you want lower case characters in your password?")
  let characterUppercase = window.confirm("Do you want upper case characters in your password?")
  let characterNumeric = window.confirm("Do you want numbers in your password?")
  let characterSpecial = window.confirm("Do you want special characters in your password?")
  // password will be string, creating variable array of characters to use below
  let password = ""
  let charactersToPickFrom = []
  // if they say yes to the prompt, include and concatenate characters from the _____ array to put into available characters to use for the user's generated password
  if (characterLowercase) {
    charactersToPickFrom = charactersToPickFrom.concat(lowercaseArray)
  }
  if (characterUppercase) {
    charactersToPickFrom = charactersToPickFrom.concat(uppercaseArray)
  } if (characterSpecial) {
    charactersToPickFrom = charactersToPickFrom.concat(specialArray)
  } if (characterNumeric) {
    charactersToPickFrom = charactersToPickFrom.concat(numbersArray)
  }

// randomly generate password, console log, make sure it's within length, add characters from characters to pick from to characters to add, password should then be those
  for (var i = 0; i < passwordLength; i++){
    let characterToAdd = Math.floor(Math.random()*charactersToPickFrom.length)
    password += charactersToPickFrom[characterToAdd]
    console.log(charactersToPickFrom)
  }
  // return password (as string in text field)
  return password
} 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
