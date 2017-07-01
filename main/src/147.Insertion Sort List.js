/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 147	Insertion Sort List
 Sort a linked list using insertion sort.
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
var insertionSortList = function(head) {
  var fakeHead=new ListNode(0);
  var cur=head;
  var pre=fakeHead;// insert position
  var newNext,next;
  while(cur!==null) {
    while(pre.next!==null &&　pre.next.val<cur.val) {
      pre=pre.next;
    }
    next=cur.next;
    newNext=pre.next;
    pre.next=cur;
    cur.next=newNext;

    pre=fakeHead;
    cur=next;
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
var arr = [5,4,3,2,1];
var list1 = arrayToList(arr);
printList(list1);
var algo = "algo";
console.time(algo);
var list2 = insertionSortList(list1);
console.timeEnd(algo);
printList(list2);