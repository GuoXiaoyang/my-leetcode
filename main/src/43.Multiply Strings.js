/**
 * Created by gxy on 2017/4/2.
 */

/**********************************************************************************************
 43. Multiply Strings Add to List
 Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

 Note:

 The length of both num1 and num2 is < 110.
 Both num1 and num2 contains only digits 0-9.
 Both num1 and num2 does not contain any leading zero.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.
 **********************************************************************************************/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') {
    return "0";
  }
  var num1Len = num1.length, num2Len=num2.length;
  var result = new Array(num1Len+num2Len).fill(0);
  // use res[i+j+1] to store the single digits, num[i+j] to store carry
  var tmp;
  for(var i=num1Len-1;i>=0;i--) {
    for(var j=num2Len-1;j>=0;j--) {
      tmp = parseInt(num1[i])*parseInt(num2[j]);
      result[i+j+1] += tmp;
      if(result[i+j+1]>=10) {
        result[i+j] += parseInt(result[i+j+1]/10);
        result[i+j+1] = parseInt(result[i+j+1]%10);
      }
    }
  }
  var resultString = "";
  for(i=0;i<result.length;i++) {
    if(resultString==="" && result[i] === 0) {
      continue;
    }
    resultString += result[i];
  }

  return resultString;
};

//test
var num1="123456789",num2="987654321";
var algo1 = "algo1";
console.time(algo1);
var res = multiply(num1,num2);
console.timeEnd(algo1);
console.log("res:",res);