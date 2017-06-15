/**
 * Created by gxy on 2017/6/15.
 */
/****************************************************************
 272.Closest Binary Search Tree Value II
 Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.
 Note:
 Given target value is a floating point.
 You may assume k is always valid, that is: k ≤ total nodes.
 You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
 Follow up:
 Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
 Consider implement these two helper functions:
 getPredecessor(N), which returns the next smaller node to N.
 getSuccessor(N), which returns the next larger node to N.
 Try to assume that each node has a parent pointer, it makes the problem much easier.
 Without parent pointer we just need to keep track of the path from the root to the current node using a stack.
 You would need two stacks to track the path in finding predecessor and successor node separately.
 ****************************************************************/
var findKClosest = function (root, target, k) {
  var res = [];
  var preStack = [], sucStack = [];
  predecessor(root, preStack, target);
  successor(root, sucStack, target);
  var pre = getPredecessor(preStack);
  var suc = getSuccessor(sucStack);
  if (pre !== null && suc !== null && pre.val == suc.val) pre = getPredecessor(preStack);
  while (k-- > 0) {
    if (pre == null || Math.abs(suc.val - target) <= Math.abs(pre.val - target)) {
      res.push(suc.val);
      suc = getSuccessor(sucStack);
    } else if (suc == null || Math.abs(pre.val - target) < Math.abs(suc.val - target)) {
      res.push(pre.val);
      pre = getSuccessor(preStack);
    }
  }
  return res;
};
//init the smaller stack
var predecessor = function (root, stack, target) {
  var node = root;
  while (node !== null) {
    if (node.val == target) {
      stack.push(node);
      break;
    }
    else if (node.val < target) {
      stack.push(node);
      node = node.right;
    } else {
      node = node.left;
    }
  }
};
//init the larger stack
var successor = function (root, stack, target) {
  var node = root;
  while (node !== null) {
    if (node.val == target) {
      stack.push(node);
      break;
    } else if (node.val > target) {
      stack.push(node);
      node = node.left;
    } else {
      node = node.right;
    }
  }
};
//get next smaller element
var getPredecessor = function (stack) {
  if (stack.length == 0) {
    return null;
  }
  var pre = stack.pop();
  var cur = pre.left;
  while (cur !== null) {
    stack.push(cur);
    cur = cur.right;
  }

  return pre;
};
//get next larger element
var getSuccessor = function (stack) {
  if (stack.length == 0) return null;
  var suc = stack.pop();
  var cur = suc.right;
  while (cur !== null) {
    stack.push(cur);
    cur = cur.left;
  }
  return suc;
};


//test
// data structure
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//[123#56#] '#'means empty node
function levelCreateBinaryTree(arr) {
  if (!arr.length) return null;
  //use queue to store the uncreated node
  var queue = [];
  var root = new TreeNode(arr.shift());
  queue.push(root);
  var p;
  while (queue.length) {
    var leftValue = arr.shift();
    var rightValue = arr.shift();
    p = queue.shift();
    if (leftValue && rightValue && leftValue != '#' && rightValue != '#') {
      p.left = new TreeNode(leftValue);
      p.right = new TreeNode(rightValue);
      queue.push(p.left);
      queue.push(p.right);
    } else if ((leftValue === undefined || leftValue == '#') && rightValue && rightValue != '#') {
      p.right = new TreeNode(rightValue);
      queue.push(p.right);
    } else if (leftValue && leftValue != '#' && (rightValue == '#' || rightValue === undefined)) {
      p.left = new TreeNode(leftValue);
      queue.push(p.left);
    }
  }
  return root;
}

function printBinaryTreeHelper(root, prefix, isTail) {
  console.log(prefix, isTail ? "└──" : "├──", root.val);
  if (root.left && root.right) {
    printBinaryTreeHelper(root.left, prefix + (isTail ? "    " : " |  "), false);
    printBinaryTreeHelper(root.right, prefix + (isTail ? "    " : " |  "), true);
  } else if (root.left) {
    printBinaryTreeHelper(root.left, prefix + (isTail ? "    " : " |  "), true);
  } else if (root.right) {
    printBinaryTreeHelper(root.right, prefix + (isTail ? "    " : " |  "), true);
  }
}

function printBinaryTree(root) {
  printBinaryTreeHelper(root, "", true);
}


// test
//test
var arr = [9, 5, 13, 3, 7, 11, 15, 2, 4, 6, 8, 10, 12, 14, 16], target = 13, k = 4;
var root = levelCreateBinaryTree(arr);
printBinaryTree(root, "", true);
var algo = "algo";
console.time(algo);
var res = findKClosest(root, target, k);
console.timeEnd(algo);
console.log("res:", res);