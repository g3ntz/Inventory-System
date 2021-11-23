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
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  // USERNAME
  if (usernameValue === "") {
    setErrorFor(username, "Username is required.");
  } else if (usernameValue.length < 4) {
    setErrorFor(username, "Min 4 characters for Username.");
  } else {
    setSuccessFor(username);
  }

  // PASSWORD
  if (passwordValue === "") {
    setErrorFor(password, "Password is required.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Min 6 characters for Password.");
  } else {
    setSuccessFor(password);
  }
}
