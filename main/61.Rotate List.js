/**
 * Created by gxy on 2017/4/9.
 */
/**********************************************************************************************
 61. Rotate List
 Given a list, rotate the list to the right by k places, where k is non-negative.

 For example:
 Given 1->2->3->4->5->NULL and k = 2,
 return 4->5->1->2->3->NULL.
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
var rotateRight = function(head, k) {
  if(head === null) return head;
  var len=1, p=head;
  while(p.next!==null) {
    p=p.next;
    len++;
  }
  p.next=head;
  var move = len-k%len;
  while(move>0) {
    p=p.next;
    move--;
  }
  var newHead=p.next;
  p.next=null;
  return newHead;
};


//test
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

var arr=[1,2,3,4,5];
var list=arrayToList(arr);
printList(list);
var algo1 = "algo1";
console.time(algo1);
var res = rotateRight(list,2);
console.timeEnd(algo1);
printList(res);