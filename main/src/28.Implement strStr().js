/**
 * Created by gxy on 2017/3/27.
 */

/**********************************************************************************************
 28. Implement strStr()
 Implement strStr().

 Returns the index of the first occurrence of needle in haystack,
 or -1 if needle is not part of haystack.
 **********************************************************************************************/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//Bruce Solution
var strStr1 = function(haystack, needle) {
  if(!needle) return 0;
  var m = haystack.length, n = needle.length;
  for(var i=0;i<m-n+1;) {
    for(var j=0;j<n;) {
      if(haystack[i+j] == needle[j]) {
        j++;
      } else {
        i++;
        break;
      }
    }
    if(j == n) return i;
  }
  return -1;
};

//KMP Solution
var strStr2 = function(haystack, needle) {
  if(!needle) return 0;
  var next = getNext(needle);
  var i=0,j=0;
  var m = haystack.length, n = needle.length;
  while(i<m) {
    if(j==-1 || haystack[i] == needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
    if(j == n) return i-j;

  }
  return -1;
};

function getNext(str) {
  var arr=[-1],i=0,n=str.length;
  var k=-1;
  while(i<str.length-1) {
    // console.log("arr:", arr);

    if(k==-1 || str[k] == str[i]) {
      k++;
      i++;
      if(str[k] == str[i]) {
        arr.push(arr[k]);
      } else {
        arr.push(k);
      }
    } else {
      k = arr[k];
    }
  }
  return arr;

}

//BM & Sunny solution


//test
var mainStr="here is a example", matchStr="example";
var algo1 = "algo1";
console.time(algo1);
var res1 = strStr1(mainStr,matchStr);
console.timeEnd(algo1);
console.log("res1:",res1);


var matchStr = "abcdabd";
var next = getNext(matchStr);
console.log("next:", next);
var mainStr="a", matchStr="a";
var algo2 = "algo2";
console.time(algo2);
var res2 = strStr2(mainStr,matchStr);
console.timeEnd(algo2);
console.log("res2:",res2);

