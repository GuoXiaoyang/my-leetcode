/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 202. Happy Number
 Write an algorithm to determine if a number is "happy".

 A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

 Example: 19 is a happy number

 1^2 + 9^2 = 82
 8^2 + 2^2 = 68
 6^2 + 8^2 = 100
 1^2 + 0^2 + 0^2 = 1
****************************************************************/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sumDict={},sum=squareSum(n);
  while(sum!=1 && !sumDict[sum]) {
    sumDict[sum]=1;
    sum=squareSum(sum);
  }
  return sum==1;
};

var squareSum = function (num) {
  var res=0;
  while(num>0) {
    res+=(num%10)*(num%10);
    num=parseInt(num/10);
  }
  return res;
};

//test
var num = 19;
var algo = "algo";
console.time(algo);
var res = isHappy(num);
console.timeEnd(algo);
console.log("res:",res);