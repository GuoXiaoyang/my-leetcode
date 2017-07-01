/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 63. Unique Paths II
 Follow up for "Unique Paths":

 Now consider if some obstacles are added to the grids. How many unique paths would there be?

 An obstacle and empty space is marked as 1 and 0 respectively in the grid.

 For example,
 There is one obstacle in the middle of a 3x3 grid as illustrated below.

 [
 [0,0,0],
 [0,1,0],
 [0,0,0]
 ]
 The total number of unique paths is 2.

 Note: m and n will be at most 100.
 **********************************************************************************************/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var col=obstacleGrid[0].length;
  var row=obstacleGrid.length;
  var paths = new Array(col).fill(0);
  paths[0]=1
  for(var i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(obstacleGrid[i][j] === 1) {
        paths[j]=0;
      } else {
        if(j>0) paths[j] +=paths[j-1];
      }
    }
  }
  return paths[col-1];
};

//test
var obstacleGrid=[[0],[1]];
var algo1 = "algo1";
console.time(algo1);
var res = uniquePathsWithObstacles(obstacleGrid);
console.timeEnd(algo1);
console.log("res:",res);