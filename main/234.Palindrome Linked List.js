/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 234. Palindrome Linked List
 Given a singly linked list, determine if it is a palindrome.

 Follow up:
 Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
  if(head===null || head.next===null) return true;

  //find the middle
  var middle=head,fast=head;
  while(fast.next!==null && fast.next.next!==null) {
    fast=fast.next.next;
    middle=middle.next;
  }
  //reverse the latter half list
  var cur=middle.next,next=cur.next;
  while(next!==null) {
    cur.next=next.next;
    next.next=middle.next;
    middle.next=next;
    next=cur.next;
  }
  //compare
  cur=head;
  next=middle.next;
  while(next!==null) {
    if(cur.val!=next.val) return false;
    cur=cur.next;
    next=next.next;
  }
  return true;
};

//data structure
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
var arr = [1,2,3,2,1];
var list = arrayToList(arr);
printList(list);
var algo = "algo";
console.time(algo);
var res = isPalindrome(list);
console.timeEnd(algo);
console.log("res:",res);