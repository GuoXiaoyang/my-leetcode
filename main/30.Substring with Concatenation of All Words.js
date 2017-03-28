/**
 * Created by gxy on 2017/3/27.
 */

/****************************************************************
 30. Substring with Concatenation of All Words
 You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

 For example, given:
 s: "barfoothefoobarman"
 words: ["foo", "bar"]

 You should return the indices: [0,9].
 (order does not matter).
 ****************************************************************/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  var wordLen = words[0].length, wordNum = words.length;
  var wordsDict = {},res=[];
  for(var i=0;i<wordNum;i++) {
    if(wordsDict[words[i]] === undefined) {
      wordsDict[words[i]]=1;
    } else {
      wordsDict[words[i]]++;
    }
  }
  // // console.log("wordsDict:", wordsDict);

  for(i=0;i<wordLen;i++) {
    var left=i, matchDict={},count=0;
    for(var j=i;j<s.length-wordLen+1;j=j+wordLen) {
      var tmpStr = s.substr(j,wordLen);
      if(matchDict[tmpStr]===undefined) {
        matchDict[tmpStr]=1;
      } else {
        matchDict[tmpStr]++;
      }
      // console.log("matchDict:", matchDict);
      // // console.log("wordsDict:", wordsDict);

      if(wordsDict[tmpStr]!==undefined && matchDict[tmpStr]<=wordsDict[tmpStr]) {
        count++;
      } else if(wordsDict[tmpStr]!==undefined && matchDict[tmpStr]>wordsDict[tmpStr]) {
        while(matchDict[tmpStr]>wordsDict[tmpStr]) {
          var tmpStr2 = s.substr(left,wordLen);
          matchDict[tmpStr2]--;
          if(matchDict[tmpStr2] < wordsDict[tmpStr2])
            count--;
          left=left+wordLen;
        }
      }
      if(count == wordNum) {
        res.push(j+wordLen-wordLen*wordNum);
        // console.log("res:", res);
        count--;
        matchDict[s.substr(left,wordLen)]--;
        left = left+wordLen;
      }
      if(wordsDict[tmpStr]===undefined) {
        matchDict = {};
        left=j+wordLen;
        count=0;
      }

    }
  }
  return res;
};

//test
var s="barfoofoobarthefoobarman", words=["foo", "bar","the"];
var algo1 = "algo1";
console.time(algo1);
var res = findSubstring(s,words);
console.timeEnd(algo1);
console.log("res:",res);
