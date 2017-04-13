/**
 * Created by gxy on 2017/4/13.
 */

/**********************************************************************************************
 74. Search a 2D Matrix
 Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

 Integers in each row are sorted from left to right.
 The first integer of each row is greater than the last integer of the previous row.
 For example,

 Consider the following matrix:

 [
 [1,   3,  5,  7],
 [10, 11, 16, 20],
 [23, 30, 34, 50]
 ]
 Given target = 3, return true.
 **********************************************************************************************/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length===0 || matrix[0].length===0) return false;
  var row = matrix.length, col=matrix[0].length;
  var len=row*col, lo=0,hi=len-1,mid,val;
  while(lo<hi) {
    mid = parseInt((lo+hi)/2);
    console.log("lo,hi", lo,hi);

    console.log("parseInt(mid/col),mid%row", parseInt(mid/col),mid%col);
    val = matrix[parseInt(mid/col)][mid%col];
    if(val > target) {
      hi=mid-1;
    } else if(val<target) {
      lo=mid+1;
    } else {
      return true;
    }
  }
  return matrix[parseInt(lo/col)][lo%col]==target;
};

//test
var arr=[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
var algo1 = "algo1";
console.time(algo1);
var res = searchMatrix(arr,50);
console.timeEnd(algo1);
console.log("res:",res);


