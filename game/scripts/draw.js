const wrap = document.getElementById("wrap");
const map = document.getElementById("map");
const foodElem = document.getElementById("foods");
const snakeElem = document.getElementById("snake");
let snake = [];
for (let i = 0; i < 3; i++) snake.push(startPoint);
const bodySize = 50;

function drawObst() {
  obstacles.forEach((coord) => {
    const obst = document.createElement("div");
    obst.className = "obst";
    obst.style.left = coord.x + "px";
    obst.style.top = coord.y + "px";
    obst.style.height = obstSize + "px";
    obst.style.width = obstSize + "px";
    map.append(obst);
  });
}

function drawFood() {
  foods.forEach((coord, idx) => {
    const food = document.createElement("div");
    food.className = "food";
    food.id = `food${idx}`;
    food.style.left = coord.x + "px";
    food.style.top = coord.y + "px";
    food.style.height = foodSize + "px";
    food.style.width = foodSize + "px";

    foodElem.append(food);
  });
}

function drawSnake() {
  snakeElem.innerHTML = "";
  for (let idx = 0; idx < snake.length; idx++) {
    const coord = snake[idx];
    const bodyPart = document.createElement("div");
    if (idx === 0) {
      bodyPart.className = "snakeHead";
      bodyPart.style.zIndex = 99;

      const eye1 = document.createElement("div");
      const eyeball1 = document.createElement("div");
      const eye2 = document.createElement("div");
      const eyeball2 = document.createElement("div");
      eye1.className = "eyes";
      eye2.className = "eyes";
      eyeball1.className = "eyeball";
      eyeball2.className = "eyeball";

      eyeball2.style.bottom = "0px";
      eye1.style.top = "0px";
      eye2.style.bottom = "0px";

      eye1.append(eyeball1);
      eye2.append(eyeball2);
      bodyPart.append(eye1, eye2);
      const angle = vector.y > 0 ? Math.acos(vector.x) : -Math.acos(vector.x);
      bodyPart.style.transform = `rotate(${angle}rad)`;
    } else {
      bodyPart.className = "snakeBody";
      bodyPart.style.zIndex = 99 - idx;
      const coordBef = snake[idx - 1];
      let vx = coordBef.x - coord.x;
      let vy = coordBef.y - coord.y;
      const norm = Math.sqrt(vx * vx + vy * vy);
      vx = vx / norm;
      vy = vy / norm;
      const angle = vy > 0 ? Math.acos(vx) : -Math.acos(vx);
      bodyPart.style.transform = `rotate(${angle}rad)`;
    }
    var rect = wrap.getBoundingClientRect();
    let coordX = parseInt(coord.x);
    let coordY = parseInt(coord.y);
    bodyPart.style.left = coordX + "px";
    bodyPart.style.top = coordY + "px";

    snakeElem.append(bodyPart);
  }
}
