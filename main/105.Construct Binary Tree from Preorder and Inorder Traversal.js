/**
 * Created by gxy on 2017/4/16.
 */

/****************************************************************
 105. Construct Binary Tree from Preorder and Inorder Traversal
 Given preorder and inorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

  return buildTreeHelper(0,0,preorder.length-1,preorder,inorder)
};

function buildTreeHelper(preStart,inStart,inEnd,preorder,inorder) {
  if(preStart>preorder.length-1 || inStart>inEnd) return null;
  var root=new TreeNode(preorder[preStart]);
  var index=0;
  for(var i=inStart;i<=inEnd;i++) {
    if(inorder[i]==root.val) {
      index=i;
      break;
    }
  }
  root.left=buildTreeHelper(preStart+1,inStart,index-1,preorder,inorder);
  root.right=buildTreeHelper(preStart+index-inStart+1,index+1,inEnd,preorder,inorder);
  return root;
}

// data structure
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//[123#56#] '#'means empty node
function levelCreateBinaryTree(arr) {
  if(!arr.length) return null;
  //use queue to store the uncreated node
  var queue=[];
  var root=new TreeNode(arr.shift());
  queue.push(root);
  var p;
  while(queue.length) {
    var leftValue=arr.shift();
    var rightValue=arr.shift();
    p = queue.shift();
    if(leftValue && rightValue && leftValue != '#' && rightValue !='#') {
      p.left=new TreeNode(leftValue);
      p.right=new TreeNode(rightValue);
      queue.push(p.left);
      queue.push(p.right);
    } else if((leftValue===undefined || leftValue=='#') && rightValue && rightValue!='#'){
      p.right=new TreeNode(rightValue);
      queue.push(p.right);
    } else if(leftValue && leftValue!='#' && (rightValue=='#' || rightValue===undefined)){
      p.left=new TreeNode(leftValue);
      queue.push(p.left);
    }
  }
  return root;
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


// test
//test
var arr = [1,2,3,4,5,6,7,8,9,10];
var root=levelCreateBinaryTree(arr);
printBinaryTree(root,"",true);

var preorder=[1,2,4,5,6,7,3],inorder=[4,5,2,6,7,1,3];

var algo = "algo";
console.time(algo);
var res =buildTree(preorder,inorder) ;
console.timeEnd(algo);
console.log("res:",res);
printBinaryTree(res);
