/**
 * Created by gxy on 2017/4/3.
 */
/****************************************************************
 Follow up for N-Queens problem.

 Now, instead outputting board configurations, return the total number of distinct solutions.
****************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var row=0,res=[0];
  var state = new Array(n).fill(-1);
  totalNQueensHelper(state,row,res);
  return res[0];
};
function totalNQueensHelper(state,row,res) {
  if(row===state.length) {
    res[0]++;
    console.log("res:",res);
    return;
  }
  for(var col=0;col<state.length;col++) {
    if(isValid(state,row,col)) {
      state[row]=col;
      console.log("state:",state);
      totalNQueensHelper(state,row+1,res);
      state[row]=-1;
    }
  }
}

function isValid(state,row,col) {
  for(var i=0;i<row;i++) {
    if(state[i]===col || (Math.abs(i-row))===Math.abs(state[i]-col)) {
      return false;
    }
  }
  return true;
}

//test

var algo = "algo";
console.time(algo);
var res= totalNQueens(4);
console.timeEnd(algo);
console.log("res:",res);