/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 68. Text Justification
 Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

 You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

 Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

 For the last line of text, it should be left justified and no extra space is inserted between words.

 For example,
 words: ["This", "is", "an", "example", "of", "text", "justification."]
 L: 16.

 Return the formatted lines as:
 [
 "This    is    an",
 "example  of text",
 "justification.  "
 ]
 **********************************************************************************************/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {

  var wordsNum = words.length,wordIndex=0;
  var result=[];
  while(wordIndex<wordsNum) {
    var wordLen = words[wordIndex].length;
    var indexAfter = wordIndex+1;

    console.log("words[indexAfter],indexAfter", words[indexAfter],indexAfter);
    while(indexAfter < wordsNum && wordLen+1+words[indexAfter].length<=maxWidth) {
      wordLen+=1+words[indexAfter].length;
      indexAfter++;
    }
    var line = words[wordIndex];
    if(indexAfter===wordsNum) {
      //if this is the last line

      console.log("wordIndex,indexAfter", wordIndex,indexAfter);
      for(var k=wordIndex+1;k<indexAfter;k++) {
        line+=" "+words[k];
      }
      while(line.length<maxWidth) {
        line+=" ";
      }
    } else {
      var extraWhite = maxWidth-wordLen;
      var whiteNum = indexAfter-wordIndex-1;
      if(whiteNum === 0) {
        // if this line has only one word
        while(line.length<maxWidth) {
          line+=" ";
        }
      } else {
        for(var k=wordIndex+1;k<indexAfter;k++) {
          line += " ";
          for(var p=0;p<parseInt(extraWhite/whiteNum);p++) {
            line += " ";
          }
          if(k-wordIndex <= extraWhite%whiteNum) {
            line += " ";
          }
          line += words[k];
        }
      }
    }
    result.push(line);
    wordIndex=indexAfter;

  }
  return result;
};


//test
//var words=["This", "is", "an", "example", "of", "text", "justification."];
var words=["What","must","be","shall","be."];
var maxWidth=12;
var algo1 = "algo1";
console.time(algo1);
var res = fullJustify(words,maxWidth);
console.timeEnd(algo1);
console.log("res:",res);