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
const startPoint = new Coord(600, 400);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 20;

//각 장애물 위치
let obstacles = [];

//각 먹이 위치
let foods = [
  new Coord(150, 250),
  new Coord(50, 550),
  new Coord(250, 350),
  new Coord(125, 625),
  new Coord(350, 50),

  new Coord(450, 25),
  new Coord(900, 300),
  new Coord(900, 750),
  new Coord(525, 100),
  new Coord(700, 500),

  new Coord(700, 625),
  new Coord(900, 600),
  new Coord(1100, 100),
];
