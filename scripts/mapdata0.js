function Coord(x, y) {
  this.x = x;
  this.y = y;
}

const foodSize = 30;
const obstSize = 500;
const startPoint = new Coord(100, 400);

let obstacles = [
  new Coord(1000, 600),
  new Coord(100, 500),
  new Coord(200, -250),
];

let foods = [
  new Coord(200, 300),
  new Coord(100, 400),
  new Coord(400, 800),
  new Coord(600, 600),
  new Coord(1100, 400),
  new Coord(875, 375),
];
