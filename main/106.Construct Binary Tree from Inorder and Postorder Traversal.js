/**
 * Created by gxy on 2017/4/17.
 */
/****************************************************************
 106. Construct Binary Tree from Inorder and Postorder Traversal
 Given inorder and postorder traversal of a tree, construct the binary tree.

 Note:
 You may assume that duplicates do not exist in the tree.
****************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return buildTreeHelper(0,inorder.length-1,postorder.length-1,inorder,postorder)
};

function buildTreeHelper(inStart,inEnd,postEnd,inorder,postorder) {
  if(inStart>inEnd || postEnd<0) {
    return null;
  }
  var root=new TreeNode(postorder[postEnd]);
  var index=0;
  for(var i=inStart;i<=inEnd;i++) {
    if(inorder[i]==root.val) {
      index=i;
      break;
    }
  }
  root.left=buildTreeHelper(inStart,index-1,postEnd-inEnd+index-1,inorder,postorder);
  root.right=buildTreeHelper(index+1,inEnd,postEnd-1,inorder,postorder);
  return root;
}


// data structure
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function printBinaryTreeHelper(root, prefix, isTail) {
  console.log(prefix,isTail?"└──":"├──",root.val);
  if(root.left && root.right) {
    printBinaryTreeHelper(root.left,prefix+(isTail?"    ":" |  "),false);
    printBinaryTreeHelper(root.right,prefix+(isTail?"    ":" |  "),true);
  } else if(root.left) {
    printBinaryTreeHelper(root.left,prefix+(isTail?"    ":" |  "),true);
  } else if(root.right) {
    printBinaryTreeHelper(root.right,prefix+(isTail?"    ":" |  "),true);
  }
}

function printBinaryTree(root) {
  printBinaryTreeHelper(root,"",true);
}


//test
var inorder = [4,5,2,6,7,1,3], postorder=[5,4,6,7,2,3,1];
var algo = "algo";
console.time(algo);
var res = buildTree(inorder,postorder);
console.timeEnd(algo);
console.log("res:",res);
printBinaryTree(res);