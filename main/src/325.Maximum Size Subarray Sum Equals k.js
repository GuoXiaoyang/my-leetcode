/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 325.Maximum Size Subarray Sum Equals k
 Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.
 Example 1:
 Given nums = [1, -1, 5, -2, 3], k = 3,
 return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)
 Example 2:
 Given nums = [-2, -1, 2, 1], k = 1,
 return 2. (because the subarray [-1, 2]sums to 1 and is the longest)
 Follow Up:
 Can you do it in O(n) time?
****************************************************************/
var maxSubArrayLen = function (nums,k) {
  var dict={},sum=0,max=0;
  dict[0]=-1;
  for(var i=0;i<nums.length;i++) {
    sum+=nums[i];
    if(dict[sum-k]) {
      max=Math.max(max,i-dict[sum-k]);
    }
    if(!dict[sum]) dict[sum]=i;
  }
  return max;
};

//test
var nums = [1, -1, 5, -2, 3],k=3;
var algo = "algo";
console.time(algo);
var res = maxSubArrayLen(nums,k);
console.timeEnd(algo);
console.log("res:",res);