/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 409. Longest Palindrome
 Given a string which consists of lowercase or uppercase letters,
 find the length of the longest palindromes that can be built with those letters.

 This is case sensitive, for example "Aa" is not considered a palindrome here.

 Note:
 Assume the length of given string will not exceed 1,010.

 Example:

 Input:
 "abccccdd"

 Output:
 7

 Explanation:
 One longest palindrome that can be built is "dccaccd", whose length is 7.
****************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var res=0,map=new Array(256).fill(0);
  for(var i=0;i<s.length;i++) map[s.charCodeAt(i)]++;
  for(i=0;i<256;i++) res+=(map[i]%2==0)?map[i]:map[i]-1;
  return res<s.length?res+1:res;
};

//test
var s="abccccdd";
var algo = "algo";
console.time(algo);
var res = longestPalindrome(s);
console.timeEnd(algo);
console.log("res:",res);