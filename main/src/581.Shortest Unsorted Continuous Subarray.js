/**
 * Created by gxy on 2017/6/1.
 */
/****************************************************************
 581. Shortest Unsorted Continuous Subarray
 Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

 You need to find the shortest such subarray and output its length.

 Example 1:
 Input: [2, 6, 4, 8, 10, 9, 15]
 Output: 5
 Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 Note:
 Then length of the input array is in range [1, 10,000].
 The input array may contain duplicates, so ascending order here means <=.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if(nums.length<2) return 0;
  var res=0,max=nums[0],min=nums[nums.length-1];
  var start=-1,end=-2;
  for(var i=1;i<nums.length;i++) {
    min=Math.min(min,nums[nums.length-1-i]);
    max=Math.max(max,nums[i]);
    if(nums[i]<max) end=i;
    if(nums[nums.length-1-i]>min) start=nums.length-1-i;
  }
  return end-start+1;
};
//test
var arr = [2, 6, 4, 8, 10, 9, 15];
var algo = "algo";
console.time(algo);
var res = findUnsortedSubarray(arr);
console.timeEnd(algo);
console.log("res:",res);