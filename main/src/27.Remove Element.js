/**
 * Created by gxy on 2017/3/27.
 */

/**********************************************************************************************
 27. Remove Element
 Given an array and a value, remove all instances of that value in place and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.
 The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 **********************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(!nums) return nums;
  var index=0;
  for(var i = 0;i<nums.length;i++) {
    if(nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

//test
var arr=[1,2,3,2,3,5,1];
var algo1 = "algo1";
console.time(algo1);
var res = removeElement(arr,2);
console.timeEnd(algo1);
console.log("res:",res);