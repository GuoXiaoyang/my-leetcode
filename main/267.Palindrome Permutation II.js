/**
 * Created by gxy on 2017/6/14.
 */
/****************************************************************
 267.Palindrome Permutation II
 Given a string s, return all the palindromic permutations (without duplicates) of it.
 Return an empty list if no palindromic permutation could be form.
 For example:
 Given s = "aabb", return ["abba", "baab"].
 Given s = "abc", return [].
 If a palindromic permutation exists, we just need to generate the first half of the string.
 To generate all distinct permutations of a (half of) string, use a similar approach from:
 Permutations II or Next Permutation.
 ****************************************************************/
var palinPermutations = function (str) {
  var map = new Array(256).fill(0);
  var res = [];
  for (var i = 0; i < str.length; i++) {
    map[str.charCodeAt(i)]++;
  }
  var odd = 0, halfStr = "", oddChar = "";
  for (i = 0; i < 256; i++) {
    if (map[i] != 0 && map[i] % 2 == 1) {
      odd++;
      oddChar += String.fromCharCode(i);
    }
    if (odd > 1) return res;
    for (var j = 0; j < parseInt(map[i] / 2); j++) {
      halfStr += String.fromCharCode(i);
    }
  }
  console.log("oddChar:", oddChar);
  var used = new Array(str.length).fill(false);
  var tmp = "";
  permutationHelp(halfStr, used, tmp, oddChar, res);
  return res;
};

var permutationHelp = function (str, used, tmp, oddChar, res) {
  if (tmp.length == str.length) {
    res.push(tmp.substr(0) + oddChar + tmp.split('').reverse().join(''));
    return;
  }
  for (var i = 0; i < str.length; i++) {
    if (used[i]) continue;
    if (i > 0 && !used[i - 1] && str[i] == str[i - 1]) continue;
    tmp += str[i];
    used[i] = true;
    permutationHelp(str, used, tmp, oddChar, res);
    used[i] = false;
    tmp = tmp.substr(0, tmp.length - 1);
  }
};

//test
var str = "abc";
var algo = "algo";
console.time(algo);
var res = palinPermutations(str);
console.timeEnd(algo);
console.log("res:",res);