/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 286.Walls and Gates
 You are given a m x n 2D grid initialized with these three possible values.

 -1 - A wall or an obstacle.
  0 - A gate.
 INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent
 INF as you may assume that the distance to a gate is less than 2147483647.
 Fill each empty room with the distance to its nearest gate. If it is impossible to
 reach a gate, it should be filled with INF.

 For example, given the 2D grid:
 INF  -1  0  INF
 INF INF INF  -1
 INF  -1 INF  -1
 0  -1 INF INF
 After running your function, the 2D grid should be:
 3  -1   0   1
 2   2   1  -1
 1  -1   2  -1
 0  -1   3   4
 ****************************************************************/
//
var shortMap = function (grid) {
  var queue=[];
  for(var i=0;i<grid.length;i++) {
    for(var j=0;j<grid[0].length;j++) {
      if(grid[i][j]==0) {
        queue.push([i,j]);
      }
    }
  }
  var dir=[[0,-1],[1,0],[0,1],[-1,0]];
  while(queue.length>0) {
    var node=queue.shift();
    var x=node[0],y=node[1];
    for(i=0;i<dir.length;i++) {
      var m=dir[i][0],n=dir[i][1];
      if(notWall(grid,x+m,y+n) && grid[x+m][y+n]>grid[x][y]+1) {
        grid[x+m][y+n]=grid[x][y]+1;
        queue.push([x+m,y+n]);
      }
    }
  }
  console.log("grid:",grid);
};

function notWall(grid,i,j) {
  return i>-1 && i<grid.length && j>-1 && j<grid[0].length;
}

//test
var inf=Number.MAX_VALUE;
var grid =  [[inf,  -1,  0,  inf], [inf, inf, inf,  -1], [inf,  -1, inf,  -1], [0,  -1, inf, inf]];
var algo = "algo";
console.time(algo);
shortMap(grid);
console.timeEnd(algo);

