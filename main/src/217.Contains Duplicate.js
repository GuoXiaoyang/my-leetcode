/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 217. Contains Duplicate
 Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array,
 and it should return false if every element is distinct.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if(nums.length===0) return false;
  var dict={};
  for(var i=0;i<nums.length;i++) {
    if(dict[nums[i]] == 1) {
      return true;
    } else {
      dict[nums[i]]=1;
    }
  }
  return false;
};

//test
var arr = [1,2,3,3,5];
var algo = "algo";
console.time(algo);
var res = containsDuplicate(arr);
console.timeEnd(algo);
console.log("res:",res);