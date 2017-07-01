/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 142. Linked List Cycle II
 Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

 Note: Do not modify the linked list.

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  var fast=head,slow=head;
  while(fast!==null && fast.next!==null) {
    fast=fast.next.next;
    slow=slow.next;
    if(fast==slow) break;
  }
  if(fast===null || fast.next===null) return null;
  fast=head;
  while(fast!=slow) {
    fast=fast.next;
    slow=slow.next;
  }
  return slow;
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
    if(i==5) var circle=tmp;
  }
  pTail.next=circle;
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
// printList(list1);
var algo = "algo";
console.time(algo);
var node = detectCycle(list1);
console.timeEnd(algo);
console.log("node.val:",node.val);