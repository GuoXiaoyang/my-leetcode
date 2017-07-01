/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

 If the last word does not exist, return 0.

 Note: A word is defined as a character sequence consists of non-space characters only.

 For example,
 Given s = "Hello World",
 return 5.
****************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // just use basic operation
  var i=0,len=0;
  while(s[i]!==undefined) {
    if(s[i++] != ' ') {
      len++;
    }else if(s[i]!==undefined && s[i]!==' ') {
      len=0;

    }
  }

  return len;
};

//test
var str = "Hello World";
var algo = "algo";
console.time(algo);
var res = lengthOfLastWord(str);
console.timeEnd(algo);
console.log("res:",res);