let fontList = document.querySelector(".font-list");
let arrow = document.querySelector("#arrow");
let sansSerif = document.querySelector("#sans");
let impact = document.querySelector("#impact");
let verdana = document.querySelector("#verdana");
let navbar = document.querySelector(".navBar");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let textArea = document.querySelector("textarea");
let center = document.querySelector(".center");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

arrow.addEventListener("click", function () {
  fontList.style.display = "block";
});

navbar.addEventListener("mouseleave", function () {
  fontList.style.display = "none";
});

bold.addEventListener("click", function () {
  if (textArea.style.fontWeight === "900") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "900";
  }
});

italic.addEventListener("click", function () {
  if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

underline.addEventListener("click", function () {
  if (textArea.style.textDecoration === "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});

sansSerif.addEventListener("click", function () {
  textArea.style.fontFamily = "sans-serif";
});

impact.addEventListener("click", function () {
  textArea.style.fontFamily = "Impact";
});

verdana.addEventListener("click", function () {
  textArea.style.fontFamily = "Verdana";
});
right.addEventListener("click", function () {
  textArea.style.textAlign = "right";
});

center.addEventListener("click", function () {
  textArea.style.textAlign = "center";
});

left.addEventListener("click", function () {
  textArea.style.textAlign = "left";
});
