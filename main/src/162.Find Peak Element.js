/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 162. Find Peak Element
 A peak element is an element that is greater than its neighbors.

 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

 You may imagine that num[-1] = num[n] = -∞.

 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
//binary search
var findPeakElement = function(nums) {

  var left=0,right=nums.length-1;
  var mid;
  while(left<right) {
    mid = parseInt((left+right)/2);
    if(nums[mid]<nums[mid+1]) {
      left=mid+1;
    } else {
      right=mid;
    }
  }
  return left;
};

//test
var arr = [1, 2, 3, 1];
var algo = "algo";
console.time(algo);
var res = findPeakElement(arr);
console.timeEnd(algo);
console.log("res:",res);