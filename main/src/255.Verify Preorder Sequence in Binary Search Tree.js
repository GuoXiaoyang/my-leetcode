/**
 * Created by gxy on 2017/6/15.
 */
/****************************************************************
 255.Verify Preorder Sequence in Binary Search Tree
 Given an array of numbers, verify whether it is the correct preorder traversal
 sequence of a binary search tree.
 You may assume each number in the sequence is unique.
 Follow up:
 Could you do it using only constant space complexity?
 ****************************************************************/
var isPreOrderBST = function (nums) {
  //two pointer i,j
  var i = -1, pre = -Number.MAX_VALUE;
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] < pre) return false;
    //if the element is bigger than the pre, it's in the right.
    //Pop out all the smaller
    while (nums[j] > nums[i]) {
      pre = nums[i--];
    }
    //shift the right node to the left pointer
    nums[++i] = nums[j];
  }
  return true;
};

//test
var nums = [1,2,3,1];
var algo = "algo";
console.time(algo);
var res = isPreOrderBST(nums);
console.timeEnd(algo);
console.log("res:",res);