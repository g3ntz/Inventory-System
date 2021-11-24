import { setErrorFor } from "./validation.js";
import { setSuccessFor } from "./validation.js";
import { isEmail } from "./validation.js";
import { isPassword } from "./validation.js";

const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let noErrors = true;
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  // USERNAME
  if (usernameValue === "") {
    setErrorFor(username, "Username is required.");
    noErrors = false;
  } else if (usernameValue.length < 4) {
    setErrorFor(username, "Min 4 characters for Username.");
    noErrors = false;
  } else {
    setSuccessFor(username);
    noErrors = true;
  }

  // PASSWORD
  if (passwordValue === "") {
    setErrorFor(password, "Password is required.");
    noErrors = false;
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Min 8 characters for Password.");
    noErrors = false;
  } else {
    setSuccessFor(password);
    noErrors = true;
  }

  // REDIRECT TO DASHBOARD
  if(noErrors){
    window.location.href = "/html/admin/dashboard.html";
  }
}
