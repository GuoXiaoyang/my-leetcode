/**
 * Created by gxy on 2017/4/13.
 */

/**********************************************************************************************
 75. Sort Colors
 Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

 Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 **********************************************************************************************/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var counts = new Array(3).fill(0);
  for(var i=0;i<nums.length;i++) {
    if(nums[i]===0) {
      counts[0]++;
    } else if(nums[i]==1) {
      counts[1]++;
    } else {
      counts[2]++;
    }
  }
  for(i=0;i<counts[0];i++) nums[i]=0;
  for(;i<counts[0]+counts[1];i++) nums[i]=1;
  for(;i<counts[0]+counts[1]+counts[2];i++) nums[i]=2;
  console.log("nums", nums);
};


//test
var arr=[1,0,0,2,2,0,0,1,2,1];
var algo1 = "algo1";
console.time(algo1);
var res = sortColors(arr);
console.timeEnd(algo1);
console.log("res:",res);