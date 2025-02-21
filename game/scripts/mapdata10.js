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

const foodSize = 30;
const obstSize = 700;
//시작 지점 위치
const startPoint = new Coord(100, 400);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 30;

//각 장애물 위치
let obstacles = [
  new Coord(-400, -360),
  new Coord(-400, 500),
  new Coord(400, 40),
  new Coord(1040, -400),
  new Coord(1040, 500),
];

//각 먹이 위치
let foods = [
  new Coord(10, 400),
  new Coord(10, 360),
  new Coord(10, 440),
  new Coord(200, 400),
  new Coord(240, 400),
  new Coord(280, 400),

  new Coord(440, 80),
  new Coord(480, 40),
  new Coord(520, 10),
  new Coord(600, 10),
  new Coord(680, 10),
  new Coord(760, 10),
  new Coord(840, 10),

  new Coord(680, 750),
  new Coord(760, 750),
  new Coord(840, 750),

  new Coord(1120, 400),
  new Coord(1120, 360),
  new Coord(1120, 440),
];
