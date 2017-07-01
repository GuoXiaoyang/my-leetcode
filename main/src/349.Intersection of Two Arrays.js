/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 349. Intersection of Two Arrays
 Given two arrays, write a function to compute their intersection.

 Example:
 Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

 Note:
 Each element in the result must be unique.
 The result can be in any order.
****************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var map={},res=[];
  for(var i=0;i<nums1.length;i++) {
    map[nums1[i]]=1;
  }
  for(i=0;i<nums2.length;i++) {
    if(map[nums2[i]]) {
      res.push(nums2[i]);
      map[nums2[i]]=0;
    }
  }
  return res;
};
//test
var  nums1 = [1, 2, 2, 1], nums2 = [2, 2];
var algo = "algo";
console.time(algo);
var res = intersection(nums1,nums2);
console.timeEnd(algo);
console.log("res:",res);