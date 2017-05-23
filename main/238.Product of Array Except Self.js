/**
 * Created by gxy on 2017/4/29.
 */
/****************************************************************
 238. Product of Array Except Self
 Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to
 the product of all the elements of nums except nums[i].

 Solve it without division and in O(n).

 For example, given [1,2,3,4], return [24,12,8,6].

 Follow up:
 Could you solve it with constant space complexity?
 (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf1 = function(nums) {
  var maxProduct=1;
  var res=new Array(nums.length);
  for(var i=0;i<nums.length;i++) {
    maxProduct=nums[i]*maxProduct;

  }
  for(i=0;i<nums.length;i++) {
    res[i]=maxProduct/nums[i];
  }
  return res;
};

var productExceptSelf2 = function (nums) {
  var res= new Array(nums.length).fill(1);
  for(var i=1;i<nums.length;i++) {
    res[i]=res[i-1]*nums[i-1];
  }
  for(i=nums.length-1;i>0;i--) {
    res[i]=res[i]*res[0];
    res[0]=res[0]*nums[i];
  }
  return res;
};

//test
var arr = [1,3,5,7,9];
var algo = "algo";
console.time(algo);
var res1 = productExceptSelf1(arr);
console.timeEnd(algo);
console.log("res1:",res1);

algo = "algo2";
console.time(algo);
var res2 = productExceptSelf2(arr);
console.timeEnd(algo);
console.log("res2:",res2);