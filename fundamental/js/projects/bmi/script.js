let getStartedPage = document.querySelector(".started");
let calculatorPage = document.querySelector(".calculator");
let getStartBtn = document.querySelector(".get-started-btn");

function getStarted() {
  getStartedPage.style.display = "none";
  calculatorPage.style.display = "flex";
}
getStartBtn.addEventListener("click", () => getStarted());

let ageInput = document.querySelector(".age-inp");
let weightInput = document.querySelector(".weight-inp");
let heightInput = document.querySelector(".height-inp");

let ageIncBtn = document.querySelector(".age-inc");
let ageDecBtn = document.querySelector(".age-dec");

let weightIncBtn = document.querySelector(".weight-inc");
let weightDecBtn = document.querySelector(".weight-dec");

let heightIncBtn = document.querySelector(".height-inc");
let heightDecBtn = document.querySelector(".height-dec");

ageIncBtn.addEventListener("click", () => {
  ageInput.value = Number(ageInput.value) + 1;
});

ageDecBtn.addEventListener("click", () => {
  if (ageInput.value > 0) {
    ageInput.value = Number(ageInput.value) - 1;
  }
});

weightIncBtn.addEventListener("click", () => {
  weightInput.value = Number(weightInput.value) + 1;
});

weightDecBtn.addEventListener("click", () => {
  if (weightInput.value > 0) {
    weightInput.value = Number(weightInput.value) - 1;
  }
});

heightIncBtn.addEventListener("click", () => {
  heightInput.value = Number(heightInput.value) + 1;
});

heightDecBtn.addEventListener("click", () => {
  if (heightInput.value > 0) {
    heightInput.value = Number(heightInput.value) - 1;
  }
});

let genderBtn = document.querySelector(".gender-btn");
let gender = "male";
function changeGender() {
  genderBtn.classList.toggle("active");
  gender = genderBtn.classList.contains("active") ? "female" : "male";
}
genderBtn.addEventListener("click", changeGender);

let calculateBtn = document.querySelector(".calculate-btn");
let resultPage = document.querySelector(".result");
let bmiIntPart = document.querySelector(".bmi-int");
let bmiDecPart = document.querySelector(".bmi-dec");
let resultTextFeild = document.querySelector(".result-text");

calculateBtn.addEventListener("click", () => {
  let weight = Number(weightInput.value);
  let height = Number(heightInput.value);
  if (weight <= 0) {
    alert("weight is required!");
    return;
  }
  if (height <= 0) {
    alert("height is required!");
    return;
  }
  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);
  let roundBmi = bmi.toFixed(2); // e.g. "22.34"

  // Split into integer and decimal
  const [intPart, decPart] = roundBmi.split(".");

  // Set each part in its own <span>
  bmiIntPart.textContent = intPart; // "22"
  bmiDecPart.textContent = "." + decPart; // ".34"

  calculatorPage.style.display = "none";
  resultPage.style.display = "flex";

  if (parseFloat(roundBmi) < 18.5) {
    resultTextFeild.innerText = "UNDERWEIGHT BMI";
  } else if (parseFloat(roundBmi) > 18.5 && parseFloat(roundBmi) < 26.9) {
    resultTextFeild.innerText = "NORMAL BMI";
  } else if (parseFloat(roundBmi) > 25 && parseFloat(roundBmi) < 29.9) {
    resultTextFeild.innerText = "OVERWEIGHT BMI";
  } else {
    resultTextFeild.innerText = "OBESITY BMI";
  }

  ageInput.value = "";
  weightInput.value = "";
  heightInput.value = "";
});

document.querySelector(".save-btn").addEventListener("click", () => {
  resultPage.style.display = "none";
  getStartedPage.style.display = "flex";
});
