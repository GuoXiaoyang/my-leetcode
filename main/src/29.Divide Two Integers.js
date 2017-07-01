/**
 * Created by gxy on 2017/3/27.
 */

/**********************************************************************************************
 29. Divide Two Integers
 Divide two integers without using multiplication, division and mod operator.

 If it is overflow, return MAX_INT.
 **********************************************************************************************/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var MAX_INT = 0x7fffffff, MIN_INT = -(MAX_INT+1);
  if(divisor ===0 || (dividend == MAX_INT && divisor==1)
  || dividend == MIN_INT && divisor == -1) {
    return MAX_INT;
  }
  if(dividend == MIN_INT && divisor == 1) return MIN_INT;
  var flag = !((dividend>0) ^ (divisor>0));
  var dv = Math.abs(dividend), dr = Math.abs(divisor),res=0;
  while(dv>=dr) {
    var tmp = dr, multiple = 1;
    if(dv>=(tmp<<1)) {
      multiple = multiple<<1;
      tmp=tmp<<1;
    }
    dv -= tmp;
    res += multiple;

  }
  return (flag)?res:-res;
};

//test
var dv=-2147483648, dr=-3;
var algo1 = "algo1";
console.time(algo1);
var res = divide(dv,dr);
console.timeEnd(algo1);
console.log("res:",res);
