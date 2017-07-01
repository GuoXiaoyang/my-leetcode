/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 143. Reorder List
 Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

 You must do this in-place without altering the nodes' values.

 For example,
 Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  //find the middle
  if(head===null || head.next===null) return;
  var fast=head,middle=head;
  while(fast.next!==null && fast.next.next!==null) {
    fast=fast.next.next;
    middle=middle.next;
  }
  //reverse the latter-half list
  var cur=middle.next;
  var next=cur.next;
  while(next!==null) {
    cur.next=next.next;
    next.next=middle.next;
    middle.next=next;
    next=cur.next;
  }
  //insert the node
  var preBeg=head,latterBeg=middle.next;
  var preNext,latterNext;
  while(preBeg!=middle) {
    preNext=preBeg.next;
    latterNext=latterBeg.next;
    preBeg.next=latterBeg;
    latterBeg.next=preNext;
    preBeg=preNext;
    latterBeg=latterNext;
    middle.next=latterBeg;
  }
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
var arr = [1,2,3,4,5];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
reorderList(list1);
console.timeEnd(algo);
printList(list1);