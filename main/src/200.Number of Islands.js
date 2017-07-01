/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 200.Number of Islands
 Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four prerequisites of the grid are all surrounded by water.
 Example 1:
 11110
 11010
 11000
 00000
 Answer: 1
 Example 2:
 11000
 11000
 00100
 00011
 Answer: 3
****************************************************************/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  var res=0;
  var visited=[];
  for(var i=0;i<grid.length;i++) {
    visited.push(new Array(grid[0].length).fill(false));
  }
  for(i=0;i<grid.length;i++) {
    for(var j=0;j<grid[0].length;j++) {
      if(grid[i][j]!='0') {
        if(!visited[i][j]) {
          res++;
          dfs(grid,visited,i,j);
        }
      }
    }
  }
  return res;
};

function dfs(grid,visited,i,j) {
  if(visited[i][j]) return;
  visited[i][j] = true;
  var dir=[[0,-1],[1,0],[0,1],[-1,0]];
  for(var k=0;k<dir.length;k++) {
    if(i+dir[k][0]>-1 && i+dir[k][0]<grid.length && j+dir[k][1]>-1
      && j+dir[k][1]<grid[0].length && grid[i+dir[k][0]][j+dir[k][1]]=='1') {
      dfs(grid,visited,i+dir[k][0],j+dir[k][1]);
    }
  }
}


//test
var grid = ["11000", "11000", "00100", "00011"];
var algo = "algo";
console.time(algo);
var res = numIslands(grid);
console.timeEnd(algo);
console.log("res:",res);