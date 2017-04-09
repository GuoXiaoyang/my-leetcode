/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 Given an array of non-negative integers, you are initially positioned at the first index of the array.

 Each element in the array represents your maximum jump length at that position.

 Determine if you are able to reach the last index.

 For example:
 A = [2,3,1,1,4], return true.

 A = [3,2,1,0,4], return false.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length===1) {return true;}
  var curMax=0, nextMax=0,i=0;
  while(curMax-i+1 > 0) {
    for(;i<=curMax;i++) {
      nextMax = Math.max(nums[i]+i,nextMax);
      if(nextMax >= nums.length-1) return true;
    }
    curMax = nextMax;
  }
  if(curMax<nums.length-1) return false;

};


// more efficient way
var canJump2 = function (nums) {
  var reach=0,i;
  for(i=reach;i<nums.length && i <= reach;i++) {
    reach = Math.max(reach,nums[i]+i);
  }
  return i===nums.length;
};

//test
var arr = [3,2,1,0,4];
var algp = "algo";
console.time(algp);
var res = canJump(arr);
console.timeEnd(algp);
console.log("res:",res);