//obstacle / food
//1200 * 800

//check wall
function wallCollide() {
  let headCenterX = snake[0].x + bodySize / 2;
  let headCenterY = snake[0].y + bodySize / 2;
  if (
    headCenterX <= 0 ||
    headCenterX >= 1200 ||
    headCenterY <= 0 ||
    headCenterY >= 800
  ) {
    return true;
  }
  return false;
}

function obstCollide() {
  let isCollide = false;
  obstacles.forEach((coord) => {
    //check distance
    let centerX = coord.x + obstSize / 2,
      centerY = coord.y + obstSize / 2,
      headCenterX = snake[0].x + bodySize / 2,
      headCenterY = snake[0].y + bodySize / 2,
      diffX = centerX - headCenterX,
      diffY = centerY - headCenterY;
    if (
      diffX * diffX + diffY * diffY <=
      (bodySize / 2 + obstSize / 2) * (bodySize / 2 + obstSize / 2)
    ) {
      //collision
      isCollide = true;
    }
  });
  return isCollide;
}

function foodCollide() {
  isCollide = false;
  foods.forEach((coord, idx) => {
    //check distance
    let centerX = coord.x + foodSize / 2,
      centerY = coord.y + foodSize / 2,
      headCenterX = snake[0].x + bodySize / 2,
      headCenterY = snake[0].y + bodySize / 2,
      diffX = centerX - headCenterX,
      diffY = centerY - headCenterY;

    if (
      Math.floor(diffX * diffX + diffY * diffY) <=
      (bodySize / 2 + foodSize / 2) * (bodySize / 2 + foodSize / 2)
    ) {
      //collision
      foods.splice(idx, 1);
      isCollide = true;
    }
  });
  return isCollide;
}
