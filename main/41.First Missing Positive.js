/**
 * Created by gxy on 2017/3/30.
 */

/**********************************************************************************************
 41. First Missing Positive
 Given an unsorted integer array, find the first missing positive integer.

 For example,
 Given [1,2,0] return 3,
 and [3,4,-1,1] return 2.

 Your algorithm should run in O(n) time and uses constant space.
 **********************************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var tmp,res=1;
  for(var i = 0;i<nums.length;i++) {
    while(nums[i]>0 && nums[i]<nums.length+1 && nums[i] != nums[nums[i]-1]) {
      tmp = nums[nums[i]-1];
      nums[nums[i]-1] = nums[i];
      nums[i] = tmp;
    }
    console.log("nums:", nums);
  }
  console.log("nums:", nums);
  for(i=0;i<nums.length;i++) {
    if(nums[i] == (i+1)) {
      res++;
    } else {
      break;
    }
  }
  return res;
};


//test
var arr=[1,2,0];
var algo1 = "algo1";
console.time(algo1);
var res = firstMissingPositive(arr);
console.timeEnd(algo1);
console.log("res:",res);
