
/**
 * Created by gxy on 2017/4/13.
 */
/**********************************************************************************************
 73. Set Matrix Zeroes
 Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 **********************************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var cl=1, rows=matrix.length, cols=matrix[0].length;
  for(var i=0;i<rows;i++) {
    if(matrix[i][0] === 0) cl=0;
    for(var j=1;j<cols;j++) {
      if(matrix[i][j]===0) {
        matrix[0][j]=matrix[i][0]=0;
      }
    }
  }
  for(i=rows-1;i>=0;i--) {
    for(j=cols-1;j>=1;j--) {

      if(!matrix[0][j] || !matrix[i][0]) {
        matrix[i][j]=0;
      }
    }
    if(!cl) matrix[i][0]=0;
  }
  console.log("matrix", matrix);

};

//test
var arr=[[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]];
var algo1 = "algo1";
console.time(algo1);
var res = setZeroes(arr);
console.timeEnd(algo1);
console.log("res:",res);

