/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 167. Two Sum II - Input array is sorted
 Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

 The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 You may assume that each input would have exactly one solution and you may not use the same element twice.

 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2
****************************************************************/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var lo=0,hi=numbers.length-1,res=[0,0];
  while(lo<hi) {
    if(numbers[lo]+numbers[hi]<target) {
      lo++;
    } else if(numbers[lo]+numbers[hi]>target) {
      hi--;
    } else {
      res[0]=lo+1;
      res[1]=hi+1;
      break;
    }
  }
  return res;
};
//test
var arr = [2, 7, 11, 15],target=9;
var algo = "algo";
console.time(algo);
var res = twoSum(arr,target);
console.timeEnd(algo);
console.log("res:",res);