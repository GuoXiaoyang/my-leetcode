/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 274.H-Index
 Given an array of citations (each citation is a non-negative integer) of a researcher,
 write a function to compute the researcher's h-index.

 According to the definition of h-index on Wikipedia: "A scientist has index h
 if h of his/her N papers have at least h citations each, and the other N − h papers
 have no more than h citations each."

 For example, given citations = [3, 0, 6, 1, 5], which means the researcher
 has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.


 Note: If there are several possible values for h, the maximum one is taken as the h-index.
****************************************************************/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  var len=citations.length;
  citations.sort(function (val1,val2) {
    return val1-val2;
  });
  for(var index=len;index>=1;index--) {
    if(citations[len-index]>=index) return index;
  }
  return 0;
};

//time complexity=O(n) solution
var hIndex2 = function (citations) {
  var len=citations.length;
  var array=new Array(len+1).fill(0);
  for(var i=0;i<citations.length;i++) {
    if(citations[i]>=len) {
      array[len]++;
    } else array[citations[i]]++;
  }
  var index=0;
  for(i=len;i>=0;i--) {
    index+=array[i];
    if(index>=i) return i;
  }
  return 0;
};

//test
var arr = [0,0,0];
var algo = "algo";
console.time(algo);
var res = hIndex2(arr);
console.timeEnd(algo);
console.log("res:",res);
