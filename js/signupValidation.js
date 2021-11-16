import { isPassword, setErrorFor } from "./validation.js";
import { setSuccessFor } from "./validation.js";
import { isEmail } from "./validation.js";

const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // USERNAME
  if (usernameValue === "") {
    setErrorFor(username, "Username is required.");
  } else if (usernameValue.length < 4) {
    setErrorFor(username, "Min 4 characters for Username.");
  } else {
    setSuccessFor(username);
  }

  // EMAIL
  if (emailValue === "") {
    setErrorFor(email, "Email is required.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is invalid.");
  } else {
    setSuccessFor(email);
  }

  // PASSWORD
  if (passwordValue === "") {
    setErrorFor(password, "Password is required.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Min 8 characters for Password.");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      "Password should contain at least: 1 number, 1 uppercase, 1 lowercase letter."
    );
  } else {
    setSuccessFor(password);
  }

  // CONFIRM PASSWORD
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Password is required.");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, "Passwords does not match.");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      "Password should contain at least: 1 number, 1 uppercase, 1 lowercase letter."
    );
  } else {
    setSuccessFor(confirmPassword);
  }
}
