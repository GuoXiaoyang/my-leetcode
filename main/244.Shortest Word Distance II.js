/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 244.Shortest Word Distance II
 This is a follow up of Shortest Word Distance.
 The only difference is now you are given the list of words and
 your method will be called repeatedly many times with different parameters.
 How would you optimize it?
 Design a class which receives a list of words in the constructor,and implements a method
 that takes two words word1 and word2 and return the shortest distance between these two words in the list.
 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 Given word1 = “coding”, word2 = “practice”, return 3.
 Given word1 = "makes", word2 = "coding", return 1.
 Note:
 You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
****************************************************************/

var wordDistance = function (words) {
  this.wordsDict={};
  for(var i=0;i<words.length;i++) {
    if(!this.wordsDict[words[i]]) {
      this.wordsDict[words[i]]=[];
    }
    this.wordsDict[words[i]].push(i);
  }
};
wordDistance.prototype = {
  distance:function (word1,word2) {
    var word1Pos=this.wordsDict[word1];
    var word2Pos=this.wordsDict[word2];
    var i=0,j=0,minDis=Number.MAX_VALUE,tmpDis;
    while(i<word1Pos.length && j<word2Pos.length) {
      tmpDis=(word1Pos[i]>word2Pos[j])?(word1Pos[i]-word2Pos[j++]):(word2Pos[j]-word1Pos[i++]);
      minDis=Math.min(minDis,tmpDis);
    }
    return minDis;
  }
};

//test
var words = ["practice", "makes", "perfect", "coding", "makes"];
var wordsDis=new wordDistance(words);
var algo = "algo";
var res = wordsDis.distance("practice","perfect");
console.log("res:",res);
res = wordsDis.distance("coding","makes");
console.log("res:",res);
