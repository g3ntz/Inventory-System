export function setErrorFor(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  inputGroup.className = "input-group error";
  small.innerText = message;
  small.style.opacity = 1;
  small.style.transform = "translateX(0%)";
}

export function setSuccessFor(input) {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group success";
  const small = inputGroup.querySelector("small");
  small.style.opacity = 0;
    small.style.transform = 'translateX(10%)';
}

export function isEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export function isPassword(password){
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    return regex.test(String(password));
}