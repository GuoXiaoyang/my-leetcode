/**
 * Created by gxy on 2017/5/23.
 */
/****************************************************************
 Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
 prove that at least one duplicate number must exist. Assume that there is only one duplicate number,
 find the duplicate one.

 Note:
 1.You must not modify the array (assume the array is read only).
 2.You must use only constant, O(1) extra space.
 3.Your runtime complexity should be less than O(n2).
 4.There is only one duplicate number in the array, but it could
 be repeated more than once.
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
//binary search
var findDuplicate1 = function(nums) {
  var low=0,high=nums.length-1,mid;
  var count;
  while(low<high) {
    mid=parseInt((low+high)/2);
    count=0;
    for(var i=0;i<nums.length;i++) {
      if(nums[i]<=mid) {
        count++;
      }
    }
    if(count<=mid) {
      low=mid+1;
    } else {
      high=mid-1;
    }
  }
  return low;
};

//linked list cycle
var findDuplicate2 = function (nums) {
  var slow=0,fast=0;
  do {
    slow=nums[slow];
    fast=nums[nums[fast]];
  } while(slow!=fast);
  fast=0;
  while(slow!=fast) {
    slow=nums[slow];
    fast=nums[fast];
  }
  return slow;
};

//test
var arr = [2,1,4,3,1];
var algo = "algo1";
console.time(algo);
var res1 = findDuplicate1(arr);
console.timeEnd(algo);
console.log("res1:",res1);


algo = "algo2";
console.time(algo);
var res2 = findDuplicate2(arr);
console.timeEnd(algo);
console.log("res2:",res2);