/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 336. Palindrome Pairs
 Given a list of unique words, find all pairs of distinct indices (i, j) in the given list,
 so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

 Example 1:
 Given words = ["bat", "tab", "cat"]
 Return [[0, 1], [1, 0]]
 The palindromes are ["battab", "tabbat"]
 Example 2:
 Given words = ["abcd", "dcba", "lls", "s", "sssll"]
 Return [[0, 1], [1, 0], [3, 2], [2, 4]]
 The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
****************************************************************/
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  var map={},res=[],len=words.length;
  for(var i=0;i<len;i++) {
    map[words[i]]=i;
  }
  for(i=0;i<len;i++) {
    var l=0,r=0,tmpStr,leftStr,wordLen=words[i].length;
    if(wordLen===0) {
      for(var tmp in map) {
        if(isPalindrome(tmp) && map[tmp]!=i) res.push([i,map[tmp]]);
      }
    }
    while(l<wordLen) {
      tmpStr=reverse(words[i].substring(l,r));
      leftStr=words[i].substring(l==0?r:0,l==0?wordLen:l);
      if(map[tmpStr]!==undefined && map[tmpStr]!=i &&
        isPalindrome(leftStr)) {
        res.push(l==0?[i,map[tmpStr]]:[map[tmpStr],i]);
      }
      if(r<wordLen){
        r++
      } else l++;
    }
  }
  return res;
};

function isPalindrome(str) {
  for(var i=0,j=str.length-1;i<=j;i++,j--) {
    if(str[i]!=str[j]) return false;
  }
  return true;
}
function reverse(str) {
  var res="";
  for(var i=str.length-1;i>=0;i--) {
    res+=str[i];
  }
  return res;
}
//test
var words = ["a","b","c","ab","ac","aa"];
var algo = "algo";
console.time(algo);
var res = palindromePairs(words);
console.timeEnd(algo);
console.log("res:",res);