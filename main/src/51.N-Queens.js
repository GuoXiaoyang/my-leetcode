/**
 * Created by gxy on 2017/4/3.
 */

/****************************************************************
 The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 such that no two queens attack each other.
 Given an integer n, return all distinct solutions to the n-queens puzzle.

 Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

 For example,
 There exist two distinct solutions to the 4-queens puzzle:

 [
 [".Q..",  // Solution 1
 "...Q",
 "Q...",
 "..Q."],

 ["..Q.",  // Solution 2
 "Q...",
 "...Q",
 ".Q.."]
 ]
****************************************************************/

/**
 * @param {number} n
 * @return {string[][]}
 */

//recursive backstrace
var solveNQueens1 = function(n) {
  //use array to store the queen position [i,state[i]]
  var result=[],row=0;
  var state=new Array(n).fill(-1);
  helper(result,state,row);
  return result;

};

function helper(result,state,row) {
  if(row===state.length) {
    var tmpResult=[],tmpStr;
    for(var i=0;i<state.length;i++) {
      tmpStr=new Array(state.length).fill('.');
      tmpStr[state[i]]='Q';
      tmpResult.push(tmpStr.join(''));
    }
    result.push(tmpResult);
  }
  for(var col=0;col<state.length;col++) {
    if(isValid(state,row,col)) {
      state[row] = col;
      helper(result,state,row+1);
      state[row] = -1;
    }
  }
}

function isValid(state,row,col) {
  for(var i=0;i<row;i++) {
    if(state[i]===col || Math.abs(row-i)===Math.abs(col-state[i])) {
      return false;
    }
  }
  return true;
}

//loop backstrace

var solveNQueens2 = function(n) {
  var result=[],row=0,col;
  var state=new Array(n).fill(-1);
  while(true) {
    for(col=state[row]+1;col<n;col++) {
      if(isValid(state,row,col)) {
        state[row] = col;
        if(row===n-1) {
          var tmpResult=[],tmpStr;
          for(var i=0;i<state.length;i++) {
            tmpStr=new Array(state.length).fill('.');
            tmpStr[state[i]]='Q';
            tmpResult.push(tmpStr.join(''));
          }
          result.push(tmpResult);
        } else {
          row++;
          break;
        }
      }
    }
    if(col===n) {
      if(row===0) break;
      state[row]=-1;
      row--;

    }
  }
  return result;
};

//the most efficient solution
//use bit sign to store the position
var solveNQueens3 = function(n) {
  //use array to store the queen position [i,state[i]]
  var result=[],rowBit=0,leftBit=0,rightBit=0,row=0;
  var str="";
  for(var i=0;i<n;i++) {
    str+='.';
  }
  var tmpResult=new Array(n).fill(str);
  var upperlim = (1<<n)-1;
  helperQueen(result,tmpResult,row,rowBit,leftBit,rightBit,upperlim);
  return result;

};

function helperQueen(result,tmpResult,row,rowBit,leftBit,rightBit,upperlim) {
  var pos,p;
  if(rowBit !== upperlim) {
    pos = upperlim & (~(rowBit | leftBit | rightBit));
    while(pos) {
      p=pos & (~pos+1);
      pos = pos - p;
      setQueen(tmpResult,row,p,'Q');
      helperQueen(result,tmpResult,row+1,rowBit|p,(leftBit|p)<<1,(rightBit|p)>>1,upperlim);
      setQueen(tmpResult,row,p,'.');
    }
  } else {
    result.push(tmpResult.slice(0));
  }
}

function setQueen(tmpResult, row, p, val)
{
  var col = 0;
  while(!(p & 1))
  {
    p >>= 1;
    col++;
  }
  tmpResult[row]= tmpResult[row].substring(0,col)+val+tmpResult[row].substring(col+1);
}


//test

var algo = "algo1";
console.time(algo);
var res1 = solveNQueens1(4);
console.timeEnd(algo);
console.log("res1:",res1);


algo = "algo2";
console.time(algo);
var res2 = solveNQueens2(4);
console.timeEnd(algo);
console.log("res2:",res2);
algo = "algo3";

console.time(algo);
var res3 = solveNQueens3(4);
console.timeEnd(algo);
console.log("res3:",res3);
