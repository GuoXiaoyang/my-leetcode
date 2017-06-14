/**
 * Created by gxy on 2017/6/7.
 */
/****************************************************************
 171. Excel Sheet Column Number
 Related to question Excel Sheet Column Title

 Given a column title as appear in an Excel sheet, return its corresponding column number.

 For example:

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 ****************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var res=0;
  for(var i=0;i<s.length;i++) {
    res=26*res+s.charCodeAt(i)-'A'.charCodeAt(0)+1;
  }
  return res;
};

//test
var s = 'CD';
var algo = "algo";
console.time(algo);
var res = titleToNumber(s);
console.timeEnd(algo);
console.log("res:",res);