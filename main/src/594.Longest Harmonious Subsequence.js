/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 594. Longest Harmonious Subsequence
 We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

 Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

 Example 1:
 Input: [1,3,2,2,5,2,3,7]
 Output: 5
 Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 Note: The length of the input array will not exceed 20,000.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  var map={},max=0;
  var num1,num2;
  for(var i=0;i<nums.length;i++) map[nums[i]]=map[nums[i]]==undefined?1:map[nums[i]]+1;
  for(var item in map) {
    if(map[String(parseInt(item)+1)] && map[item]+map[String(parseInt(item)+1)]>max) {
      max=map[item]+map[String(parseInt(item)+1)];
    }
  }
  return max;
};
//test
var arr = [1,3,2,2,5,2,3,7];
var algo = "algo";
console.time(algo);
var res = findLHS(arr);
console.timeEnd(algo);
console.log("res:",res);