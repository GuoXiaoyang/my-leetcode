/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 311.Sparse Matrix Multiplication
 Given two sparse matrices A and B, return the result of AB.
 You may assume that A's column number is equal to B's row number.
 Example:
 A = [ [ 1, 0, 0], [-1, 0, 3] ] B = [ [ 7, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 1 ] ] | 1 0 0 | | 7 0 0 | | 7 0 0 |
 AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 | | 0 0 1 |
****************************************************************/
var matrixMultiply = function (matrixA, matrixB) {
  var m=matrixA.length,nA=matrixA[0].length,n=matrixB[0].length;
  var res=new Array(m);
  for(var i=0;i<m;i++) {
    res[i]=new Array(n).fill(0);
  }
  for(var i=0;i<m;i++) {
    for(var j=0;j<nA;j++) {
      if(matrixA[i][j]!==0) {
        for(var k=0;k<n;k++) {
          if(matrixB[j][k]!==0) {
            res[i][k]+=matrixA[i][j]*matrixB[j][k];
          }
        }
      }
    }
  }
  return res;
};

//test
var matrixA = [ [ 1, 0, 0], [-1, 0, 3] ],matrixB=[ [ 7, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 1 ] ];
var algo = "algo";
console.time(algo);
var res = matrixMultiply(matrixA,matrixB);
console.timeEnd(algo);
console.log("res:",res);