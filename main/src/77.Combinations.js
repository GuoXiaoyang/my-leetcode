/**
 * Created by gxy on 2017/4/13.
 */
/**********************************************************************************************
 77. Combinations
 Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
 **********************************************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result=[],tmp=[];
  combineHelp(result,tmp,0,0,n,k);
  return result;
};

function combineHelp(result,tmp,start,num,n,k) {
  if(num==k) {
    console.log("tmp:",tmp);
    result.push(tmp.slice(0));
    return;
  }
  for(var i=start;i<n;i++) {
    tmp.push(i+1);
    combineHelp(result,tmp,i+1,num+1,n,k);
    tmp.pop();
  }
}


//test
var n=4,k=2;
var algo1 = "algo1";
console.time(algo1);
var res = combine(n,k);
console.timeEnd(algo1);
console.log("res:",res);