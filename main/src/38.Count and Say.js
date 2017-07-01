/**
 * Created by gxy on 2017/3/30.
 */

/****************************************************************
 38. Count and Say
 The count-and-say sequence is the sequence of integers beginning as follows:
 1, 11, 21, 1211, 111221, ...

 1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.
 Given an integer n, generate the nth sequence.

 Note: The sequence of integers will be represented as a string.
****************************************************************/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n==1) return "1";
  if(n==2) return "11";
  var res="11",tmp="",cnt=1, num=3;
  while(num<=n) {
    for(var i=1;i<res.length;i++) {
      if(res[i-1]==res[i]) {
        cnt++;
      } else {
        tmp+=cnt+res[i-1].toString();
        cnt=1;
      }
    }
    tmp+=cnt+res[i-1].toString();
    cnt=1;
    res=tmp;
    tmp="";
    num++;
  }
  return res;
};

//test
var n = 5;
var algo = "algo";
console.time(algo);
var res = countAndSay(n);
console.timeEnd(algo);
console.log("res:",res);