/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 366.Find Leaves of Binary Tree
 Given a binary tree, collect a tree's nodes as if you were doing this:
 Collect and remove all leaves, repeat until the tree is empty.

 Example:
 Given binary tree

     1
    / \
   2   3
  / \
 4   5


 Returns [4, 5, 3], [2], [1].
 ****************************************************************/
var BinaryTree = require('../modules/BinaryTree');
var findLeaves = function (root) {
  var res = [];
  maxHeight(root, res);
  return res;
};

function maxHeight(root, res) {
  if (root === null) return 0;
  var height = Math.max(maxHeight(root.left, res), maxHeight(root.right, res)) + 1;
  if (res.length < height) {
    res.push([]);
  }
  res[height - 1].push(root.val);
  return height;
}

//test
var binary = new BinaryTree([1,2,3,4,5]);
binary.print();
var algo = "algo";
console.time(algo);
var res = findLeaves(binary.root);
console.timeEnd(algo);
console.log("res:",res);