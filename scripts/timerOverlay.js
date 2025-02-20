const overlay = document.getElementById("timer-overlay");
let timerCount = 2;

const timerId = setInterval(() => {
  if (timerCount === 0) {
    overlay.style.visibility = "hidden";
    startGame();
    clearInterval(timerId);
  }
  overlay.innerHTML = null;
  const p = document.createElement("p");
  p.innerText = timerCount--;
  overlay.append(p);
}, 1000);
