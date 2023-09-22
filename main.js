function change1() {
  document.getElementById("pictu_re").src = "image/1.png";
}
function change2() {
  document.getElementById("pictu_re").src = "image/2.png";
}
function change3() {
  document.getElementById("pictu_re").src = "image/3.png  ";
}
function change4() {
  document.getElementById("pictu_re").src = "image/4.png";
}
function change5() {
  document.getElementById("pictu_re").src = "image/5.png";
}
function change6() {
  document.getElementById("pictu_re").src = "image/6.png";
}

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
