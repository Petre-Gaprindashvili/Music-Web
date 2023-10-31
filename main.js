// function myfault() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");
// }

const searching = document.querySelector(".searching");
const inputsearching = document.querySelector(".inputsearching");
searching.addEventListener("click", () => {
  inputsearching.classList.toggle("show");
});
