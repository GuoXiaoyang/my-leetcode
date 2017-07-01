/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 499.The Maze III
 There is a ball in a maze with empty spaces and walls. The ball can go through empty
 spaces by rolling up (u), down (d), left (l) or right (r), but it won't stop rolling
 until hitting a wall. When the ball stops, it could choose the next direction.
 There is also a hole in this maze. The ball will drop into the hole if it rolls on to
 the hole.

 Given the ball position, the hole position and the maze, find out how the ball could
 drop into the hole by moving the shortest distance. The distance is defined by the
 number of empty spaces traveled by the ball from the start position (excluded) to the
 hole (included). Output the moving directions by using 'u', 'd', 'l' and 'r'.
 Since there could be several different shortest ways, you should output the
 lexicographically smallest way. If the ball cannot reach the hole, output "impossible".

 The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty
 space. You may assume that the borders of the maze are all walls. The ball and the hole
 coordinates are represented by row and column indexes.

 Example 1

 Input 1: a maze represented by a 2D array

 0 0 0 0 0
 1 1 0 0 1
 0 0 0 0 0
 0 1 0 0 1
 0 1 0 0 0

 Input 2: ball coordinate (rowBall, colBall) = (4, 3)
 Input 3: hole coordinate (rowHole, colHole) = (0, 1)

 Output: "lul"
 Explanation: There are two shortest ways for the ball to drop into the hole.
 The first way is left -> up -> left, represented by "lul".
 The second way is up -> left, represented by 'ul'.
 Both ways have shortest distance 6, but the first way is lexicographically smaller
 because 'l' < 'u'. So the output is "lul".




 Example 2

 Input 1: a maze represented by a 2D array

 0 0 0 0 0
 1 1 0 0 1
 0 0 0 0 0
 0 1 0 0 1
 0 1 0 0 0

 Input 2: ball coordinate (rowBall, colBall) = (4, 3)
 Input 3: hole coordinate (rowHole, colHole) = (3, 0)
 Output: "impossible"
 Explanation: The ball cannot reach the hole.




 Note:

 There is only one ball and one hole in the maze.
 Both the ball and hole exist on an empty space, and they will not be at the same
 position initially.
 The given maze does not contain border (like the red rectangle in the example pictures),
 but you could assume the border of the maze are all walls.
 The maze contains at least 2 empty spaces, and the width and the height of the maze
 won't exceed 30.
 ****************************************************************/
var PriorityQueue = require('../modules/PriorityQueue');

var Point = function (x, y, l, p) {
  this.x = x;
  this.y = y;
  this.l = l;
  this.p = p;
};

var reachPath = function (maze, ball, hole) {
  if (maze.length == 0 || maze[0].length == 0) return false;
  if (ball[0] == hole[0] && ball[1] == hole[1]) return true;
  //init points
  var points = [];
  for (var i = 0; i < maze.length; i++) {
    points.push([]);
    for (var j = 0; j < maze[0].length; j++) {
      points[i].push(new Point(i, j, Number.MAX_VALUE, ""));
    }
  }
  //priority queue to BFS
  var queue = new PriorityQueue(function compare(node1, node2) {
    return node1.l > node2.l ? true : (node1.l < node2.l ? false : node1.p > node2.p);
  });
  //init the start
  queue.push(new Point(ball[0], ball[1], 0, ""));
  var ds = "dlru";
  var dir = [[1, 0], [0, -1], [0, 1], [-1, 0]];
  while (queue.size() > 0) {
    var node = queue.pop();
    if (!queue.comparator(points[node.x][node.y], node)) continue;
    points[node.x][node.y] = node;
    for (i = 0; i < dir.length; i++) {
      var x = node.x, y = node.y, l = node.l, p = node.p;
      if (notWall(maze, x + dir[i][0], y + dir[i][1])) {
        while (notWall(maze, x + dir[i][0], y + dir[i][1])) {
          x += dir[i][0];
          y += dir[i][1];
          l++;
          if (x == hole[0] && y == hole[1]) {
            break;
          }
        }
        queue.push(new Point(x, y, l, p + ds[i]));
      }
    }
  }
  return points[hole[0]][hole[1]].l == Number.MAX_VALUE ? "impossible" : points[hole[0]][hole[1]].p;
};

function notWall(maze, i, j) {
  return i > -1 && i < maze.length && j > -1 && j < maze[0].length && maze[i][j] != 1;
}

//test
var maze = [[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], start = [4, 3], hole = [3, 0];
var algo = "algo";
console.time(algo);
var res = reachPath(maze, start, hole);
console.timeEnd(algo);
console.log("res:", res);