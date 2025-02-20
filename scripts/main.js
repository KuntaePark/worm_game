let spaceBetween = 10;
let time = 30;
let vector = new Coord(1, 0);
lengthIncrease = 0;

drawMap();

let intId = setInterval(function () {
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

  //wall Collision
  if (wallCollide()) {
    console.log("wall");
    clearInterval(intId);
  }
  if (obstCollide()) {
    console.log("obst");
    clearInterval(intId);
  }
  if (foodCollide()) {
    console.log("food");
    map.innerHTML = "";
    drawMap();
    lengthIncrease += 3;
  }
}, time);

wrap.addEventListener("mousemove", (e) => {
  var rect = wrap.getBoundingClientRect();
  let headCenterX = snake[0].x + bodySize / 2;
  let headCenterY = snake[0].y + bodySize / 2;
  let diffX = e.clientX - rect.left - headCenterX;
  let diffY = e.clientY - rect.top - headCenterY;
  vector.x = diffX / Math.sqrt(diffX * diffX + diffY * diffY);
  vector.y = diffY / Math.sqrt(diffX * diffX + diffY * diffY);
});
