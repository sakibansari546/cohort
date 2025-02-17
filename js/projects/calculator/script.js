let btns = document.querySelectorAll(".js-btn");
let result = document.querySelector(".result");
let expression = document.querySelector(".expression");
let equal = document.querySelector(".equals");
let allClear = document.querySelector(".clear");
let themeBtn = document.querySelector(".theme-btn");
let deleteBtn = document.querySelector(".delete-btn");

function addValuesInInput(elem) {
  elem.addEventListener("click", () => {
    result.value += elem.innerHTML;
  });
}
btns.forEach((elem, idx) => {
  addValuesInInput(elem, idx);
});

function calculate() {
  expression.innerHTML = result.value;
  let val = result.value;

  result.value = eval(val);
}

equal.addEventListener("click", calculate);
allClear.addEventListener("click", () => (result.value = ""));

function deleteChar() {
  result.value = result.value.slice(0, result.value.length - 1);
}
deleteBtn.addEventListener("click", deleteChar);

function toggleTheme() {
  document.body.classList.toggle("dark");
}
themeBtn.addEventListener("click", toggleTheme);
