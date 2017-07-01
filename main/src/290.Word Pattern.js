/**
 * Created by gxy on 2017/6/4.
 */
/****************************************************************
 290. Word Pattern
 Given a pattern and a string str, find if str follows the same pattern.

 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

 Examples:
 pattern = "abba", str = "dog cat cat dog" should return true.
 pattern = "abba", str = "dog cat cat fish" should return false.
 pattern = "aaaa", str = "dog cat cat dog" should return false.
 pattern = "abba", str = "dog dog dog dog" should return false.
 Notes:
 You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
****************************************************************/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var strArr=str.split(' ');
  if(pattern.length!=strArr.length) return false;
  var dict1={},dict2={};
  for(var i=0;i<pattern.length;i++) {
    console.log("i:",i);
    if(dict1[pattern[i]]!=dict2[strArr[i]]) return false;
    dict1[pattern[i]]=i;
    dict2[strArr[i]]=i;
  }
  return true;
};

//test
var pattern="abba",str = "dog cat cat dog";
var algo = "algo";
console.time(algo);
var res = wordPattern(pattern,str);
console.timeEnd(algo);
console.log("res:",res);