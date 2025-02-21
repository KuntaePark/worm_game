let gameIntervalId = null;

let vector = new Coord(1, 0);
lengthIncrease = 0;

drawObst();
drawFood();

function startGame() {
  gameIntervalId = setInterval(function () {
    snake.unshift(
      new Coord(
        snake[0].x + vector.x * spaceBetween,
        snake[0].y + vector.y * spaceBetween
      )
    );
    //if eat, then dont remove
    if (lengthIncrease > 0) {
      lengthIncrease--;
    } else {
      snake.pop();
    }

    drawSnake();

    if (obstCollide() || wallCollide()) {
      //장애물 충돌 시
      const head = document.querySelector(".snakeHead");
      head.style.backgroundColor = "red";
      console.log("ded");
      clearInterval(gameIntervalId);
    }
    if (foodCollide()) {
      //먹이 충돌 시

      if (foods.length === 0) {
        console.log("eaten all");
        clearInterval(gameIntervalId);
      }
      console.log("food");
      foodElem.innerHTML = "";
      drawFood();
      lengthIncrease += 3;
    }
  }, time);
}

wrap.addEventListener("mousemove", (e) => {
  var rect = wrap.getBoundingClientRect();
  let headCenterX = snake[0].x + bodySize / 2;
  let headCenterY = snake[0].y + bodySize / 2;
  let diffX = e.clientX - rect.left - headCenterX;
  let diffY = e.clientY - rect.top - headCenterY;
  vector.x = diffX / Math.sqrt(diffX * diffX + diffY * diffY);
  vector.y = diffY / Math.sqrt(diffX * diffX + diffY * diffY);
});
