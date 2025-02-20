const wrap = document.getElementById("wrap");
const map = document.getElementById("map");
const snakeElem = document.getElementById("snake");
let snake = [];
for (let i = 0; i < 3; i++) snake.push(startPoint);
const bodySize = 50;

function drawMap() {
  obstacles.forEach((coord) => {
    const obst = document.createElement("div");
    obst.className = "obst";
    obst.style.left = coord.x + "px";
    obst.style.top = coord.y + "px";
    obst.style.height = obstSize + "px";
    obst.style.width = obstSize + "px";
    map.append(obst);
  });
  foods.forEach((coord, idx) => {
    const food = document.createElement("div");
    food.className = "food";
    food.id = `food${idx}`;
    food.style.left = coord.x + "px";
    food.style.top = coord.y + "px";
    food.style.height = foodSize + "px";
    food.style.width = foodSize + "px";

    map.append(food);
  });
}

function drawSnake() {
  snakeElem.innerHTML = "";
  snake.forEach((coord, idx) => {
    const bodyPart = document.createElement("div");
    if (idx === 0) {
      bodyPart.className = "snakeHead";
      bodyPart.style.zIndex = 99;
    } else {
      bodyPart.className = "snakeBody";
      bodyPart.style.zIndex = idx;
    }
    var rect = wrap.getBoundingClientRect();
    let coordX = parseInt(coord.x);
    let coordY = parseInt(coord.y);
    bodyPart.style.left = coordX + "px";
    bodyPart.style.top = coordY + "px";

    snakeElem.append(bodyPart);
  });
}
