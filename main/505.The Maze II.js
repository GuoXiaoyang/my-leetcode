/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 * 505.The Maze II
 There is a ball in a maze with empty spaces and walls. The ball can Go through empty
 spaces by rolling up, down, left or right, but it won't stop rolling until hitting
 a wall. When the ball stops, it could choose the next direction.

 Given the ball's start position, the destination and the maze, find the shortest
 distance for the ball to stop at the destination. The distance is defined by the
 number of empty spaces traveled by the ball from the start position (excluded) to the
 destination (included). If the ball cannot stop at the destination, return -1.

 The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty
 space. You may assume that the borders of the maze are all walls. The start and
 destination coordinates are represented by row and column indexes.

 Example 1

 Input 1: a maze represented by a 2D array

 0 0 1 0 0
 0 0 0 0 0
 0 0 0 1 0
 1 1 0 1 1
 0 0 0 0 0

 Input 2: start coordinate (rowStart, colStart) = (0, 4)
 Input 3: destination coordinate (rowDest, colDest) = (4, 4)

 Output: 12
 Explanation: One shortest way is : left -> down -> left -> down -> right -> down ->right.
 The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.

 Example 2

 Input 1: a maze represented by a 2D array

 0 0 1 0 0
 0 0 0 0 0
 0 0 0 1 0
 1 1 0 1 1
 0 0 0 0 0

 Input 2: start coordinate (rowStart, colStart) = (0, 4)
 Input 3: destination coordinate (rowDest, colDest) = (3, 2)

 Output: -1
 Explanation: There is no way for the ball to stop at the destination.

 Note:
 There is only one ball and one destination in the maze.
 Both the ball and the destination exist on an empty space, and they will not be at the
 same position initially.
 The given maze does not contain border (like the red rectangle in the example pictures),
 but you could assume the border of the maze are all walls.
 The maze contains at least 2 empty spaces, and both the width and height of the maze
 won't exceed 100.
****************************************************************/
var PriorityQueue = require('./PriorityQueue');

var Point = function (x,y,l,p) {
  this.x=x;
  this.y=y;
  this.l=l;
};

var shortestDistance = function (maze, start, dest) {
  if(maze.length == 0 || maze[0].length == 0) return false;
  if(start[0] == dest[0] && start[1] == dest[1]) return true;
  //init points
  var points=[];
  for(var i=0;i<maze.length;i++) {
    points.push([]);
    for(var j=0;j<maze[0].length;j++) {
      points[i].push(new Point(i,j,Number.MAX_VALUE));
    }
  }
  //priority queue to BFS
  var queue = new PriorityQueue(function compare(node1, node2) {
    return node1.l>node2.l;
  });
  //init the start
  queue.push(new Point(start[0],start[1],0));
  var ds="dlru";
  var dir=[[1,0],[0,-1],[0,1],[-1,0]];
  while(queue.size()>0) {
    var node=queue.pop();
    if(!queue.comparator(points[node.x][node.y],node)) continue;
    points[node.x][node.y]=node;
    for(i=0;i<dir.length;i++) {
      var x=node.x,y=node.y,l=node.l,p=node.p;
      if(notWall(maze,x+dir[i][0],y+dir[i][1])) {
        while(notWall(maze,x+dir[i][0],y+dir[i][1])) {
          x+=dir[i][0];
          y+=dir[i][1];
          l++;
        }
        queue.push(new Point(x,y,l));
      }
    }
  }
  return points[dest[0]][dest[1]].l==Number.MAX_VALUE?-1:points[dest[0]][dest[1]].l;
};

function notWall(maze,i,j) {
  return i>-1 && i<maze.length && j>-1 && j<maze[0].length && maze[i][j]!=1;
}

//test
var maze = [[0, 0, 1, 0, 0], [0,0,0,0,0],[0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], start=[0,4],destination=[3,2];
var algo = "algo";
console.time(algo);
var res = shortestDistance(maze, start, destination);
console.timeEnd(algo);
console.log("res:",res);
