/**
 * Created by gxy on 2017/4/2.
 */

/****************************************************************
 45. Jump Game II
 Given an array of non-negative integers, you are initially positioned at the first index of the array.
 Each element in the array represents your maximum jump length at that position.
 Your goal is to reach the last index in the minimum number of jumps.
 For example:
 Given array A = [2,3,1,1,4]
 The minimum number of jumps to reach the last index is 2.
 (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

 ****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function (nums) {

  var jumpNum = 0, sub = nums, index = nums.length - 1;
  while (sub.length > 1 && index >= 0) {
    index = findMinCanReach(sub);
    jumpNum++;
    sub = sub.slice(0, index + 1);
  }
  return jumpNum;
};

function findMinCanReach(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= nums.length - 1 - i) return i;
  }
}

//Bread First Search Method
var jump2 = function (nums) {
  if (nums.length <= 1) return 0;
  var curMax = 0, i = 0, jumpNum = 0, nextMax = curMax;
  while (curMax - i >= 0) {
    jumpNum++;
    for (; i <= curMax; i++) {
      nextMax = Math.max(nextMax, i + nums[i]);
      if (nextMax >= nums.length - 1) return jumpNum;
    }
    curMax = nextMax;
  }
};

//test
var numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log("numbers.length:", numbers.length);
var algo = "algo1";
console.time(algo);
var res1 = jump1(numbers);
console.timeEnd(algo);
console.log("res1:", res1);

algo = "algo2";
console.time(algo);
var res2 = jump2(numbers);
console.timeEnd(algo);
console.log("res2:", res2);
