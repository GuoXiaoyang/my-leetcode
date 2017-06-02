/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
280.Wiggle Sort
 Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
 For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].
****************************************************************/
//time complexity: O(nlgn)
var wiggleSort1 = function (nums) {
  nums.sort(function (val1,val2) {
    return val1-val2;
  });
  var tmp;
  for(var i=2;i<nums.length;i+=2) {
    tmp=nums[i];
    nums[i]=nums[i-1];
    nums[i-1]=tmp;
  }
  return nums;
};

//time complexity:O(lgn)
var wiggleSort2 = function (nums) {
  var tmp;
  for(var i=0;i<nums.length-1;i++) {
    if((i%2==0 && nums[i]>nums[i+1]) || (i%2==1 && nums[i]<nums[i+1])) {
      tmp=nums[i];
      nums[i]=nums[i+1];
      nums[i+1]=tmp;
    }
  }
  return nums;
};

//test
var nums = [3, 5, 2, 1, 6, 4];
var algo = "algo1";
console.time(algo);
var res1 = wiggleSort1(nums);
console.timeEnd(algo);
console.log("res1:",res1);

nums = [3, 5, 2, 1, 6, 4];
var algo = "algo2";
console.time(algo);
var res2 = wiggleSort2(nums);
console.timeEnd(algo);
console.log("res2:",res2);