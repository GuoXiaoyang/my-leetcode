/**
 * Created by gxy on 2017/6/7.
 */
/****************************************************************
 168. Excel Sheet Column Title
 Given a positive integer, return its corresponding column title as appear in an Excel sheet.

 For example:

 1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB
 ****************************************************************/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  return n===0?"":convertToTitle(parseInt((--n)/26))+String.fromCharCode('A'.charCodeAt(0)+n%26);
};

//test
var n=28;
var algo = "algo";
console.time(algo);
var res = convertToTitle(n);
console.timeEnd(algo);
console.log("res:",res);