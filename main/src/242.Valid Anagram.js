/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 242. Valid Anagram
 Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.
****************************************************************/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var cnts=new Array(26).fill(0);
  for(var i=0;i<s.length;i++) {
    cnts[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
  }
  for(i=0;i<t.length;i++) {
    cnts[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
  }
  for(i=0;i<26;i++) {
    if(cnts[i]!==0) return false;
  }
  return true;
};

//test
var s="anagram", t="nagaram";
var algo = "algo";
console.time(algo);
var res = isAnagram(s,t);
console.timeEnd(algo);
console.log("res:",res);