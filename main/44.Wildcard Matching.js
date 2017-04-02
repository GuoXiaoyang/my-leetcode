/**
 * Created by gxy on 2017/4/2.
 */

/**********************************************************************************************
 44. Wildcard Matching
 Implement wildcard pattern matching with support for '?' and '*'.

 '?' Matches any single character.
 '*' Matches any sequence of characters (including the empty sequence).

 The matching should cover the entire input string (not partial).

 The function prototype should be:
 bool isMatch(const char *s, const char *p)

 Some examples:
 isMatch("aa","a") → false
 isMatch("aa","aa") → true
 isMatch("aaa","aa") → false
 isMatch("aa", "*") → true
 isMatch("aa", "a*") → true
 isMatch("ab", "?*") → true
 isMatch("aab", "c*a*b") → false
 **********************************************************************************************/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var pointerS = 0, pointerP=0;
  var starS = 0, starP = -1;
  while(pointerS<s.length) {
    if(s[pointerS] === p[pointerP] || p[pointerP] === '?') {
      pointerS++;
      pointerP++;
      continue;
    }
    if(p[pointerP] === '*') {
      starP = pointerP;
      pointerP++;
      starS = pointerS;
      continue;
    }
    if(starP>=0 && starP<p.length) {
      pointerS = ++starS;
      pointerP = starP+1;
      continue;
    }
    return false;
  }
  while(pointerP<p.length && p[pointerP] === '*') {
    pointerP++;
  }
  return pointerP===p.length;
};




//test
var s="aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba",p="a*******b";
var algo1 = "algo1";
console.time(algo1);
var res = isMatch(s,p);
console.timeEnd(algo1);
console.log("res:",res);