function Coord(x, y) {
  this.x = x;
  this.y = y;
}

//맵 크기는 가로 1200 세로 800
//좌상단이 좌표 0,0
const foodSize = 30;
const obstSize = 500;
//시작 지점 위치
const startPoint = new Coord(100, 400);

//각 장애물 위치
let obstacles = [
  new Coord(1000, 600),
  new Coord(100, 500),
  new Coord(200, -250),
];

//각 먹이 위치
let foods = [
  new Coord(200, 300),
  new Coord(100, 400),
  new Coord(600, 600),
  new Coord(1100, 400),
  new Coord(875, 375),
];
