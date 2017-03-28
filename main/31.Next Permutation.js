/**
 * Created by gxy on 2017/3/28.
 */

/**********************************************************************************************
 31. Next Permutation
 Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

 If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

 The replacement must be in-place, do not allocate extra memory.

 Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1
 **********************************************************************************************/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length>1) {
    var i=nums.length-1;
    while(i>0 && nums[i-1]>=nums[i]) {
      i--;
    }

    if(i>0) {
      var j=i;
      while(nums[j]>nums[i-1] && j<nums.length) {
        j++;
      }
      console.log("i-1:", i-1);
      console.log("j-1:", j-1);
      var tmp = nums[i-1];
      nums[i-1] = nums[j-1];
      nums[j-1] = tmp;
      console.log("nums:", nums);
      reverse(nums,i);
      console.log("nums:", nums);
    }
    if(i===0) {
      reverse(nums,i);
      console.log("nums:", nums);
    }
  }
};

function reverse(nums,i) {
  var tmp;
  for(var j=i;j<parseInt((i+nums.length)/2);j++) {
    tmp = nums[j];
    nums[j] = nums[i+nums.length-1-j];
    nums[i+nums.length-1-j]=tmp;
  }

}

//test
var arr=[5,1,1];
var algo1 = "algo1";
console.time(algo1);
var res = nextPermutation(arr);
console.timeEnd(algo1);
console.log("res:",res);