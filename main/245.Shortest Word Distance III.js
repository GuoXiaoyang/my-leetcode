/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
245.Shortest Word Distance III
 This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.
 Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
 word1 and word2 may be the same and they represent two individual words in the list.
 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 Given word1 = “makes”, word2 = “coding”, return 1.
 Given word1 = "makes", word2 = "makes", return 3.
 Note:
 You may assume word1 and word2 are both in the list.
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
    }
    if(words[i]==word2) {
      pos2=i;
    }
  }
  return dis;
};


//test
var words = ["practice", "makes", "perfect", "coding", "makes"];
var word1="practice", word2="practice";
var algo = "algo";
console.time(algo);
var res = shortestWordDistance(words,word1,word2);
console.timeEnd(algo);
console.log("res:",res);