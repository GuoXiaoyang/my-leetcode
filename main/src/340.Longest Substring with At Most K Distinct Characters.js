/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 340.Longest Substring with At Most K Distinct Characters
 Given a string, find the length of the longest substring T that contains at most 2 distinct characters.
 For example, Given s = “eceba”,
 T is "ece" which its length is 3.
****************************************************************/
var longestSubstringKDistinct = function (str,k) {
  var dict={},cnts=0,begin=0;
  var max=0;
  for(var i=0;i<str.length;i++) {
    if(!dict[str[i]]) {
      cnts++;
      dict[str[i]]=1;
    } else {
      dict[str[i]]++;
    }
    while(cnts>k) {
      dict[str[begin]]--;
      if(dict[str[begin]]==0) {
        cnts--;
      }
      begin++;
    }
    max=Math.max(max,i-begin+1);
  }
  return max;
};

//test
var str = "eceba",k=3;
var algo = "algo";
console.time(algo);
var res = longestSubstringKDistinct(str,k);
console.timeEnd(algo);
console.log("res:",res);