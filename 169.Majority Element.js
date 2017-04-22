/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 169. Majority Element
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var count=0,val;
  for(var i=0;i<nums.length;i++) {
    if(count===0) {
      val=nums[i];
      count++;
    } else if(nums[i]==val) {
      count++;
    } else {
      count--;
    }
  }
  return val;
};

//test
var arr = [1,4,5,7,4,6,4,4,4,5];
var algo = "algo";
console.time(algo);
var res = majorityElement(arr);
console.timeEnd(algo);
console.log("res:",res);