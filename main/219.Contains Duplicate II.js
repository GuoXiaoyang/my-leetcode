/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
 219. Contains Duplicate II
 Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such
 that nums[i] = nums[j] and the absolute difference between i and j is at most k.
****************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

  var positionDict = {};
  var tmpDistance,res=false;
  for(var i=0;i<nums.length;i++) {
    if(positionDict[nums[i]]===undefined) {
      positionDict[nums[i]]=i;
    } else {
       tmpDistance = Math.abs(i-positionDict[nums[i]]);
       if(tmpDistance<=k) {
         res=true;
         break;
       } else {
         positionDict[nums[i]]=i;
       }
    }
  }
  return res;
};

//test
var arr = [1,3,4,8,5,1,3,6], k=4;
var algo = "algo";
console.time(algo);
var res = containsNearbyDuplicate(arr,k);
console.timeEnd(algo);
console.log("res:",res);