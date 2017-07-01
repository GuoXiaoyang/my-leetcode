/**
 * Created by gxy on 2017/5/29.
 */
/****************************************************************
 485. Max Consecutive Ones
 Given a binary array, find the maximum number of consecutive 1s in this array.

 Example 1:
 Input: [1,1,0,1,1,1]
 Output: 3
 Explanation: The first two digits or the last three digits are consecutive 1s.
 The maximum number of consecutive 1s is 3.
 Note:

 The input array will only contain 0 and 1.
 The length of input array is a positive integer and will not exceed 10,000
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var max=0, maxHere=0;
  for(var i=0;i<nums.length;i++) {
    max=Math.max(max,maxHere=nums[i]==0?0:maxHere+1);
  }
  return max;
};

//test
var arr = [1,1,0,1,1,1];
var algo = "algo";
console.time(algo);
var res = findMaxConsecutiveOnes(arr);
console.timeEnd(algo);
console.log("res:",res);