/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 508. Most Frequent Subtree Sum
 Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

 Examples 1
 Input:

 5
 /  \
 2   -3
 return [2, -3, 4], since all the values happen only once, return all of them in any order.
 Examples 2
 Input:

 5
 /  \
 2   -5
 return [2], since 2 happens twice, however -5 only occur once.
 Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
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
var findFrequentTreeSum = function(root) {
  var map={},maxCnt=[0];
  var res=[];
  treeSum(root,map,maxCnt);
  console.log("map,maxCnt:",map,maxCnt);
  for(var item in map) {
    if(map[item]==maxCnt) res.push(parseInt(item));
  }
  return res;
};

function treeSum(root,map,maxCnt) {
  if(root==null) return 0;
  var sum=root.val+treeSum(root.left,map,maxCnt)+treeSum(root.right,map,maxCnt);
  if(map[sum]==undefined) {
    map[sum]=1;
  } else map[sum]++;
  maxCnt[0]=Math.max(map[sum],maxCnt[0]);
  return sum;
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
//test
var arr = [1,2,3,4,5,6,7,8,9,10];
var root=levelCreateBinaryTree(arr);
printBinaryTree(root,"",true);
var algo = "algo";
console.time(algo);
var res = findFrequentTreeSum(root);
console.timeEnd(algo);
console.log("res:",res);