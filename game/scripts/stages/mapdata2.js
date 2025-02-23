function Coord(x, y) {
  this.x = x;
  this.y = y;
}

//Coord는 coordinate, 좌표를 의미
//Coord(x,y)는 css에서 left: x; top: y;의 위치
//맵 크기는 가로 1200 세로 800
//좌상단이 좌표 0,0
const WIDTH = 1200;
const HEIGHT = 800;

const foodSize = 50;
const obstSize = 500;
//시작 지점 위치
const startPoint = new Coord(600, 400);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 30;

//각 장애물 위치
let obstacles = [];

//각 먹이 위치
let foods = [
  new Coord(200, 300),
  new Coord(1000, 400),
  new Coord(400, 600),
  new Coord(700, 100),
  new Coord(100, 700),

  new Coord(400, 200),
  new Coord(600, 700),
  new Coord(625, 125),
  new Coord(150, 100),
  new Coord(1100, 700),
  
  new Coord(875, 525),
];
