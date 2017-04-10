/**
 * Created by gxy on 2017/4/10.
 */

/****************************************************************
 64. Minimum Path Sum
 Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

 Note: You can only move either down or right at any point in time.
****************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length===0 || grid[0].length===0) return 0;
  var height = grid.length, width = grid[0].length;
  var result = [];
  var i;
  for(i=0;i<height;i++) {
    var tmp=new Array(width).fill(0);
    result.push(tmp);
  }
  result[0][0]=grid[0][0];
  for(i=1;i<width;i++) {
    result[0][i] =result[0][i-1]+grid[0][i];
  }
  for(i=1;i<height;i++) {
    result[i][0] =result[i-1][0]+grid[i][0];
  }
  console.log("result:",result);
  for(i=1;i<height;i++) {
    for(var j=1;j<width;j++) {
      result[i][j]=Math.min(result[i-1][j],result[i][j-1])+grid[i][j];
    }
  }
  return result[height-1][width-1];
};

//test
var grid = [[1,2,3,4],[5,6,7,8]];
var algo = "algo";
console.time(algo);
var res = minPathSum(grid);
console.timeEnd(algo);
console.log("res:",res);