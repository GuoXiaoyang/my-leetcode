/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 500. Keyboard Row
 Given a List of words, return the words that can be typed using letters of alphabet
 on only one row's of American keyboard like the image below.


 American keyboard


 Example 1:
 Input: ["Hello", "Alaska", "Dad", "Peace"]
 Output: ["Alaska", "Dad"]
 Note:
 You may use one character in the keyboard more than once.
 You may assume the input string will only contain letters of alphabet.
****************************************************************/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var dict=["qwertyuiop","asdfghjkl","zxcvbnm"];
  var map=new Array(256),res=[];
  for(var i=0;i<dict.length;i++) {
    for(var j=0;j<dict[i].length;j++) map[dict[i].charCodeAt(j)]=i;
  }
  for(i=0;i<words.length;i++) {
    var word=words[i].toLowerCase();
    var index=map[word.charCodeAt(0)];
    for(j=0;j<word.length;j++) {
      if(map[word.charCodeAt(j)]!==index) break;
    }
    if(j==word.length) res.push(words[i]);
  }
  return res;
};
//test
var str=["Hello", "Alaska", "Dad", "Peace"] ;
var algo = "algo";
console.time(algo);
var res = findWords(str);
console.timeEnd(algo);
console.log("res:",res);