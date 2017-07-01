/**
 * Created by gxy on 2017/4/15.
 */
/****************************************************************
 87. Scramble String
 Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

 Below is one possible representation of s1 = "great":

 great
 /    \
 gr    eat
 / \    /  \
 g   r  e   at
 / \
 a   t
 To scramble the string, we may choose any non-leaf node and swap its two children.

 For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

 rgeat
 /    \
 rg    eat
 / \    /  \
 r   g  e   at
 / \
 a   t
 We say that "rgeat" is a scrambled string of "great".

 Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

 rgtae
 /    \
 rg    tae
 / \    /  \
 r   g  ta  e
 / \
 t   a
 We say that "rgtae" is a scrambled string of "great".

 Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
****************************************************************/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if(s1.length != s2.length) return false;
  var tmpS1=s1.split(''), tmpS2=s2.split('');
  if(tmpS1.sort().join() != tmpS2.sort().join()) return false;
  if(s1==s2) return true;
  for(var i=1;i<s1.length;i++) {
    console.log("s1.substr(0,i),s2.substr(0,i):",s1.substr(0,i),s2.substr(0,i));
    console.log("s1.substr(i,s1.length-i),s2.substr(i,s1.length-i)):",s1.substr(i,s1.length-i),s2.substr(i,s1.length-i));
    if(isScramble(s1.substr(0,i),s2.substr(0,i)) &&
      isScramble(s1.substr(i,s1.length-i),s2.substr(i,s1.length-i))) return true;
    console.log("s1.substr(0,i),s2.substr(s1.length-i,i):",s1.substr(0,i),s2.substr(s1.length-i,i));
    console.log("s1.substr(i,s1.length-i),s2.substr(0,s1.length-i)):",s1.substr(i,s1.length-i),s2.substr(0,s1.length-i));
    if(isScramble(s1.substr(0,i),s2.substr(s1.length-i,i)) &&
      isScramble(s1.substr(i,s1.length-i),s2.substr(0,s1.length-i))) return true;
  }
  return false;
};

//test
var str1="great", str2="rgtae";
var algo = "algo";
console.time(algo);
var res = isScramble(str1,str2);
console.timeEnd(algo);
console.log("res:",res);