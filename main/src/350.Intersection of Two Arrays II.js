/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 350. Intersection of Two Arrays II
 Given two arrays, write a function to compute their intersection.

 Example:
 Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

 Note:
 Each element in the result should appear as many times as it shows in both arrays.
 The result can be in any order.
 Follow up:
 What if the given array is already sorted? How would you optimize your algorithm?
 What if nums1's size is small compared to nums2's size? Which algorithm is better?
 What if elements of nums2 are stored on disk, and the memory is limited 
 such that you cannot load all elements into the memory at onc
****************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var map={},res=[];
  for(var i=0;i<nums1.length;i++) {
    map[nums1[i]]=map[nums1[i]]==undefined?1:map[nums1[i]]+1;
  }
  for(i=0;i<nums2.length;i++) {
    if(map[nums2[i]]) {
      res.push(nums2[i]);
      map[nums2[i]]--;
    }
  }
  return res;
};

//test
var  nums1 = [1, 2, 2, 1], nums2 = [2, 2];
var algo = "algo";
console.time(algo);
var res = intersect(nums1,nums2);
console.timeEnd(algo);
console.log("res:",res);