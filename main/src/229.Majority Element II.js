/**
 * Created by gxy on 2017/4/29.
 */

/****************************************************************
 229. Majority Element II
 Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 The algorithm should run in linear time and in O(1) space.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var majority1,majority2;
  var num1=0,num2=0;
  for(var i=0;i<nums.length;i++) {
    if (nums[i] == majority1) {
      num1++;
    } else if (nums[i] == majority2) {
      num2++;
    } else if (num1 == 0) {
      majority1 = nums[i];
      num1++;
    } else if (num2 == 0) {
      majority2 = nums[i];
      num2++;
    } else {
      num1--;
      num2--;
    }
  }
  console.log("majority1,majority2:",majority1,majority2);
  num1=0;
  num2=0;
  for(i=0;i<nums.length;i++) {
    if(nums[i]==majority1) {
      num1++;
    } else if(nums[i]==majority2) {
      num2++;
    }

  }
  var results=[];
  if(num1>parseInt(nums.length/3)) results.push(majority1);
  if(num2>parseInt(nums.length/3)) results.push(majority2);
  return results;
};

//test
var arr = [8,8,7,7,7];
var algo = "algo";
console.time(algo);
var res = majorityElement(arr);
console.timeEnd(algo);
console.log("res:",res);