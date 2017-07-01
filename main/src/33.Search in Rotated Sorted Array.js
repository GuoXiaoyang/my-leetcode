/**
 * Created by gxy on 2017/3/28.
 */

/****************************************************************
 33. Search in Rotated Sorted Array
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 You are given a target value to search. If found in the array return its index, otherwise return -1.

 You may assume no duplicate exists in the array.
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var left=0,right=nums.length-1,mid;
  while(left<right) {
    mid = Math.floor((left+right)/2);
    console.log("nums[mid],nums[right]:",nums[mid],nums[right]);
    if(nums[mid]>nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  var rot = left,realmid;
  console.log("rot:",rot);
  left=0;
  right= nums.length-1;
  while(left<=right) {
    console.log("left,right:",left,right);
    mid = Math.floor((left+right)/2);
    realmid = (mid+rot)%nums.length;
    console.log("nums[realmid]:",nums[realmid]);
    console.log("realmid:",realmid);
    if(nums[realmid] == target) {
      return realmid;
    } else if(nums[realmid] < target) {
      left=mid+1;
    } else {
      right = mid-1;
    }
  }
  return -1;
};

//test

var arr = [5,1,3];

console.time("algo");
var res =search(arr,5);
console.timeEnd("algo");
console.log("res:",res);