/**
 * Created by gxy on 2017/4/3.
 */

/****************************************************************
 54. Spiral Matrix
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 For example,
 Given the following matrix:

 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 You should return [1,2,3,6,9,8,7,4,5].
****************************************************************/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length===0) return matrix;
  var startRow=0,startCol=0;
  var endRow=matrix.length-1,endCol=matrix[0].length-1;
  var result=[],row,col;
  while(startRow<=endRow && startCol<=endCol) {
    for(col=startCol;col<=endCol;col++) result.push(matrix[startRow][col]);
    startRow++;
    for(row=startRow;row<=endRow;row++) result.push(matrix[row][endCol]);
    endCol--;
    if(startRow<=endRow) {

      for(col=endCol;col>=startCol;col--) result.push(matrix[endRow][col]);
      endRow--;
    }
    if(startCol<=endCol) {

      for(row=endRow;row>=startRow;row--) result.push(matrix[row][startCol]);
      startCol++;
    }

  }
  return result;
};


//test
var arr =  [
  [2,3]
];
/*var arr =  [
  [ 1, 2, 3,4 ],
  [5,6,7,8],
  [9,10,11,12 ]
];*/
var algo = "algo";
console.time(algo);
var res = spiralOrder(arr);
console.timeEnd(algo);
console.log("res:",res);
