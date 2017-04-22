/**
 * Created by gxy on 2017/4/21.
 */
/****************************************************************
 153. Find Minimum in Rotated Sorted Array
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Find the minimum element.

 You may assume no duplicate exists in the array.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var left=0,right=nums.length-1;
  var mid;
  while(left<right) {
    // if(nums[left]<nums[right]) return nums[left];
    mid=parseInt((left+right)/2);
    if(nums[mid]>nums[right]) left=mid+1;
    if(nums[mid]<=nums[right]) right=mid;
  }
  return nums[left];
};

//test
var arr =[4,5,6,7,0,1,2] ;
var algo = "algo";
console.time(algo);
var res = findMin(arr);
console.timeEnd(algo);
console.log("res:",res);