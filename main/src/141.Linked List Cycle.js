/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 141. Linked List Cycle
 Given a linked list, determine if it has a cycle in it.

 Follow up:
 Can you solve it without using extra space?
****************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  var fast=head,slow=head;
  while(fast!==null && fast.next!==null) {
    fast=fast.next.next;
    slow=slow.next;
    if(fast==slow) return true;
  }
  return false;
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
var arr = [1,2,3,4,5,6,7,8,9,10,11];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
var hasCycle = hasCycle(list1);
console.timeEnd(algo);
console.log("hasCycle:",hasCycle);