/**
 * Created by gxy on 2017/4/13.
 */
/**********************************************************************************************
 76. Minimum Window Substring
 Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

 For example,
 S = "ADOBECODEBANC"
 T = "ABC"
 Minimum window is "BANC".

 Note:
 If there is no such window in S that covers all characters in T, return the empty string "".

 If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 **********************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var charDict={};
  for(var i=0;i<t.length;i++) {
    if(charDict[t[i]] === undefined) {
      charDict[t[i]] = 1;
    } else {
      charDict[t[i]]++;
    }
  }

  var begin=0,len=s.length+1,head=0;
  i=0,counts=0; //end
  while(i<s.length) {
    if(charDict[s[i]] === undefined) {
      i++;
    } else {
      charDict[s[i]]--;
      if(charDict[s[i]]>=0) counts++;
      i++;
    }
    while(counts == t.length) {
      console.log("s.substring(begin,i)", s.substring(begin,i));
      while(charDict[s[begin]]<0||charDict[s[begin]]===undefined) {
        if(charDict[s[begin]] !==undefined) charDict[s[begin]]++;
        begin++;
      }
      console.log("s.substring(begin,i)", s.substring(begin,i));
      if(i-begin<len) {
        head = begin;
        len=i-begin;
      }
      charDict[s[begin]]++
      begin++;
      counts--;

    }
  }


  return len==s.length+1?'':s.substr(head,len);
};

//test
var str="a",target="a";
var algo1 = "algo1";
console.time(algo1);
var res = minWindow(str,target);
console.timeEnd(algo1);
console.log("res:",res);





```

```
/**
 * @authors guoxiaoyang (guoxiaoyang0925@gmail.com)
 * @date    2017-04-13 17:35:24
 * @version $Id$
 */

/**********************************************************************************************
 77. Combinations
 Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
 **********************************************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result=[],tmp=[];
  combineHelp(result,tmp,0,0,n,k);
  return result;
};

function combineHelp(result,tmp,start,num,n,k) {
  if(num==k) {
    result.push(tmp.slice(0));
    return;
  }
  for(var i=start;i<n;i++) {
    tmp.push(i+1);
    combineHelp(result,tmp,start+1,num+1,n,k);
    tmp.pop();
  }
}


//test
var n=4,k=2;
var algo1 = "algo1";
console.time(algo1);
var res = combine(n,k);
console.timeEnd(algo1);
console.log("res:",res);