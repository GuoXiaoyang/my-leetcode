/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 67. Add Binary
 Given two binary strings, return their sum (also a binary string).

 For example,
 a = "11"
 b = "1"
 Return "100".
 **********************************************************************************************/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var carry=0,result="";
  var i=a.length-1, j=b.length-1;
  while(i>=0 || j>=0 || carry===1) {
    carry += i>=0?parseInt(a[i--]):0;
    carry += j>=0?parseInt(b[j--]):0;
    console.log("carry", carry);

    result=carry%2+result;
    carry=parseInt(carry/2);
  }
  return result;
};

//test
var str1="0", str2="1";
var algo1 = "algo1";
console.time(algo1);
var res = addBinary(str1,str2);
console.timeEnd(algo1);
console.log("res:",res);