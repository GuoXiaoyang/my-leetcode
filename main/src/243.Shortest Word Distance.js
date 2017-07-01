/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
243. Shortest Word Distance
 Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 Given word1 = “coding”, word2 = “practice”, return 3.
 Given word1 = "makes", word2 = "coding", return 1.
 Note:
 You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
****************************************************************/
var shortestWordDistance = function (words,word1,word2) {
  var len=words.length;
  var pos1=-1,pos2=-1,dis=Number.MAX_VALUE;
  for(var i=0;i<len;i++) {
    if(pos1>-1 && pos2>-1) {
      dis= Math.min(Math.abs(pos1-pos2),dis);
    }
    if(words[i]==word1) {
      pos1=i;
    } else if(words[i]==word2) {
      pos2=i;
    }
  }
  return dis;
};


//test
var words = ["practice", "makes", "perfect", "coding", "makes"];
var word1="makes", word2="makes";
var algo = "algo";
console.time(algo);
var res = shortestWordDistance(words,word1,word2);
console.timeEnd(algo);
console.log("res:",res);