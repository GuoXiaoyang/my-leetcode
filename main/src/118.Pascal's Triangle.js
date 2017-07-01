/**
 * Created by gxy on 2017/4/17.
 */

/****************************************************************
 118. Pascal's Triangle
 Given numRows, generate the first numRows of Pascal's triangle.

 For example, given numRows = 5,
 Return

 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
****************************************************************/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var triangle=[],tmp=[];
  var i=0,j=0;
  for(;i<numRows;i++) {
    tmp.splice(0,0,1);
    for(j=1;j<=i-1;j++) {
      tmp.splice(j,1,tmp[j]+tmp[j+1]);
    }
    triangle.push(tmp.slice(0));
  }
  return triangle;
};


//test
var num = 5;
var algo = "algo";
console.time(algo);
var res = generate(num);
console.timeEnd(algo);
console.log("res:",res);