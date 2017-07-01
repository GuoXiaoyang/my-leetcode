/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 228. Summary Ranges
 Given a sorted integer array without duplicates, return the summary of its ranges.

 For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
****************************************************************/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length==1) return [""+nums[0]];
  var res=[], tmp;
  for(var i=0;i<nums.length;i++) {
    var tmp=nums[i];
    while(i+1<nums.length && nums[i+1]==nums[i]+1) {
      i++;
    }
    if(tmp==nums[i]) {
      res.push(""+nums[i]);
    } else {
      res.push(tmp+"->"+nums[i]);
    }
  }
  return res;
};

//test
var arr = [0,1,2,4,5,7];
var algo = "algo";
console.time(algo);
var res = summaryRanges(arr);
console.timeEnd(algo);
console.log("res:",res);