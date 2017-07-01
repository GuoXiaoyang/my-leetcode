/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 317.Shortest Distance from All Buildings
 You want to build a house on an empty land which reaches all buildings in the shortest
 amount of distance. You can only move up, down, left and right. You are given a 2D
 grid of values 0, 1 or 2, where:

 Each 0 marks an empty land which you can pass by freely.
 Each 1 marks a building which you cannot pass through.
 Each 2 marks an obstacle which you cannot pass through.
 For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):

 1 - 0 - 2 - 0 - 1
 |   |   |   |   |
 0 - 0 - 0 - 0 - 0
 |   |   |   |   |
 0 - 0 - 1 - 0 - 0
 The point (1,2) is an ideal empty land to build a house, as the total travel distance
 of 3+3+1=7 is minimal. So return 7.

 Note:
 There will be at least one building. If it is not possible to build such house
 according to the above rules, return -1.
 ****************************************************************/
//BFS: from every building and add the shortest distance
var shortestPosition = function (grid) {
  if(!grid || !grid.length || !grid[0].length) return -1;
  //init dis matrix
  var minDis=Number.MAX_VALUE,row =grid.length,col=grid[0].length;
  var totalDist=[],dist=[];
  for(var i=0;i<row;i++) {
    totalDist.push(new Array(col).fill(0));
    dist.push(new Array(col).fill(Number.MAX_VALUE));
  }
  //BFS and iterate
  for(i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(grid[i][j]==1) {
        BFS(grid,dist,i,j);
        console.log("dist:",dist);
        minDis = findMinDist(totalDist,dist);
        console.log("totalDist:",totalDist);
      }
    }
  }
  return minDis==Number.MAX_VALUE?-1:minDis;
};

function BFS(grid,dist,x,y) {
  for(var i=0;i<grid.length;i++) {
    for(var j=0;j<grid[0].length;j++) {
      dist[i][j]=Number.MAX_VALUE;
    }
  }
  var queue=[];
  queue.push([x,y]);
  dist[x][y]=0;
  while(queue.length>0) {
    var node=queue.shift();
    var dir=[[0,-1],[1,0],[0,1],[-1,0]];
    for(i=0;i<dir.length;i++) {
      var x=node[0],y=node[1];
      if(isValidPoint(grid,x+dir[i][0],y+dir[i][1]) &&
        dist[x+dir[i][0]][y+dir[i][1]]>dist[x][y]+1) {
        dist[x+dir[i][0]][y+dir[i][1]]=dist[x][y]+1;
        queue.push([x+dir[i][0],y+dir[i][1]]);
      }
    }
  }
}

function findMinDist(totalDist,dist) {
  var min=Number.MAX_VALUE;
  for(var i=0;i<totalDist.length;i++) {
    for(var j=0;j<totalDist[0].length;j++) {
      if(dist[i][j]==Number.MAX_VALUE) {
        totalDist[i][j]=Number.MAX_VALUE;
      } else {
        totalDist[i][j]=totalDist[i][j]+dist[i][j];
      }
      min=Math.min(min,totalDist[i][j]);
    }
  }
  return min;
}

function isValidPoint(grid,x,y) {
  return x>-1 && x<grid.length && y>-1 && y<grid[0].length && grid[x][y]!=2;
}
//test
var grid= [[1,2,2,0,1], [2,0,0,0,0], [0,0,1,0,0]];
var algo = "algo";
console.time(algo);
var res = shortestPosition(grid);
console.timeEnd(algo);
console.log("res:",res);
