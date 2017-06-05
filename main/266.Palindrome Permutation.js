/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 266.Palindrome Permutation
 Given a string, determine if a permutation of the string could form a palindrome.
 For example,
 "code" -> False, "aab" -> True, "carerac" -> True.
 Consider the palindromes of odd vs even length. What difference do you notice?
 Count the frequency of each character.
 If each character occurs even number of times, then it must be a palindrome. How about character which occurs odd number of times?
****************************************************************/
var canPermutePalindrome = function (str) {
  var map=new Array(256).fill(0);
  for(var i=0;i<str.length;i++) {
    if(!map[str.charCodeAt(i)]) {
      map[str.charCodeAt(i)]++;
    } else {
      map[str.charCodeAt(i)]--;
    }
  }
  var sum=map.reduce(function (pre,cur,index,array) {
    return pre+cur;
  });
  return (sum==1 || sum===0);
};

//test
var str = "carerac";
var algo = "algo";
console.time(algo);
var res = canPermutePalindrome(str);
console.timeEnd(algo);
console.log("res:",res);