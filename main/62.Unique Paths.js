/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 62. Unique Paths
 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?
 **********************************************************************************************/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//dynamic programming
//Actually the result is C(m+n-2,m-1)=C(m+n-2,n-1)
var uniquePaths = function(m, n) {
  var col=Math.max(m,n), row=Math.min(m,n);
  var paths = new Array(row).fill(1);
  for(var i=1;i<col;i++) {
    for(var j=1;j<row;j++) {
      paths[j] +=paths[j-1];
    }
  }
  return paths[row-1];
};


//test
var algo1 = "algo1";
console.time(algo1);
var res = uniquePaths(5,3);
console.timeEnd(algo1);
console.log("res:",res);
