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
    validemail.innerText = "please fill the field";
    return "";
  } else {
    validemail.style.color = "green";
  }
});

password.addEventListener("keyup", (e) => {
  if (!emailvalidation(password.value)) {
    validepass.innerText = "please fill the field";
    return "";
  } else {
    validepass.style.color = "green";
  }
});

login.addEventListener("click", () => {
  if (email.value.length === 0) {
    email.style.border = "1px solid red";
  }
});

login.addEventListener("click", () => {
  if (password.value.length === 0) {
    password.style.border = "1px solid red";
  }
});
