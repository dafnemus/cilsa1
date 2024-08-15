const body = document.querySelector("body");
const input = document.querySelectorAll("input");
const buttons = document.getElementById("buttons");
const btn1 = document.getElementById("btn1");
const highContrast = document.getElementById("highContrast");

btn1.addEventListener("click", () => {
  body.className = "container";
  buttons.className = "btn";
  input.forEach((i) => {
    i.className = "input";
  });
});

highContrast.addEventListener("click", () => {
  body.className = "body-high-contrast";
  buttons.className = "btn-high-contrast";
  input.forEach((i) => {
    i.className = "input-high-contrast";
  });
});
