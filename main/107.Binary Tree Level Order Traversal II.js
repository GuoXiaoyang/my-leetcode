/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 107. Binary Tree Level Order Traversal II
 Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

 For example:
 Given binary tree [3,9,20,null,null,15,7],
   3
  / \
 9  20
   /  \
  15   7
 return its bottom-up level order traversal as:
 [
 [15,7],
 [9,20],
 [3]
 ]
****************************************************************/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BinaryTree = require('./BinaryTree');
var levelOrderBottom = function(root) {
  var res=[],nodes=[];
  if(root==null) return res;
  var tmp=[],node;
  tmp.push(root);
  while(nodes.length!==0 || tmp.length!==0) {
    res.unshift(tmp.map(function (item,index,array) {
      return item.val;
    }));
    nodes=tmp.slice(0);
    tmp=[];
    while(nodes.length!==0) {
      node = nodes.shift();
      if(node.left!==null) tmp.push(node.left);
      if(node.right!==null) tmp.push(node.right);
    }
  }
  return res;
};



//test
var binaryTree = new BinaryTree([1,2,3,'#','#',4,5]);
binaryTree.print();
var algo = "algo";
console.time(algo);
var res = levelOrderBottom(binaryTree.root);
console.timeEnd(algo);
console.log("res:",res);