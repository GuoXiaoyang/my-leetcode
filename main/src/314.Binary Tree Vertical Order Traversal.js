/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 314.Binary Tree Vertical Order Traversal
 Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).
 If two nodes are in the same row and column, the order should be from left to right.
 Examples:
 Given binary tree [3,9,20,null,null,15,7],
  3
 / \
 9 20
  / \
 15 7
 return its vertical order traversal as:
 [ [9], [3,15], [20], [7] ]
 Given binary tree [3,9,20,4,5,2,7],
   _3_
   / \
  9  20
 / \ / \
 4 5 2 7
 return its vertical order traversal as:
 [ [4], [9], [3,5,2], [20], [7] ]
****************************************************************/
var verticalTraverse = function (root) {
  var res=[];
  if(!root) return res;
  var nodes=[],cols=[],dict={};
  var col,node,min=0,max=0;
  nodes.push(root);
  cols.push(0);
  while(nodes.length!==0) {
    col=cols.shift();
    node=nodes.shift();
    if(!dict[col]) dict[col]=[];
    dict[col].push(node.val);

    if(node.left) {
      nodes.push(node.left);
      cols.push(col-1);
      if(col<=min) min=col-1;
    }
    if(node.right) {
      nodes.push(node.right);
      cols.push(col+1);
      if(col>=max) max=col+1;
    }
  }
  for(col=min;col<=max;col++) {
    res=res.concat(dict[col]);
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
var arr = [1,2,3,4,5,6,7,8,9,10];
var root=levelCreateBinaryTree(arr);
printBinaryTree(root,"",true);
var algo = "algo";
console.time(algo);
var res = verticalTraverse(root);
console.timeEnd(algo);
console.log("res:",res);