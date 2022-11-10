let awan = document.getElementById("awan");
let lahan = document.getElementById("lahan");
let gunung = document.getElementById("gunung");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  awan.style.left = value * 0.5 + "px";
  gunung.style.top = value * 1 + "px";
});
