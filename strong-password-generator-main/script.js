const passwordLength = document.getElementById("pws_length");
const generateBtn = document.getElementById("btn_generate");
const copyBtn = document.getElementById("btn_copy");
let inputValue = document.getElementById("input_password");

// the user doesn't require to select option by default
let length = parseInt(passwordLength.value);

// changing the value when user change the value
passwordLength.addEventListener("change", () => {
  length = parseInt(passwordLength.value);
});

// function to generate secure password
function passwordGenerator(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

  const password = [...Array(length)].reduce((accumulator, _element) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return accumulator + chars[randomIndex];
  }, "");
  inputValue.value = password; //changing the value of input with secure password
}

// listening the click event
generateBtn.addEventListener("click", () => {
  passwordGenerator(length);
});

// function to copy generated secure password
copyBtn.addEventListener("click", () => {
  inputValue.select();
  document.execCommand("copy");
});
