/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
159. Longest Substring with At Most Two Distinct Characters
 Given a string, find the length of the longest substring T that contains at most 2 distinct characters.
 For example, Given s = “eceba”,
 T is "ece" which its length is 3.
****************************************************************/
var longestSubstring = function (str) {
  if(str.length===0) return 0;
  var dict=new Array(256).fill(0);
  var beg=0,res=0,count=0;
  for(var i=0;i<str.length;i++) {
    dict[str.charCodeAt(i)]++;
    if(dict[str.charCodeAt(i)]==1) count++;
    while(count>2) {
      dict[str.charCodeAt(beg)]--;
      if(dict[str.charCodeAt(beg)]==0) count--;
      beg++;
    }
    res=Math.max(res,i-beg+1);
  }
  return res;
};

//test
var str = "eceba";
var algo = "algo";
console.time(algo);
var res = longestSubstring(str);
console.timeEnd(algo);
console.log("res:",res);