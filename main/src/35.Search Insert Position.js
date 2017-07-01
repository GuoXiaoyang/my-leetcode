/**
 * Created by gxy on 2017/3/28.
 */

/****************************************************************
 35. Search Insert Position
 Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 You may assume no duplicates in the array.

 Here are few examples.
 [1,3,5,6], 5 → 2
 [1,3,5,6], 2 → 1
 [1,3,5,6], 7 → 4
 [1,3,5,6], 0 → 0
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var lo = 0, hi = nums.length-1,mid;
  while(lo<=hi) {
    mid = Math.floor((lo+hi)/2);
    if(nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }

  }
  return hi+1;
};

//test
var arr=[1,3,5,6];
var algo = "algo";
console.time(algo);
var res = searchInsert(arr,0);
console.timeEnd(algo);
console.log("res:",res);