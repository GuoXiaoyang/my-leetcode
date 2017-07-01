/**
 * Created by gxy on 2017/3/29.
 */

/****************************************************************
 36. Valid Sudoku
 Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

 The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 [['5', '3', '.', '.', '7', '.', '.' , '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.' , '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.' , '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.' , '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.' , '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.' , '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2' , '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.' , '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.' , '7', '9']]

 A partially filled sudoku which is valid.

 Note:
 A valid Sudoku board (partially filled) is not necessarily solvable.
 Only the filled cells need to be validated.

****************************************************************/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var board1=[], board2=[] ,board3=[];
  var m=board.length, n = board[0].length;
  for(var i=0;i<m;i++) {
    board1[i] = [];
    board2[i] = [];
    board3[i] = [];
    for(var j=0;j<n;j++) {
      board1[i][j] = 0;
      board2[i][j] = 0;
      board3[i][j] = 0;
    }
  }
  var num,block;
  var flag = true;
  for(i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (board[i][j] != '.') {
        num = parseInt(board[i][j])-1;
        block = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (board1[i][num] === 0 && board2[j][num] === 0 && board3[block][num] === 0) {
          board1[i][num] = 1;
          board2[j][num] = 1;
          board3[block][num] = 1;
        } else {
          flag = false;
          break;
        }
      }
    }
  }

    return flag;

};

//test
var board =
  [".87654321","2........","3........","4........","5........","6........",
    "7........","8........","9........"]
var algo = "algo";
console.time(algo);
var  res = isValidSudoku(board);
console.timeEnd(algo);
console.log("res:",res);