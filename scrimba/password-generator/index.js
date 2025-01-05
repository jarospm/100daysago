//APP PARAMS
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordLength = 15;
let passwordOne = "";
let passwordTwo = "";


// DOM MANIPULATION
const passwordFieldOne = document.querySelector(".password-field.one")
const passwordFieldTwo = document.querySelector(".password-field.two")
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    generatePassword()
    console.log("pass1: " + passwordOne);
    console.log("pass2: " + passwordTwo);
    passwordFieldOne.value = passwordOne;
    passwordFieldTwo.value = passwordTwo;
});


// generate two random passwords; 15 char long
function getRandomChar() {
    let random = Math.floor( Math.random() * characters.length );
    return random;
} 

function generatePassword() {
    passwordOne = "";
    passwordTwo = "";

    for (let i = 0; i < passwordLength; i++) {
        passwordOne += characters[getRandomChar()];
        passwordTwo += characters[getRandomChar()];
    }


}






// ability to set password length

// copy on click

// toggle symbols and numbers on/off