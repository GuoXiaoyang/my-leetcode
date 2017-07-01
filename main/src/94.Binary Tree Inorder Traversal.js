/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 94. Binary Tree Inorder Traversal
 Given a binary tree, return the inorder traversal of its nodes' values.

 For example:
 Given binary tree [1,null,2,3],
 1
 \
 2
 /
 3
 return [1,3,2].
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
 * @return {number[]}
 */
//Recursive solution
var inorderTraversal = function(root) {
  var res=[];
  if(root===null) return res;
  res=res.concat(inorderTraversal(root.left));
  res.push(root.val);
  res=res.concat(inorderTraversal(root.right));
  return res;
};

//iterative solution
var inorderTraversal2 = function (root) {
  var res=[],stackNodes=[];
  while(root || stackNodes.length) {
    if(root) {
      stackNodes.push(root);
      root = root.left;
    } else {
      var topNode = stackNodes.pop();
      res.push(topNode.val);
      root = topNode.right;
    }
  }
  return res;
};


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
var arr = [1,2,3];
var root=levelCreateBinaryTree(arr);
printBinaryTree(root,"",true);

var algo = "algo";
console.time(algo);
var res = inorderTraversal(root);
console.timeEnd(algo);
console.log("res:",res);

printBinaryTree(root,"",true);
algo = "algo2";
console.time(algo);
var res2 = inorderTraversal2(root);
console.timeEnd(algo);
console.log("res2:",res2);