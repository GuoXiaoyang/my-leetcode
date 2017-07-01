/**
 * Created by gxy on 2017/3/27.
 */
/**********************************************************************************************
 25. Reverse Nodes in k-Group
 Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

 k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

 You may not alter the values in the nodes, only nodes itself may be changed.

 Only constant memory is allowed.

 For example,
 Given this linked list: 1->2->3->4->5

 For k = 2, you should return: 2->1->4->3->5

 For k = 3, you should return: 3->2->1->4->5
 **********************************************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//recursive solution
var reverseKGroup1 = function(head, k) {
  if (head === null) return null;
  var count = 0,
    cur = head;
  while (count != k && cur !== null) {
    count++;
    cur = cur.next;
  }
  if (count < k) return head;
  if (count == k) cur = reverseKGroup1(cur, k);
  var tmp;
  while(count > 0) {
    count--;
    tmp = head.next;
    head.next = cur;
    cur = head;
    head = tmp;
  }
  head = cur;
  return head;
};

//loop solution
var reverseKGroup2 = function(head, k) {
  if (head === null || head.next === null) return head;
  var dummy = new ListNode(0),
    pre = dummy,
    tail = dummy;
  dummy.next = head;
  var count;
  while (true) {
    count = k;
    while (tail != null && count > 0) {
      count--;
      tail = tail.next;
    }
    if (tail == null) break;
    head = pre.next;
    var tmp;
    while (pre.next != tail) {
      tmp = pre.next;
      pre.next = tmp.next;
      tmp.next = tail.next;
      tail.next = tmp;
    }
    pre = head;
    tail = head;
  }
  return dummy.next;
};



//
//
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
var arr = [1, 2, 3, 4, 5];
var list1 = arrayToList(arr);
printList(list1);
var k = 2;
var algo1 = "algo1";
console.time(algo1);
var res1 = reverseKGroup1(list1, k);
console.timeEnd(algo1);
printList(res1);

var list2 = arrayToList(arr);
var algo2 = "algo2";
console.time(algo2);
var res2 = reverseKGroup2(list2, k);
console.timeEnd(algo2);printList(res2);
printList(res2);