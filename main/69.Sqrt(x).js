/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 69. Sqrt(x)
 Implement int sqrt(int x).

 Compute and return the square root of x.
 **********************************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
//Newton iteration method
var mySqrt = function(x) {
  var result = x;
  while(result*result > x) {
    result = parseInt((result+x/result)/2);
  }
  return result;
};


//test
var num=0;
var algo1 = "algo1";
console.time(algo1);
var res = mySqrt(num);
console.timeEnd(algo1);
console.log("res:",res);