/**
 * Created by gxy on 2017/6/1.
 */
/****************************************************************
 561. Array Partition I
 Given an array of 2n integers, your task is to group these integers into n pairs of integer,
 say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

 Example 1:
 Input: [1,4,3,2]

 Output: 4
 Explanation: n is 2, and the maximum sum of pairs is 4.
 Note:
 n is a positive integer, which is in the range of [1, 10000].
 All the integers in the array will be in the range of [-10000, 10000].

****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  var res=0;
  nums.sort(function (val1,val2) {
    return val1-val2;
  });
  for(var i=0;i<nums.length;i+=2) {
    res+=nums[i];
  }
  return res;
};

//test
var arr = [1,4,3,2];
var algo = "algo";
console.time(algo);
var res = arrayPairSum(arr);
console.timeEnd(algo);
console.log("res:",res);