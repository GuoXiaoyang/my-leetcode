/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 549.Binary Tree Longest Consecutive Sequence II
 Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.

 Especially, this path can be either increasing or decreasing. For example,
 [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid.
 On the other hand, the path can be in the child-Parent-child order, where not necessarily
 be parent-child order.

 Example 1:
 Input:
 1
 / \
 2   3
 Output: 2
 Explanation: The longest consecutive path is [1, 2] or [2, 1].
 Example 2:
 Input:
 2
 / \
 1   3
 Output: 3
 Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].
 ****************************************************************/
var BinaryTree = require('../modules/BinaryTree');
var longestConsecutive = function (root) {
  var cnt = [0];
  pathHelper(root, cnt);
  return cnt[0];
};
var pathHelper = function (root, cnt) {
  if (root == null) return [0, 0];
  //num[0] increase;num[1] decrease
  var num = [1, 1];
  if (root.left !== null) {
    var l = pathHelper(root.left, cnt);
    if (root.val == root.left.val - 1) num[0] = l[0] + 1;
    if (root.val == root.left.val + 1) num[1] = l[1] + 1;
  }
  if (root.right !== null) {
    var r = pathHelper(root.right, cnt);
    if (root.val == root.right.val - 1) num[0] = Math.max(num[0], r[0] + 1);
    if (root.val == root.right.val + 1) num[1] = Math.max(num[1], r[1] + 1);
  }
  cnt[0] = Math.max(cnt[0], num[0] + num[1] - 1);
  return num;
};


//test
var binary = new BinaryTree([2, 1, 3]);
binary.print();
var algo = "algo";
console.time(algo);
var res = longestConsecutive(binary.root);
console.timeEnd(algo);
console.log("res:", res);