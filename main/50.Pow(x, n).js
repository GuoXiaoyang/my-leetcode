/**
 * Created by gxy on 2017/4/3.
 */

/****************************************************************
 Implement pow(x, n).

****************************************************************/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n===0) return 1;
  if(n<0) {
    x=1/x;
    n=-n;
  }
  return (n%2===0)?myPow(x*x,n/2):x*myPow(x*x,parseInt(n/2));
};

//test

var algo = "algo";
console.time(algo);
var res = myPow(2,3);
console.timeEnd(algo);
console.log("res:",res);