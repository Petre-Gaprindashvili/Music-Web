// function myfault() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");
// }

const searching = document.querySelector(".searching");
const inputsearching = document.querySelector(".inputsearching");
searching.addEventListener("click", () => {
  inputsearching.classList.toggle("show");
});

function validate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const message2 = document.getElementById("message2");
  const login = document.getElementById("login");
  const regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

  if (regex.test(email)) {
    const email = document.getElementById("email");
    email.style.border = "1px solid green";
  } else {
    const email = document.getElementById("email");

    email.style.border = "1px solid red";
  }
  if (password.trim().length >= 8) {
    const password = document.getElementById("password");
    password.style.border = "1px solid green";
  } else {
    const password = document.getElementById("password");
    password.style.border = "1px solid red";
  }
  if (email.length == 0 && password.length == 0) {
    const malo = document.createElement("h5");
    const node = document.createTextNode("ujgkugggkug");
    malo.appendChild(node);
    document.getElementById("mydiv").appendChild(malo);
  }
}
