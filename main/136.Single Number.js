/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 136. Single Number
 Given an array of integers, every element appears twice except for one. Find that single one.

 Note:
 Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var res=0;
  for(var i=0;i<nums.length;i++) {
    res ^= nums[i];
  }
  return res;
};

//test
var arr = [1,2,1,3,2,5,3];
var algo = "algo";
console.time(algo);
var res = singleNumber(arr);
console.timeEnd(algo);
console.log("res:",res);