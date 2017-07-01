/**
 * Created by gxy on 2017/4/13.
 */
/****************************************************************
 79. Word Search
 Given a 2D board and a word, find if the word exists in the grid.

 The word can be constructed from letters of sequentially adjacent cell,
 where "adjacent" cells are those horizontally or vertically neighboring.
 The same letter cell may not be used more than once.

 For example,
 Given board =

 [
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
 ]
 word = "ABCCED", -> returns true,
 word = "SEE", -> returns true,
 word = "ABCB", -> returns false.
****************************************************************/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for(var i=0;i<board.length;i++) {
    for(var j=0;j<board[0].length;j++) {
      if(existBoard(i,j,board,word,0)) return true;
    }
  }
  return false;
};

function existBoard(x,y,board,word,num) {
  if(num==word.length) return true;
  console.log("x,y:",x,y);
  if(x<0 || y<0 || x>=board.length || y>=board[0].length || board[x][y]!=word[num]) return false;
  var t=board[x][y];
  board[x][y]=(board[x][y]==='0')?'1':'0';
  var exist =  existBoard(x,y-1,board,word,num+1) || existBoard(x,y+1,board,word,num+1)
  || existBoard(x-1,y,board,word,num+1) || existBoard(x+1,y,board,word,num+1);
  board[x][y]=t;
  return exist;
}

//test
var board =  [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
var word="ABCCED";
var algo = "algo";
console.time(algo);
var res = exist(board,word);
console.timeEnd(algo);
console.log("res:",res);