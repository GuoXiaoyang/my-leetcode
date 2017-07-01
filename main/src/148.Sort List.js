/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 148. Sort List
 Sort a linked list in O(n log n) time using constant space complexity.
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
var sortList = function(head) {
  return mergeSortList(head,null);
};

var mergeSortList = function (head,tail) {
  if(head==tail) return head;
  //merge sort
  var middle=head,fast=head;
  while(fast.next!==null && fast.next.next!==null) {
    fast=fast.next.next;
    middle=middle.next;
  }
  var next=middle.next;
  middle.next=null;
  var left=mergeSortList(head,middle);
  var right=mergeSortList(next,null);
  return mergeList(left,right);
};

var mergeList = function (list1,list2) {
  var fakeHead=new ListNode(0);
  var p1=list1,p2=list2;
  var cur=fakeHead;
  while(p1!==null && p2!==null) {
    if(p1.val<p2.val) {
      cur.next=p1;
      p1=p1.next;
      cur=cur.next;
    } else {
      cur.next=p2;
      p2=p2.next;
      cur=cur.next;
    }
  }
  if(p1!==null) cur.next=p1;
  if(p2!==null) cur.next=p2;
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
var arr = [5,4,3,2,1];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
var list2 = sortList(list1);
console.timeEnd(algo);
printList(list2);