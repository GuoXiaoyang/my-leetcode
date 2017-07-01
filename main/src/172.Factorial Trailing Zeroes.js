/**
 * Created by gxy on 2017/6/7.
 */
/****************************************************************
 172. Factorial Trailing Zeroes
 Given an integer n, return the number of trailing zeroes in n!.

 Note: Your solution should be in logarithmic time complexity.
****************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var res=0;
  while(n) {
    res+=parseInt(n/5);
    n=parseInt(n/5);
  }
  return res;
};

//test
var n=6;
var algo = "algo";
console.time(algo);
var res = trailingZeroes(n);
console.timeEnd(algo);
console.log("res:",res);