/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 70. Climbing Stairs
 You are climbing a stair case. It takes n steps to reach to the top.

 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Note: Given n will be a positive integer.
 **********************************************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
// easy to use recursive method
// f(x) = f(x-1)+f(x-2)
var climbStairs = function(n) {
  if(n==1) return 1;
  if(n==2) return 2;
  var paths=[1,2];
  for(var i=2;i<n;i++) {
    paths.push(paths[i-2]+paths[i-1]);
  }
  return paths[n-1];
};


//test
var n=5;
var algo1 = "algo1";
console.time(algo1);
var res = climbStairs(n);
console.timeEnd(algo1);
console.log("res:",res);
