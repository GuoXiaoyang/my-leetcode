/**
 * Created by gxy on 2017/4/2.
 */

/****************************************************************
 48. Rotate Image
 You are given an n x n 2D matrix representing an image.

 Rotate the image by 90 degrees (clockwise).

 Follow up:
 Could you do this in-place?
****************************************************************/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var rowLen=matrix.length,tmp;
  for(var row = 0;row<parseInt((rowLen+1)/2);row++) {
    for(var col=0;col<parseInt(rowLen/2);col++) {
      tmp=matrix[row][col];
      matrix[row][col]=matrix[rowLen-1-col][row];
      matrix[rowLen-1-col][row] = matrix[rowLen-1-row][rowLen-1-col];
      matrix[rowLen-1-row][rowLen-1-col] = matrix[col][rowLen-1-row];
      matrix[col][rowLen-1-row] = tmp;
    }
  }
};

//test
// var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var algo = "algo";
console.time(algo);
rotate(matrix);
console.timeEnd(algo);
