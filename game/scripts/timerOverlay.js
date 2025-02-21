const overlay = document.getElementById("timer-overlay");
let timerCount = 2;

const startmarker = document.createElement("div");
startmarker.innerText = "START";
startmarker.id = "startmarker";
startmarker.style.zIndex = 99;
startmarker.style.left = startPoint.x + "px";
startmarker.style.top = startPoint.y + "px";
wrap.append(startmarker);

const timerId = setInterval(() => {
  if (timerCount === 0) {
    overlay.style.visibility = "hidden";
    startmarker.remove();
    startGame();
    clearInterval(timerId);
  }
  overlay.innerHTML = null;
  const p = document.createElement("p");
  p.innerText = timerCount--;
  overlay.append(p);
}, 1000);
