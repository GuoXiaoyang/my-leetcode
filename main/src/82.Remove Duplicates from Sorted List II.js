/**
 * Created by gxy on 2017/4/14.
 */

/****************************************************************
 * 82. Remove Duplicates from Sorted List II
 Given a sorted linked list, delete all nodes that have duplicate numbers,
 leaving only distinct numbers from the original list.

 For example,
 Given 1->2->3->3->4->4->5, return 1->2->5.
 Given 1->1->1->2->3, return 2->3.
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

//iteration
var deleteDuplicates1 = function(head) {
  if(head===null || head.next===null) return head;
  var fakeHead = new ListNode(0);
  fakeHead.next = head;
  var pre=fakeHead, cur=head;
  while(cur!==null) {
    while(cur.next!==null && cur.val==cur.next.val) {
      cur=cur.next;
    }
    if(pre.next==cur) {
      pre=cur;
    } else {
      pre.next=cur.next;
    }
    cur=cur.next;
  }
  return fakeHead.next;
};

//recursive
var deleteDuplicates2 = function(head) {
  if(head===null) return head;
  if(head.next!==null && head.val==head.next.val) {
    return deleteDuplicates2(head.next);
  } else {
    head.next=deleteDuplicates2(head.next);
    return head;
  }
};

//test
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
var arr = [1,2,3,3,4,4,5];
var list=arrayToList(arr);
printList(list);
var algo1 = "algo1";
console.time(algo1);
var res1 = deleteDuplicates1(list);
console.timeEnd(algo1);
printList(res1);

var algo1 = "algo2";
console.time(algo1);
var res2 = deleteDuplicates2(list);
console.timeEnd(algo1);
printList(res2);