/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 92. Reverse Linked List II
 Reverse a linked list from position m to n. Do it in-place and in one-pass.

 For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,

 return 1->4->3->2->5->NULL.

 Note:
 Given m, n satisfy the following condition:
 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(head===null) return head;
  var fakeHead = new ListNode(0);
  fakeHead.next=head;
  var pre=fakeHead;
  for(var i=0;i<m-1;i++) {
    pre=pre.next;
  }
  var p=pre.next,q=p.next;
  while(n>m) {
    p.next=q.next;
    q.next=pre.next;
    pre.next=q;
    q=p.next;
    m++;
  }
  return fakeHead.next;
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
var arr = [1, 2, 3, 4, 5];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
var list2 = reverseBetween(list1,2,4);
console.timeEnd(algo);
printList(list2);