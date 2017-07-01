/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 205. Isomorphic Strings
 Given two strings s and t, determine if they are isomorphic.

 Two strings are isomorphic if the characters in s can be replaced to get t.

 All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

 For example,
 Given "egg", "add", return true.

 Given "foo", "bar", return false.

 Given "paper", "title", return true.

 Note:
 You may assume both s and t have the same length.
****************************************************************/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var pos1=new Array(256).fill(0);
  var pos2=new Array(256).fill(0);
  for(var i=0;i<s.length;i++) {
    if(pos1[s.charCodeAt(i)]!=pos2[t.charCodeAt(i)]) return false;
    pos1[s.charCodeAt(i)]=i+1;
    pos2[t.charCodeAt(i)]=i+1;
  }
  return true;
};

//test
var s="abb",t="geg" ;
var algo = "algo";
console.time(algo);
var res = isIsomorphic(s,t);
console.timeEnd(algo);
console.log("res:",res);