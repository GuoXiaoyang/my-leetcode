/**
 * Created by gxy on 2017/5/9.
 */
/****************************************************************
 268. Missing Number
 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 find the one that is missing from the array.

 For example,
 Given nums = [0, 1, 3] return 2.

 Note:
 Your algorithm should run in linear runtime complexity.
 Could you implement it using only constant extra space complexity?
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function(nums) {
  var max=nums.length,sum=0;
  for(var i=0;i<max;i++) {
    sum+=nums[i];
  }
  return (max+1)*max/2-sum;
};

var missingNumber2 = function(nums) {
  var res=0;
  for(var i=0;i<nums.length;i++) {
    res = (i+1)^nums[i]^res;
  }
  return res;
};

//test
var arr = [0,1,3];
var algo = "algo";
console.time(algo);
var res = missingNumber1(arr);
console.timeEnd(algo);
console.log("res:",res);

var algo = "algo2";
console.time(algo);
var res2 = missingNumber2(arr);
console.timeEnd(algo);
console.log("res2:",res2);