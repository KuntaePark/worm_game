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
const obstSize = 1000;
//시작 지점 위치
const startPoint = new Coord(600, 400);

//지렁이 속도 관련
let spaceBetween = 15;
let time = 30;

//각 장애물 위치
let obstacles = [new Coord(100, 600)];

//각 먹이 위치
let foods = [
  new Coord(100, 75),
  new Coord(200, 150),
  new Coord(250, 600),
  new Coord(450, 550),
  new Coord(50, 550),
  
  new Coord(1000, 400),
  new Coord(950, 650),
  new Coord(900, 50),
  new Coord(800, 400),
  new Coord(975, 175),
  
  new Coord(500, 150),
  new Coord(650, 100),
  new Coord(125, 625),
  new Coord(400, 500),
];


