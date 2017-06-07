/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 358. Rearrange String k Distance Apart
 Given a non-empty string str and an integer k, rearrange the string such that the same characters are at least distance k from each other.
 All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".
 Example 1:
 str = "aabbcc", k = 3 Result: "abcabc" The same letters are at least distance 3 from each other.
 Example 2:
 str = "aaabc", k = 3 Answer: "" It is not possible to rearrange the string.
 Example 3:
 str = "aaadbbcc", k = 2 Answer: "abacabcd" Another possible answer is: "abcabcda" The same letters are at least distance 2 from each other.
****************************************************************/
var rearrangeString = function (str,k) {
  var len=str.length;
  if(k==0) return str;
  var map1=new Array(),max=0;
  for(var i=0;i<256;i++) map1[i]=[i,0];
  for(i=0;i<str.length;i++) map1[str.charCodeAt(i)][1]++;
  var map=map1.filter(function (item,index,array) {
    return item[1]>0;
  });
  map.sort(function (item1,item2) {
    return item2[1]-item1[1];
  });
  var res="",tmp,tmpNode;
  var min=Math.min(k,len),sumLen;
  while(map.length>0) {
    tmp=[];
    sumLen=map.reduce(function (pre,cur,index,array) {
      return [0,pre[1]+cur[1]];
    });
    min=Math.min(sumLen[1],min);
    for(i=0;i<min;i++) {
      if(map.length==0) return "";
      tmpNode=map.shift();
      res+=String.fromCharCode(tmpNode[0]);
      tmpNode[1]--;
      if(tmpNode[1]>0) tmp.push(tmpNode);
    }
    map=tmp;
  }
  return res;
};

//test
var str="aabbc",k=3;
var algo = "algo";
console.time(algo);
var res = rearrangeString(str,k);
console.timeEnd(algo);
console.log("res:",res);