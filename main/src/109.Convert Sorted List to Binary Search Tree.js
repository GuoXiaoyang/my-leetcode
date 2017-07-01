/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 109. Convert Sorted List to Binary Search Tree
 Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
****************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if(head===null) return null;
  var root= linkedListToBST(head,null);
  return root;
};

var linkedListToBST = function(head,tail) {
  if(head==tail) return null;
  var slow=head, fast=head;
  while(fast!=tail && fast.next!=tail) {
    fast=fast.next.next;
    slow=slow.next;
  }
  var newTreeNode=new TreeNode(slow.val);
  newTreeNode.left=linkedListToBST(head,slow);
  newTreeNode.right=linkedListToBST(slow.next,tail);
  return newTreeNode;
};

//data structure
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrayToList(arr) {

  if (!arr) return null;
  var pHead = new ListNode(arr[0]);
  var pTail = pHead;
  var tmp;
  for (var i = 1; i<arr.length;i++) {
    tmp = new ListNode(arr[i]);
    pTail.next = tmp;
    pTail = pTail.next;
  }
  return pHead;
}

function printList(head) {
  console.log("list:");
  var p = head;
  while (p.next != null) {
    console.log(p.val, "->");
    p = p.next;
  }
  console.log(p.val);
}


//test
var arr = [1, 2, 3, 4, 5,6,7,8,9,10,11];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
var binarySearchTree = sortedListToBST(list1);
console.timeEnd(algo);
printList(list2);