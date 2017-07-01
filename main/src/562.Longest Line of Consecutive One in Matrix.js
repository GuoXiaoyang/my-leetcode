/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
 562.Longest Line of Consecutive One in Matrix
 Given a 01 matrix M, find the longest line of consecutive one in the matrix.
 The line could be horizontal, vertical, diagonal or anti-diagonal.
 Example:
 Input: [0,1,1,0], [0,1,1,0], [0,0,0,1] Output: 3
 Hint: The number of elements in the given matrix will not exceed 10,000.
****************************************************************/
//dynamic programming
var longestConsectiveOnes = function (matrix) {
  var row=matrix.length,col=matrix[0].length;
  if(row===0 || col===0) return 0;
  var res;
  var dp=[];
  for(var i=0;i<row;i++) {
    var tmp1=[];
    dp.push(tmp1);
    for (var j = 0; j < col; j++) {
      var tmp2=new Array(4).fill(0);
      dp[i].push(tmp2);
    }
  }

  for(var i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(matrix[i][j]===0) continue;
      for(var k=0;k<4;k++) {

        dp[i][j][k]=1;
      }
      //vertical
      if(i>0) dp[i][j][0]+=dp[i-1][j][0];
      //horizontal
      if(j>0) dp[i][j][1]+=dp[i][j-1][1];
      //diagonal
      if(i>0 && j>0) dp[i][j][2]+=dp[i-1][j-1][2];
      //anti-diagonal
      if(i>0 && j<col-1) {
        dp[i][j][3]+=dp[i-1][j+1][3];
      }
      res=Math.max(dp[i][j][0],dp[i][j][1],dp[i][j][2],dp[i][j][3]);
    }
  }
  return res;
};

//test
var matrix = [[0,1,1,0], [0,1,1,0], [0,0,0,1]];
var algo = "algo";
console.time(algo);
var res = longestConsectiveOnes(matrix);
console.timeEnd(algo);
console.log("res:",res);