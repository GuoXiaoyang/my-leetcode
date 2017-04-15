/**
 * Created by gxy on 2017/4/15.
 */
/****************************************************************
 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 The number of elements initialized in nums1 and nums2 are m and n respectively.
****************************************************************/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i=m-1,j=n-1;
  while(i>=0 && j>=0) {
    if(nums1[i]>nums2[j]) {
      nums1[i+j+1] = nums1[i];
      i--;
    }else {
      nums1[i+j+1] = nums2[j];
      j--;
    }
  }
  while(j>=0) {
    nums1[j] = nums2[j];
    j--;
  }
  console.log("nums1:",nums1);
};

//test
var num1 = [1,5,7], num2=[2,4,8];
var algo = "algo";
console.time(algo);
var res = merge(num1,num1.length,num2,num2.length);
console.timeEnd(algo);
console.log("res:",res);