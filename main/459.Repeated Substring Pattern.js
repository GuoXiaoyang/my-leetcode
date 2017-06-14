/**
 * Created by gxy on 2017/6/9.
 */
/****************************************************************
 459. Repeated Substring Pattern
 Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 Example 1:
 Input: "abab"

 Output: True

 Explanation: It's the substring "ab" twice.
 Example 2:
 Input: "aba"

 Output: False
 Example 3:
 Input: "abcabcabcabc"

 Output: True

 Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
****************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if(s.length%2!==0) return false;

  return s.substring(0,s.length/2)==s.substring(s.length/2);
};

//test
var str="abab";
var algo = "algo";
console.time(algo);
var res = repeatedSubstringPattern(str);
console.timeEnd(algo);
console.log("res:",res);