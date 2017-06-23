/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 103. Binary Tree Zigzag Level Order Traversal
 Given a binary tree, return the zigzag level order traversal of its nodes' values.
 (ie, from left to right, then right to left for the next level and alternate between).

 For example:
 Given binary tree [3,9,20,null,null,15,7],
   3
  / \
 9  20
   /  \
  15   7
 return its zigzag level order traversal as:
 [
 [3],
 [20,9],
 [15,7]
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
var zigzagLevelOrder = function(root) {
  var res=[],nodes=[];
  if(root==null) return res;
  var tmp=[],node,dir=true;
  tmp.push(root);
  while(nodes.length!==0 || tmp.length!==0) {
    res.push(tmp.map(function (item,index,array) {
      return item.val;
    }));
    nodes=tmp.slice(0);
    tmp=[];
    while(nodes.length!==0) {
      node = nodes.pop();
      if(dir){
        if(node.right!==null) tmp.push(node.right);
        if(node.left!==null) tmp.push(node.left);
      } else {
        if(node.left!==null) tmp.push(node.left);
        if(node.right!==null) tmp.push(node.right);
      }

    }
    dir = !dir;
  }
  return res;
};

//test
var binaryTree = new BinaryTree([1,2,3,'#','#',4,5]);
binaryTree.print();
var algo = "algo";
console.time(algo);
var res = zigzagLevelOrder(binaryTree.root);
console.timeEnd(algo);
console.log("res:",res);