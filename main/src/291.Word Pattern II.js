/**
 * Created by gxy on 2017/6/14.
 */
/****************************************************************
 291	Word Pattern II
 Given a pattern and a string str, find if str follows the same pattern.
 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.
 Examples:
 pattern = "abab", str = "redblueredblue" should return true.
 pattern = "aaaa", str = "asdasdasdasd" should return true.
 pattern = "aabb", str = "xyzabcxzyabc" should return false.
 Notes:
 You may assume both pattern and strcontains only lowercase letters.
****************************************************************/
var wordPattern = function (pattern, str) {
  var map = {}, set = {};
  var i = 0, j = 0;
  return matchHelp(pattern, str, i, j, map, set);
};
var matchHelp = function (pattern, str, i, j, map, set) {
  console.log("map:", map);
  if (i == pattern.length && j == str.length) return true;
  if (i >= pattern.length || j >= str.length) return false;
  if (map[pattern[i]] !== undefined) {
    var tmpWord = map[pattern[i]];
    if (!str.substr(j).startsWith(tmpWord)) return false;
    return matchHelp(pattern, str, i + 1, j + tmpWord.length, map, set);
  } else {
    for (var k = j; k < str.length; k++) {
      var tmpWord = str.substring(j, k + 1), tmpPtn = pattern[i];
      if (set[tmpWord] !== undefined) continue;
      set[tmpWord] = 1;
      map[tmpPtn] = tmpWord;
      if (matchHelp(pattern, str, i + 1, j + tmpWord.length, map, set)) return true;
      delete map[tmpPtn];
      delete set[tmpWord];
    }
  }
  return false;
};

//test
var pattern="aabb",str="xyzabcxzyabc";
var algo = "algo";
console.time(algo);
var res = wordPattern(pattern,str);
console.timeEnd(algo);
console.log("res:",res);