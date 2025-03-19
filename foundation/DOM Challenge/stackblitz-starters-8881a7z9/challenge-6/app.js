/**
 * Write your challenge solution here
 */

const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

const secondStick = document.querySelector(".hand.second");
const minuteStick = document.querySelector(".hand.minute");
const hourStick = document.querySelector(".hand.hour");
const analogClock = document.querySelector(".clock");

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

for (let i = 1; i <= 12; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  const number = document.createElement("span");
  number.innerText = i;
  div.appendChild(number);
  div.style.transform = `rotate(${i * 30}deg)`;
  analogClock.append(div);
}

function setClock() {
  let newDate = new Date();

  let hours =
    newDate.getHours() > 12
      ? newDate.getHours() - 12
      : newDate.getHours() || 12;
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  let digitalClockInnerContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  digitalClock.innerText = digitalClockInnerContent;
  date.innerText = newDate.toLocaleDateString(undefined, options);

  // Analog CLock
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;

  secondStick.style.transform = `rotate(${secondDeg}deg)`;
  minuteStick.style.transform = `rotate(${minuteDeg}deg)`;
  hourStick.style.transform = `rotate(${hourDeg}deg)`;

  secondStick.style.transition = `transform 0.5s ease`;
}

setInterval(setClock, 1000);
setClock();
