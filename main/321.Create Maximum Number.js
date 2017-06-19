/**
 * Created by gxy on 2017/6/16.
 */
/****************************************************************
 321. Create Maximum Number
 Given two arrays of length m and n with digits 0-9 representing two numbers.
 Create the maximum number of length k <= m + n from digits of the two.
 The relative order of the digits from the same array must be preserved.
 Return an array of the k digits. You should try to optimize your time and space complexity.

 Example 1:
 nums1 = [3, 4, 6, 5]
 nums2 = [9, 1, 2, 5, 8, 3]
 k = 5
 return [9, 8, 6, 5, 3]

 Example 2:
 nums1 = [6, 7]
 nums2 = [6, 0, 4]
 k = 5
 return [6, 7, 6, 0, 4]

 Example 3:
 nums1 = [3, 9]
 nums2 = [8, 9]
 k = 3
 return [9, 8, 9]
 ****************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  var res = new Array(k).fill(0), tmp;
  var len1 = nums1.length, len2 = nums2.length;
  //extract i elements from nums1 and extract k-i elements form nums2,then merge and compare
  for (var i = Math.max(0, k - len2); i <= Math.min(len1, k); i++) {
    tmp = mergeArray(getMax(nums1, i), getMax(nums2, k - i));
    if (isGreater(tmp, res, 0, 0)) res = tmp;
  }

  return res;
};

//compre the two arrays from index i and j
var isGreater = function (nums1, nums2, i, j) {
  while (i >= 0 && i < nums1.length && j >= 0 && j < nums2.length && nums1[i] == nums2[j]) {
    i++;
    j++;
  }
  return j == nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
};

//put the max in front of the merged array
var mergeArray = function (nums1, nums2) {
  var merge = [];
  var i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (isGreater(nums1, nums2, i, j)) {
      merge.push(nums1[i++]);
    } else {
      merge.push(nums2[j++]);
    }
  }
  for (; i < nums1.length; i++) merge.push(nums1[i]);
  for (; j < nums2.length; j++) merge.push(nums2[j]);
  return merge;
};

//get k max number preserving the order of the merged array
var getMax = function (num, k) {
  var len = num.length;
  var i = 0, j = 0, maxArray = new Array(k);
  while (i < num.length) {
    while (j > 0 && len - i + j > k && num[i] > maxArray[j - 1]) {
      j--;
    }
    if (j < k) maxArray[j++] = num[i];
    i++;
  }
  return maxArray;
};

//test
var nums1 = [3,4,6,5], nums2 =[9, 1, 2, 5, 8, 3], k = 5;

var algo = "algo";
console.time(algo);
var res = maxNumber(nums1, nums2, k);
console.timeEnd(algo);
console.log("res:", res);