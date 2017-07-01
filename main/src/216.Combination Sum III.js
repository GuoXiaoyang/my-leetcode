/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 216. Combination Sum III
 Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]
****************************************************************/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res=[];
  if(n>45) return res;
  var tmp=[],start=1,len=0;
  combinationSum3Help(res,tmp,start,len,k,n);
  return res;

};

function combinationSum3Help(res,tmp,start,len,k,n) {
  if(len==k) {
    if(n===0) {
      res.push(tmp.slice(0));
    } else return;
  }
  for(var i=start;i<=9;i++) {
    tmp.push(i);
    combinationSum3Help(res,tmp,i+1,len+1,k,n-i);
    tmp.pop();
  }
}

//test
var k=3,n=9;
var algo = "algo";
console.time(algo);
var res = combinationSum3(k,n);
console.timeEnd(algo);
console.log("res:",res);