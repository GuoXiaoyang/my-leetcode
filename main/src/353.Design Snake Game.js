/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 353.Design Snake Game
 Design a Snake game that is played on a device with screen size = width x height.
 Play the game online if you are not familiar with the game.

 The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

 You are given a list of food's positions in row-column order. When a snake eats the
 food, its length and the game's score both increase by 1.

 Each food appears one by one on the screen. For example, the second food will not
 appear until the first food was eaten by the snake.

 When a food does appear on the screen, it is guaranteed that it will not appear on
 a block occupied by the snake.

 Example:
 Given width = 3, height = 2, and food = [[1,2],[0,1]].

 Snake snake = new Snake(width, height, food);

 Initially the snake appears at position (0,0) and the food at (1,2).

 |S| | |
 | | |F|

 snake.move("R"); -> Returns 0

 | |S| |
 | | |F|

 snake.move("D"); -> Returns 0

 | | | |
 | |S|F|

 snake.move("R"); -> Returns 1 (Snake eats the first food and right after that,
 the second food appears at (0,1) )

 | |F| |
 | |S|S|

 snake.move("U"); -> Returns 1

 | |F|S|
 | | |S|

 snake.move("L"); -> Returns 2 (Snake eats the second food)

 | |S|S|
 | | |S|

 snake.move("U"); -> Returns -1 (Game over because snake collides with border)
 ****************************************************************/
var Snake = function (width, height, food) {
  this.width = width;
  this.height = height;
  this.food = food;
  this.length=0;
  this.score=0;
  this.cur=[0,0];
  this.dir={L:[0,-1], D:[1, 0], R:[0, 1], U:[-1, 0]};
};

Snake.prototype = {
  move: function (order) {
    // if(this.food.length == 0) return "invalid";
    var next = this.food[0];
    var d=this.dir[order];
    if(!d) return "invalid";
    if(this.checkPos(this.cur[0]+d[0],this.cur[1]+d[1])) {
      this.cur[0]+=d[0];
      this.cur[1]+=d[1];
      if(this.cur[0]==next[0] && this.cur[1]==next[1]) {
        this.score+=1;
        this.length+=1;
        this.food.shift();
      }
    } else {
      this.score=-1;
    }
    return this.score;
  },
  score:function () {
   return this.score;
  },
  checkPos: function (x,y) {
    return (x>-1 && x<this.height && y>-1 && y<this.width);
  }
};


//test
var snake = new Snake(3,2,[[1,2],[0,1]]);
console.log("snake.cur:",snake.cur);
console.log("snake.move('R'):",snake.move('R'));
console.log("snake.cur:",snake.cur);
console.log("snake.move('D'):",snake.move('D'));
console.log("snake.cur:",snake.cur);
console.log("snake.move('R'):",snake.move('R'));
console.log("snake.cur:",snake.cur);
console.log("snake.move('U'):",snake.move('U'));
console.log("snake.cur:",snake.cur);
console.log("snake.move('L'):",snake.move('L'));
console.log("snake.cur:",snake.cur);
console.log("snake.move('U'):",snake.move('U'));
console.log("snake.cur:",snake.cur);
