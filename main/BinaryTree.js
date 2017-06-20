/**
 * Created by gxy on 2017/6/15.
 */
// data structure
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function BinaryTree(nums) {
  this.root = levelCreateBinaryTree(nums);
}
BinaryTree.prototype = {
  print: function () {
    printBinaryTreeHelper(this.root,"",true);
  }
};

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



module.exports = BinaryTree;

