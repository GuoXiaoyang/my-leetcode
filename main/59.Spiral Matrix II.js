/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 59. Spiral Matrix II
 Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

 For example,
 Given n = 3,

 You should return the following matrix:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
****************************************************************/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var result=[],tmp;
  for(var i=0;i<n;i++) {
    tmp=new Array(n).fill(0);
    result.push(tmp);
  }
  console.log("result:",result);
  var startRow=0,startCol=0;
  var endRow=n-1,endCol=n-1,num=1;
  for(i=0;i<n/2;i++) {
    for(var col=startCol;col<=endCol;col++,num++) {
      result[startRow][col]=num;
    }
    startRow++;
    for(var row=startRow;row<=endRow;row++,num++) {
      result[row][endCol]=num;
    }
    endCol--;
    if(endRow >= startRow) {
      for(var col=endCol;col>=startCol;col--,num++) {
        result[endRow][col]=num;
      }
      endRow--;
    }
    if(endCol>=startCol) {
      for(var row=endRow;row>=startRow;row--,num++) {
        result[row][startCol]=num;
      }
      startCol++;
    }
  }

  return result;
};

//test
var num = 3;
var algo = "algo";
console.time(algo);
var res = generateMatrix(num);
console.timeEnd(algo);
console.log("res:",res);