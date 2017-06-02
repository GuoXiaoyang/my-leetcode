/**
 * Created by gxy on 2017/5/23.
 */
/****************************************************************
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 Note:
 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes1 = function(nums) {
  var pos=0,tmp;
  for(var i=0;i<nums.length;i++) {
    if(nums[i]!==0) {
      tmp=nums[i];
      nums[i]=nums[pos];
      nums[pos]=tmp;
      pos++;
    }
  }
  return nums;
};


var moveZeroes2 = function (nums) {
  var nonZeroNum =0;
  for(var i=0;i<nums.length;i++) {
    if(nums[i]!==0) {
      nums[nonZeroNum] = nums[i];
      nonZeroNum++;
    }
  }
  for(i=nonZeroNum;i<nums.length;i++) {
    nums[i]=0;
  }
  return nums;
};
//test
var arr = [0, 1, 0, 3, 12];
var algo = "algo1";
console.time(algo);
var res1 = moveZeroes1(arr);
console.timeEnd(algo);
console.log("res1:",res1);

var arr = [0, 1, 0, 3, 12];
var algo = "algo2";
console.time(algo);
var res2 = moveZeroes1(arr);
console.timeEnd(algo);
console.log("res2:",res2);
