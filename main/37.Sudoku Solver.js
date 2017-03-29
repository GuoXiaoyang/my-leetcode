/**
 * Created by gxy on 2017/3/30.
 */

/**********************************************************************************************
 37. Sudoku Solver
 Write a program to solve a Sudoku puzzle by filling the empty cells.

 Empty cells are indicated by the character '.'.

 You may assume that there will be only one unique solution.
 **********************************************************************************************/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

  if(!board || board.length === 0) return;
  for(var i=0;i<board.length;i++) {
    board[i] = board[i].toString();
  }

  solve(board);
  console.log("board:", board);

};
function solve(board) {
  var numStr = ['1','2','3','4','5','6','7','8','9'];

  for(var i=0;i<board.length;i++) {
    for(var j=0;j<board[0].length;j++) {
      console.log("i,j:", i,j);
      console.log("board[i][j]:", board[i][j]);
      if(board[i][j]=='.') {
        for(var k =0;k<numStr.length;k++) {
          console.log("k:", k);
          var valid = isValidNumber(board,i,j,numStr[k]);
          console.log("valid:", valid);

          if(valid) {

            board[i]=board[i].substring(0,j)+numStr[k]+board[i].substring(j+1);
            if(solve(board)) {
              return true;
            } else {
              board[i]=board[i].substring(0,j)+'.'+board[i].substring(j+1);
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValidNumber(board, i, j, c) {
  var num = parseInt(c);
  console.log("num:", num);
  for(var m=0;m<9;m++) {
    if(parseInt(board[i][m]) == num || parseInt(board[m][j]) == num) {
      return false
    }
  }
  for(m=Math.floor(i/3)*3;m<Math.floor(i/3)*3+3;m++) {
    for(var n=Math.floor(j/3)*3;n<Math.floor(j/3)*3;n++) {
      if(parseInt(board[m][n]) == num) {
        return false;
      }
    }
    return true;
  }
}




//test
var arr=["..9748...","7........",".2.1.9...","..7...24.",".64.1.59.",".98...3..","...8.3.2.","........6","...2759.."];
var algo1 = "algo1";
console.time(algo1);
solveSudoku(arr);
console.timeEnd(algo1);
