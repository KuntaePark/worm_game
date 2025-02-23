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
const obstSize = 500;
//시작 지점 위치
const startPoint = new Coord(600, 700);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 30;

//각 장애물 위치
let obstacles = [
  new Coord(-250, 150),
  new Coord(350, 150),
  new Coord(950, 150),
  new Coord(50, -400),
  new Coord(650, -400),
];

//각 먹이 위치
let foods = [
  new Coord(25, 25),
  new Coord(25, 65),
  new Coord(25, 105),
  
  new Coord(1150, 25),
  new Coord(1150, 65),
  new Coord(1150, 105),
  
  new Coord(560, 65),
  new Coord(600, 25),
  new Coord(640, 65),
  
  new Coord(290, 300),
  new Coord(290, 350),
  new Coord(290, 400),
  new Coord(290, 450),

  new Coord(890, 300),
  new Coord(890, 350),
  new Coord(890, 400),
  new Coord(890, 450),
];

