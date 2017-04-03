/**
 * Created by gxy on 2017/4/3.
 */
/****************************************************************
 53. Maximum Subarray
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the contiguous subarray [4,-1,2,1] has the largest sum = 6.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length<1) return 0;
  if(nums.length===1) return nums[0];
  var max=nums[0],sum=0;
  for(var i=0;i<nums.length;i++) {
    sum+=nums[i];
    max=Math.max(sum,max);
    sum=Math.max(sum,0);
  }
  return max;
};



//test
var nums=[-2,1,-3,4,-1,2,1,-5,4];
var algo = "algo1";
console.time(algo);
var res1 = maxSubArray(nums);
console.timeEnd(algo);
console.log("res1:",res1);



