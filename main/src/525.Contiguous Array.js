/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 525. Contiguous Array
 Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

 Example 1:
 Input: [0,1]
 Output: 2
 Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 Example 2:
 Input: [0,1,0]
 Output: 2
 Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 Note: The length of the given binary array will not exceed 50,000.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  var map={0:-1},maxCnt=0,sum=0;
  for(var i=0;i<nums.length;i++) nums[i]=nums[i]===0?-1:nums[i];
  for(i=0;i<nums.length;i++) {
    sum+=nums[i];
    if(map[sum]!==undefined) {
      maxCnt=Math.max(maxCnt,i-map[sum]);
    } else map[sum]=i;
  }
  return maxCnt;
};
//test
var arr = [0,1,0] ;
var algo = "algo";
console.time(algo);
var res = findMaxLength(arr);
console.timeEnd(algo);
console.log("res:",res);