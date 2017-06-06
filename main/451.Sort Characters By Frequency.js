/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 451. Sort Characters By Frequency
 Given a string, sort it in decreasing order based on the frequency of characters.

 Example 1:

 Input:
 "tree"

 Output:
 "eert"

 Explanation:
 'e' appears twice while 'r' and 't' both appear once.
 So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 Example 2:

 Input:
 "cccaaa"

 Output:
 "cccaaa"

 Explanation:
 Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 Note that "cacaca" is incorrect, as the same characters must be together.
 Example 3:

 Input:
 "Aabb"

 Output:
 "bbAa"

 Explanation:
 "bbaA" is also a valid answer, but "Aabb" is incorrect.
 Note that 'A' and 'a' are treated as two different characters.
****************************************************************/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var res='';
  var map=new Array(256).fill(0),bucket=new Array(s.length+1).fill('');
  for(var i=0;i<s.length;i++) map[s.charCodeAt(i)]++;
  for(i=0;i<256;i++) {
    if(map[i]) {
      var cnt=map[i],c=String.fromCharCode(i);
      console.log("cnt,c:",cnt,c);
      while(cnt>0) {
        bucket[map[i]]+=c;
        cnt--;
      }
    }
  }
  for(i=s.length;i>0;i--) {
    if(bucket[i]!='') res+=bucket[i];
  }
  return res;
};

//test
var str="cccaaa";
var algo = "algo";
console.time(algo);
var res = frequencySort(str);
console.timeEnd(algo);
console.log("res:",res);