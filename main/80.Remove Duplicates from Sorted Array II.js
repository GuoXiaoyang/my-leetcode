/**
 * Created by gxy on 2017/4/14.
 */
/****************************************************************
 80. Remove Duplicates from Sorted Array II
 Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
 It doesn't matter what you leave beyond the new length.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
  if(nums.length<3) return nums.length;
  var equal=0,j=0;
  for(var i=0;i<nums.length-1;i++) {
    if(nums[i]==nums[i+1]) {
      if(equal===0) {
        equal=1;
        j++;
        nums[j]= nums[i+1];
      }
    } else {
      equal=0;
      j++;
      nums[j]=nums[i+1];
    }
  }
  console.log("nums:",nums);
  return j+1;
};




//test
var arr = [1,1,1];
var algo = "algo";
console.time(algo);
var res = removeDuplicates(arr);
console.timeEnd(algo);
console.log("res:",res);