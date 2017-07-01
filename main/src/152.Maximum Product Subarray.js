/**
 * Created by gxy on 2017/4/20.
 */
/****************************************************************
 152. Maximum Product Subarray
 Find the contiguous subarray within an array (containing at least one number) which has the largest product.

 For example, given the array [2,3,-2,4],
 the contiguous subarray [2,3] has the largest product = 6.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length<0) return nums[0];
  var maxpre=nums[0],minpre=nums[0],maxsofar=nums[0];
  var maxnow,minnow;
  for(var i=1;i<nums.length;i++) {

    maxnow=Math.max(Math.max(nums[i]*minpre,nums[i]*maxpre),nums[i]);
    minnow=Math.min(Math.min(nums[i]*minpre,nums[i]*maxpre),nums[i]);
    console.log("maxpre,minpre:",maxpre,minpre);
    maxsofar=Math.max(maxnow,maxsofar);
    maxpre=maxnow;
    minpre=minnow;
  }
  return maxsofar;
};

//test
var arr = [-4,-3];
var algo = "algo";
console.time(algo);
var res = maxProduct(arr);
console.timeEnd(algo);
console.log("res:",res);