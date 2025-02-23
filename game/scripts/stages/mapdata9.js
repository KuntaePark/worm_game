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
const startPoint = new Coord(600, 400);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 30;

//각 장애물 위치
let obstacles = [
  new Coord(-300, -360),
  new Coord(-300, 500),
  new Coord(800, -400),
  new Coord(800, 500),
];

//각 먹이 위치
let foods = [
  new Coord(100, 360),
  new Coord(50, 400),
  new Coord(100, 440),
  
  new Coord(400, 80),
  new Coord(775, 80),
  new Coord(430, 20),
  new Coord(510, 20),
  new Coord(590, 20),
  new Coord(670, 20),
  new Coord(750, 20),
  
  new Coord(425, 725),
  new Coord(505, 725),
  new Coord(585, 725),
  new Coord(665, 725),
  new Coord(745, 725),

  new Coord(1070, 360),
  new Coord(1120, 400),
  new Coord(1070, 440),
];
