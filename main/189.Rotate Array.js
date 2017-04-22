/**
 * Created by gxy on 2017/4/22.
 */

/****************************************************************
 189. Rotate Array
 Rotate an array of n elements to the right by k steps.

 For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

 Note:
 Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var start=0,curr=0,counts=0,len=nums.length;
  var tobeRotated=nums[0],tmp;
  while(counts<nums.length) {
    do {
      tmp = nums[(curr+k)%len];
      nums[(curr+k)%len] = tobeRotated;
      curr=(curr+k)%len;
      tobeRotated=tmp;
      counts++;
    } while(curr!=start);
    start++;
    curr++;
    tobeRotated=nums[curr];
  }

  console.log("nums:",nums);
};



//test
var nums=[1,2,3], k=2;
var algo = "algo";
console.time(algo);
var res = rotate(nums,k);
console.timeEnd(algo);
console.log("res:",res);