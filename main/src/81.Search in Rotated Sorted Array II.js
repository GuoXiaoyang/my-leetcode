/**
 * Created by gxy on 2017/4/14.
 */
/****************************************************************
 81. Search in Rotated Sorted Array II
 Follow up for "Search in Rotated Sorted Array":
 What if duplicates are allowed?

 Would this affect the run-time complexity? How and why?
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Write a function to determine if a given target is in the array.

 The array may contain duplicates.
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  var rot=0;
  while(rot<nums.length && nums[rot]<=nums[rot+1]) {
    rot++;
  }
  rot++;
  var lo=0,hi=nums.length-1;

  while(lo<hi) {
    var mid=parseInt((lo+hi)/2);
    var val=nums[(mid+rot)%nums.length];
    if(val>target) {
      hi=mid-1;
    } else if(val<target) {
      lo=mid+1;
    } else {
      return true;
    }
  }
  return nums[(lo+rot)%nums.length]==target;
};

//test
var arr = [1,1,3,1,1];
var algo = "algo";
console.time(algo);
var res = search(arr,3);
console.timeEnd(algo);
console.log("res:",res);