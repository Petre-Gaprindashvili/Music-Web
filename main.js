const form = document.getElementById("form-in");
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const validemail = document.getElementById("validemail");
const validepass = document.getElementById("validepass");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const emailvalidation = (email) => {
  return email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
};

email.addEventListener("keyup", (e) => {
  if (!emailvalidation(email.value)) {
    validemail.innerText = " Invalid email address";
    validemail.style.color = "red";
    return "";
  } else {
    validemail.innerText = "Valid email address";
    validemail.style.color = "green";
  }
});
email.addEventListener("keyup", (e) => {
  if (email.value == "") {
    validemail.innerText = "";
  }
});
login.addEventListener("click", () => {
  if (email.value.length === 0) {
    email.style.border = "1px solid red";
  }
});

password.addEventListener("keyup", (e) => {
  if (password.value.length < 8) {
    validepass.innerText = "please enter valid password";
    return "";
  } else {
    validepass.style.color = "green";
  }
});

login.addEventListener("click", () => {
  if (password.value.length === 0) {
    password.style.border = "1px solid red";
  }
});
