/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
 548.Split Array with Equal Sum
 Given an array with n integers, you need to find if there are triplets (i, j, k) which satisfies following conditions:
 Sum of sub arrays (0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n - 1) should be equal.
 where we define that sub array (L, R) represents a slice of the original array starting from the element indexed L to the element indexed R.
 Example:
 Input: [1,2,1,2,1,2,1]
 Output: True
 Explanation: i = 1, j = 3, k = 5.
 sum(0, i - 1) = sum(0, 0) = 1
 sum(i + 1, j - 1) = sum(2, 2) = 1
 sum(j + 1, k - 1) = sum(4, 4) = 1
 sum(k + 1, n - 1) = sum(6, 6) = 1
 Note:
 Elements in the given array will be in range [-1,000,000, 1,000,000].
****************************************************************/
var isSplitted = function (nums) {
  if(nums.length<7) return false;
  var sums = [],sumDict={};
  sums.push(nums[0]);
  for(var i=1;i<nums.length;i++) {
    sums[i]=sums[i-1]+nums[i];
  }
  for(var j=3;j<nums.length-3;j++) {
    for(var i=1;i<j-1;i++) {
      if(sums[i-1]==sums[j-1]-sums[i]) {
        sumDict[sums[i-1]]=1;
      }
    }
    for(var k=j+2;k<nums.length-1;k++) {
      if(sums[k-1]-sums[j]==sums[nums.length-1]-sums[k] && sumDict[sums[k-1]-sums[j]] !== undefined) {
        return true;
      }
    }
  }
  return false;

};

//test
var arr = [1,2,1,2,1,2,1];
var algo = "algo";
console.time(algo);
var res = isSplitted(arr);
console.timeEnd(algo);
console.log("res:",res);