const startBtn = document.querySelector("#startBtn");
const timeInput = document.querySelector("#timeInput");
const countDownDisplay = document.querySelector("#countDownDisplay");

function startTime() {
  let valueInSec = Number(timeInput.value);
  if (valueInSec <= 0 || isNaN(valueInSec)) {
    countDownDisplay.innerText = "please Enter the valid value";
    return;
  }

  countDownDisplay.innerText = valueInSec;
  let ref = setInterval(() => {
    valueInSec -= 1;
    countDownDisplay.innerText = valueInSec;
    if (valueInSec === 0) {
      clearInterval(ref);
      countDownDisplay.innerText = "Time up";
    }
  }, 1000);
}

startBtn.addEventListener("click", startTime);
