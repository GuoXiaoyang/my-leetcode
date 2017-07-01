/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 438. Find All Anagrams in a String
 Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

 Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

 The order of output does not matter.

 Example 1:

 Input:
 s: "cbaebabacd" p: "abc"

 Output:
 [0, 6]

 Explanation:
 The substring with start index = 0 is "cba", which is an anagram of "abc".
 The substring with start index = 6 is "bac", which is an anagram of "abc".
 Example 2:

 Input:
 s: "abab" p: "ab"

 Output:
 [0, 1, 2]

 Explanation:
 The substring with start index = 0 is "ab", which is an anagram of "ab".
 The substring with start index = 1 is "ba", which is an anagram of "ab".
 The substring with start index = 2 is "ab", which is an anagram of "ab".
****************************************************************/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var res=[];
  if(s.length==0 || p.length==0) return res;
  var map=new Array(256).fill(0);
  var len=p.length;
  for(var i=0;i<len;i++) map[p.charCodeAt(i)]++;
  var l=0,r=0,cnts=0;
  while(r<s.length) {
    if(map[s.charCodeAt(r++)]-->0) cnts++;
    if(cnts==len) res.push(l);
    if(r-l==len && map[s.charCodeAt(l++)]++>=0) cnts--;
  }
  return res;
};

//test
var s="abab", p="ab";
var algo = "algo";
console.time(algo);
var res = findAnagrams(s,p);
console.timeEnd(algo);
console.log("res:",res);