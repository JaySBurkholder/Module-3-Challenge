// Assignment code here
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





function generatePassword() {
  let passwordLength = window.prompt("Password must be AT LEAST 8 characters in length and no more then 128, no special characters")
  console.log(passwordLength)
  while (passwordLength <=8 || passwordLength >=128){
    passwordLength = window.prompt("Password must be AT LEAST 8 characters in length and no more then 128, no special characters")
  }
  let characterLowercase = window.confirm("Do you want lower case characters in your password?")
  let characterUppercase = window.confirm("Do you want upper case characters in your password?")
  let characterNumeric = window.confirm("Do you want numbers in your password?")
  let characterSpecial = window.confirm("Do you want special characters in your password?")
  let password = ""
  let charactersToPickFrom = []
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


  for (var i = 0; i < passwordLength; i++){
    let characterToAdd = Math.floor(Math.random()*charactersToPickFrom.length)
    password += charactersToPickFrom[characterToAdd]
    console.log(charactersToPickFrom)
  }
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
