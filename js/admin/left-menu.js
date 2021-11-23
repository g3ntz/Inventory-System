let nav = document.getElementById("main-nav");
let btnShow = document.getElementById("show-nav");
let btnHide = document.getElementById("hide-nav");

document.getElementById("show-nav").addEventListener("click", function () {
  nav.style.transform = "translateX(0)";
  nav.style.opacity = 1;
  nav.style.visibility = "visible";
  btnHide.style.display = "inline-block";
});

document.getElementById("hide-nav").addEventListener("click", function () {
  nav.style.transform = "translateX(-100%)";
  nav.style.opacity = 0;
  nav.style.visibility = "hidden";
  btnHide.style.display = "none";
});
