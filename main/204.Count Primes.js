/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 204. Count Primes
 Description:

 Count the number of prime numbers less than a non-negative number, n.
****************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var res=0;
  if(n>2) res=1;
  for(var i=3;i<n;i+=2) {
    if(isPrime(i)) {
      res++;
    }
  }
  return res;
};

function isPrime(num) {
  for(var i=2;i<=Math.sqrt(num);i++) {
    if(num%i===0) return false;
  }
  return true;
}

//test
var num = 2;
var algo = "algo";
console.time(algo);
var res = countPrimes(num);
console.timeEnd(algo);
console.log("res:",res);