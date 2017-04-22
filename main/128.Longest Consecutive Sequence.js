/**
 * Created by gxy on 2017/4/20.
 */
/****************************************************************
 128. Longest Consecutive Sequence
 Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

 For example,
 Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

 Your algorithm should run in O(n) complexity.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  var consectiveNums ={},res=0;
  for(var i=0;i<nums.length;i++) {
    if(consectiveNums[nums[i]]===undefined) {
      left=consectiveNums[nums[i]-1]?consectiveNums[nums[i]-1]:0;
      right=consectiveNums[nums[i]+1]?consectiveNums[nums[i]+1]:0;
      consectiveNums[nums[i]]=left+right+1;
      res=Math.max(res,consectiveNums[nums[i]]);
      consectiveNums[nums[i]-left]=consectiveNums[nums[i]+right]=consectiveNums[nums[i]];
    }
  }
  return res;
};

//test
var arr = [100, 4, 200, 1, 3, 2];
var algo = "algo";
console.time(algo);
var res = longestConsecutive(arr);
console.timeEnd(algo);
console.log("res:",res);