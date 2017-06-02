/**
 * Created by gxy on 2017/5/23.
 */
/****************************************************************
 According to the Wikipedia's article: "The Game of Life, also known simply as Life,
 is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

 Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
 Each cell interacts with its eight neighbors (horizontal, vertical, diagonal)
 using the following four rules (taken from the above Wikipedia article):

 Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 Any live cell with two or three live neighbors lives on to the next generation.
 Any live cell with more than three live neighbors dies, as if by over-population..
 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 Write a function to compute the next state (after one update) of the board given its current state.

 Follow up:
 Could you solve it in-place? Remember that the board needs to be updated at the same time:
 You cannot update some cells first and then use their updated values to update other cells.
 In this question, we represent the board using a 2D array.
 In principle, the board is infinite, which would cause problems when the active area
 encroaches the border of the array. How would you address these problems?
****************************************************************/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if(!board || !board[0]) return;
  var rows=board.length, cols= board[0].length;
  var i,j;
  for(i=0;i<rows;i++) {
    for(j=0;j<cols;j++) {
      lives=numOfLiveNeighbors(board,i,j,rows,cols);
      console.log("i,j,lives:",i,j,lives);
      if(board[i][j]==1 && (lives==2 || lives==3)) board[i][j]=3;
      if(board[i][j]===0 && lives==3) board[i][j]=2;
    }
  }
  console.log("board:",board);
  for(i=0;i<rows;i++) {
    for(j=0;j<cols;j++) {
      board[i][j]=board[i][j]>>1;
    }
  }
  console.log("board:",board);
};

var numOfLiveNeighbors = function(board,i,j,rows,cols) {
  var lives=0;
  for(var m=Math.max(i-1,0);m<=Math.min(rows-1,i+1);m++) {
    for(var n=Math.max(j-1,0);n<=Math.min(cols-1,j+1);n++) {
      lives+=(board[m][n] & 1);
    }
  }
  lives -= (board[i][j]&1);
  return lives;
};

//test
var arr = [[1,1],[1,0]];
var algo = "algo";
console.time(algo);
var res = gameOfLife(arr);
console.timeEnd(algo);
