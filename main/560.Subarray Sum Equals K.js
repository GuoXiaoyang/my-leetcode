/**
 * Created by gxy on 2017/6/1.
 */
/****************************************************************
 560. Subarray Sum Equals K
 Given an array of integers and an integer k, you need to find the total number of continuous
 subarrays whose sum equals to k.

 Example 1:
 Input:nums = [1,1,1], k = 2
 Output: 2
 Note:
 The length of the array is in range [1, 20,000].
 The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//O(n) solution
var subarraySum = function(nums, k) {
  var sum=0,res=0;
  var preSumDict={0:1};
  for(var i=0;i<nums.length;i++) {
    sum+=nums[i];
    if(preSumDict[sum-k]!==undefined) {
      res+=preSumDict[sum-k];
    }
    preSumDict[sum]=(preSumDict[sum]?preSumDict[sum]+1:1);
  }
  return res;
};

//test
var nums = [1,1,1], k=2;
var algo = "algo";
console.time(algo);
var res = subarraySum(nums,k);
console.timeEnd(algo);
console.log("res:",res);

