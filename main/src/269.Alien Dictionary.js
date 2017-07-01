/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 269.Alien Dictionary
 There is a new alien language which uses the latin alphabet.
 However, the order among letters are unknown to you. You receive a list of words from
 the dictionary, wherewords are sorted lexicographically by the rules of this new
 language. Derive the order of letters in this language.

 For example,
 Given the following words in dictionary,

 [
 "wrt",
 "wrf",
 "er",
 "ett",
 "rftt"
 ]
 The correct order is: "wertf".

 Note:
 You may assume all letters are in lowercase.
 If the order is invalid, return an empty string.
 There may be multiple valid order of letters, return any one of them is fine.
 ****************************************************************/
//topological sort()
var allienDict = function (words) {
  var len = 26, base = 'a'.charCodeAt(0);
  var inDegree = new Array(len).fill(-1);
  var neighbors = [];
  for (var i = 0; i < len; i++) {
    neighbors.push([]);
  }
  for (i = 0; i < words.length - 1; i++) {
    var minLen = Math.min(words[i].length, words[i + 1].length);
    for (var j = 0; j < minLen; j++) {
      if (words[i][j] != words[i + 1][j]) {
        var x = words[i].charCodeAt(j) - base, y = words[i + 1].charCodeAt(j) - base;
        if (inDegree[x] == -1) inDegree[x] = 0;
        if (inDegree[y] != -1) {
          inDegree[y]++;
        } else {
          inDegree[y] = 1;
        }
        neighbors[x].push(y);
        break;
      }
    }
  }
  var queue = [], count = 0, sum = 0, res = "";
  for (i = 0; i < 26; i++) {
    if (inDegree[i] == 0) queue.push(i);
    if (inDegree[i] >= 0) sum++;
  }
  while (queue.length !== 0) {
    count++;
    var tmp = queue.shift();
    res += String.fromCharCode(tmp + base);
    for (i = 0; i < neighbors[tmp].length; i++) {
      if (--inDegree[neighbors[tmp][i]] === 0) queue.push(neighbors[tmp][i]);
    }
  }
  return count == sum ? res : "";
};

//test
var words = ["wrt", "wrf", "er", "ett", "rftt"];
var algo = "algo";
console.time(algo);
var res = allienDict(words);
console.timeEnd(algo);
console.log("res:", res);
