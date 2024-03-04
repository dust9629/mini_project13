let [seconds, minutes] = [0, 0];
let inactive = false;
let timerRef = document.querySelector(".timer-display");
const restartButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const container = document.querySelector(",container");
const message = document.getElementById("message");

let interval = null;

const startTimer = () => {
  if(interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(displayTimer, 1000);
};

restartButton.addEventListener("click", () => {
  inactive = false;
  initializeTimer();
});

window.onload = initializeTimer = () => {
  if (inactive) {
    return false;
  }
  [seconds, minutes] = [0, 0];
  timerRef.innerHTML = `00:00`;
  if ()
}