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

const openn = document.getElementById("openn");
const modal_containerr = document.getElementById("modal_containerr");
const closee = document.getElementById("closee");
openn.addEventListener("click", () => {
  modal_containerr.classList.add("show");
});
closee.addEventListener("click", () => {
  modal_containerr.classList.remove("show");
});

const openit = document.getElementById("openit");
const closeit = document.getElementById("closeit");
const modal_containerit = document.getElementById("modal_containerit");
openit.addEventListener("click", () => {
  modal_containerit.classList.add("show");
});
closeit.addEventListener("click", () => {
  modal_containerit.classList.remove("show");
});

const opento = document.getElementById("opento");
const closeto = document.getElementById("closeto");
const modal_containerto = document.getElementById("modal_containerto");
opento.addEventListener("click", () => {
  modal_containerto.classList.add("show");
});
closeto.addEventListener("click", () => {
  modal_containerto.classList.remove("show");
});

const openon = document.getElementById("openon");
const closeon = document.getElementById("closeon");
const modal_containeron = document.getElementById("modal_containeron");
openon.addEventListener("click", () => {
  modal_containeron.classList.add("show");
});
closeon.addEventListener("click", () => {
  modal_containeron.classList.remove("show");
});

close.addEventListener("mouseover", (mouseOver) => {
  document.getElementById("close").style.color = "red";
  close.add("show");
});
close.addEventListener("mouseout", (mouseOut) => {
  document.getElementById("close").style.color = "white";
  close.add("show");
});

closee.addEventListener("mouseover", (mouseOver) => {
  document.getElementById("closee").style.color = "red";
  closee.add("show");
});
closee.addEventListener("mouseout", (mouseOut) => {
  document.getElementById("closee").style.color = "white";
  closee.add("show");
});
closeit.addEventListener("mouseover", (mouseOver) => {
  document.getElementById("closeit").style.color = "red";
  closeit.add("show");
});
closeit.addEventListener("mouseout", (mouseOut) => {
  document.getElementById("closeit").style.color = "white";
  closeit.add("show");
});

closeto.addEventListener("mouseover", (mouseOver) => {
  document.getElementById("closeto").style.color = "red";
  closeto.add("show");
});
closeto.addEventListener("mouseout", (mouseOut) => {
  document.getElementById("closeto").style.color = "white";
  closeto.add("show");
});
closeon.addEventListener("mouseover", (mouseOver) => {
  document.getElementById("closeon").style.color = "red";
  closeto.add("show");
});
closeon.addEventListener("mouseout", (mouseOut) => {
  document.getElementById("closeon").style.color = "white";
  closeto.add("show");
});

function myfault() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

function trythis(mp4) {
  covering.src = mp4.src;
}
