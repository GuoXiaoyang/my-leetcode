/**
 * Created by gxy on 2017/4/21.
 */
/****************************************************************
 154. Find Minimum in Rotated Sorted Array II
 Follow up for "Find Minimum in Rotated Sorted Array":
 What if duplicates are allowed?

 Would this affect the run-time complexity? How and why?
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var left=0,right=nums.length-1;
  var mid;
  while(left<right) {
    mid=parseInt((left+right)/2);
    if(nums[mid]<nums[right]) {
      right=mid;
    } else if(nums[mid]>nums[right]) {
      left=mid+1;
    } else if(nums[mid]==nums[right]) {
      right=right-1;
    }
  }
  return nums[left];
};

//test
var arr = [4,4,4,1,2,3,4];
var algo = "algo";
console.time(algo);
var res = findMin(arr);
console.timeEnd(algo);
console.log("res:",res);