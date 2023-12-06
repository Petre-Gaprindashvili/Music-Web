const form = document.getElementById("form-in");
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const validemail = document.getElementById("validemail");
const validepass = document.getElementById("validepass");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const changer1 = document.getElementById("changerprice");
const changer2 = document.getElementById("percentchanger");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

const emailvalidation = (email) => {
  return email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
};

if (email) {
  email.addEventListener("keyup", (e) => {
    if (!emailvalidation(email.value)) {
      validemail.innerText = " Please enter valid email address";
      validemail.style.color = "red";
      return "";
    } else {
      validemail.innerText = "Valid email address";
      validemail.style.color = "green";
    }
  });
}

if (email) {
  email.addEventListener("keyup", (e) => {
    if (email.value == "") {
      validemail.innerText = "";
    }
  });
}
if (login) {
  login.addEventListener("click", () => {
    if (email.value.length === 0) {
      email.style.border = "1px solid red";
    }
  });
}

var upperCaseLetters = /[A-Z]/g;

if (password) {
  password.addEventListener("keyup", (e) => {
    if (password.value.length < 8) {
      validepass.innerText = "please enter valid password";
      validepass.style.color = "red";
      return "";
    } else {
      validepass.innerText = "valid password";
      validepass.style.color = "green";
    }
  });
}
if (password) {
  password.addEventListener("keyup", (e) => {
    if (password.value == "") {
      validepass.innerText = "";
    }
  });
}

if (login) {
  login.addEventListener("click", () => {
    if (password.value.length === 0) {
      password.style.border = "1px solid red";
    }
  });
}

if (login) {
  login.addEventListener("click", () => {
    if (!emailvalidation(email.value) || password.value.length < 8) {
      validemail.innerText = " please enter valid email adress";
      validemail.style.color = "red";

      validepass.innerText = "please enter valid password";
      validepass.style.color = "red";
    } else {
      window.location.href = "http://127.0.0.1:5501/index.html ";
    }
  });
}

if (monthly) {
  monthly.addEventListener("click", () => {
    changer1.innerText = "€17.99 ";
    changer2.innerText = " *Billed annually (€131.88/year)";

    if ((monthly.style.border = "1px solid #fff")) {
      yearly.style.color = "#fff";
      yearly.style.border = "";
    }
  });
}
if (yearly) {
  yearly.addEventListener("click", () => {
    changer1.innerText = " €10.99";
    changer2.innerText = " Save up to 39% by paying yearly";

    if ((yearly.style.border = "1px solid #fff")) {
      monthly.style.color = "#fff";
      monthly.style.border = "";
    }
  });
}
yearly.style.border = "1px solid #fff";
