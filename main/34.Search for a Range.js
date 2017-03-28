/**
 * Created by gxy on 2017/3/28.
 */

/****************************************************************
 34. Search for a Range
 Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

 Your algorithm's runtime complexity must be in the order of O(log n).

 If the target is not found in the array, return [-1, -1].

 For example,
 Given [5, 7, 7, 8, 8, 10] and target value 8,
 return [3, 4].
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var left = 0, right = nums.length-1,mid;
  while(left<=right) {
    mid = Math.floor((left+right)/2);
    if(nums[mid]<target) {
      left = mid + 1;

    } else {
      right = mid - 1;
    }
  }
  var posLeft = right;
  console.log("posLeft:",posLeft);
  left=0;
  right=nums.length;
  while(left<=right) {
    mid = Math.floor((left+right)/2);
    if(nums[mid]<=target) {
      left = mid + 1;

    } else {
      right = mid - 1;
    }
  }
  console.log("left:",left);
  var res=left-posLeft-1;
  return res>0?([posLeft+1,left-1]):([-1,-1]);
};

//test

var arr = [5,7,7,8,8,10];
var algo = "algo";
console.time(algo);
var  res= searchRange(arr,8);
console.timeEnd(algo);
console.log("res:",res);