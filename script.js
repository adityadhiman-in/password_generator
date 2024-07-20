const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const lengthOfPassword = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=-{}[]|:;'<,>.?/`~";
let allChars = upperCase + lowerCase + numbers + symbols;

generateBtn.addEventListener("click", function() {
    copyBtn.textContent = ""
    let password = "";
    let charSets = [upperCase, lowerCase, numbers, symbols];
    for (let charSet of charSets) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }

    while (password.length < lengthOfPassword) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
});


copyBtn.addEventListener('click', () => {
    passwordBox.select();
    document.execCommand("copy");
    if(passwordBox.value){
    copyBtn.textContent = "copied"
    }
  });