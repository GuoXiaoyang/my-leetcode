/**
 * Created by gxy on 2017/3/27.
 */

/**********************************************************************************************
 26. Remove Duplicates from Sorted Array
 Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 It doesn't matter what you leave beyond the new length.
 **********************************************************************************************/

/**
 * @param {number[]}nums
 * @return {number}
  */
var removeDuplicates = function(nums) {
  if(!nums) return 0;
  var tmpIndex=0;
  for(var i = 1;i<nums.length;i++) {
    if(nums[i] != nums[tmpIndex]) {
      tmpIndex++;
      nums[tmpIndex] = nums[i];
    }
  }
  return tmpIndex+1;
};


//test
var arr=[1,1,2];
var algo1 = "algo1";
console.time(algo1);
var res = removeDuplicates(arr);
console.timeEnd(algo1);
console.log("res:",res);