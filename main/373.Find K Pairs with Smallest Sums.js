/**
 * Created by gxy on 2017/6/15.
 */
/****************************************************************
 373. Find K Pairs with Smallest Sums
 You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

 Define a pair (u,v) which consists of one element from the first array and one element from the second array.

 Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

 Example 1:
 Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

 Return: [1,2],[1,4],[1,6]

 The first 3 pairs are returned from the sequence:
 [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 Example 2:
 Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

 Return: [1,1],[1,1]

 The first 2 pairs are returned from the sequence:
 [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 Example 3:
 Given nums1 = [1,2], nums2 = [3],  k = 3

 Return: [1,3],[2,3]

 All possible pairs are returned from the sequence:
 [1,3],[2,3]
 ****************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var Heap = require('./BinaryHeap');

var kSmallestPairs = function (nums1, nums2, k) {
  var res = [];
  if (nums1.length === 0 || nums2.length === 0) return res;
  var rowLen = nums1.length, colLen = nums2.length;
  //get sum matrix
  var sumMatrix = [];
  for (var row = 0; row < rowLen; row++) {
    sumMatrix.push(new Array(colLen));
    for (var col = 0; col < colLen; col++) {
      sumMatrix[row][col] = nums1[row] + nums2[col];
    }
  }
  //build heap
  var minHeap = new Heap(function (x) {
    return x[0];
  });
  for (col = 0; col < colLen; col++) {
    minHeap.push([sumMatrix[0][col], 0, col]);
  }
  //get k minimum numbers
  var min;
  k = Math.min(k, rowLen * colLen);
  while (k-- > 0) {
    min = minHeap.pop();
    res.push([nums1[min[1]], nums2[min[2]]]);
    if (min[1] + 1 < rowLen) {
      minHeap.push([sumMatrix[min[1] + 1][min[2]], min[1] + 1, min[2]]);
    }
  }
  return res;
};

//test
var nums1 = [1, 1, 2], nums2 = [1, 2, 3], k = 10;
var algo = "algo";
console.time(algo);
var res = kSmallestPairs(nums1, nums2, k);
console.timeEnd(algo);
console.log("res:", res);