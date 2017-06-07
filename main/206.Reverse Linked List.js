/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 206. Reverse Linked List
 Reverse a singly linked list.
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
//recursive solution
var reverseList1 = function(head) {
  if(head===null || head.next===null) return head;
  var node=reverseList1(head.next);
  head.next.next=head;
  head.next=null;
  return node;
};

//iterative solution
var reverseList2 = function (head) {
  if(head===null || head.next===null) return head;
  var fakeHead=new ListNode(0);
  fakeHead.next=head;
  var cur=head,next=cur.next;
  while(next!==null) {
    cur.next=next.next;
    next.next=fakeHead.next;
    fakeHead.next=next;
    next=cur.next;
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
var arr = [5,4,3,2,1],val=3;
var list = arrayToList(arr);
printList(list);
var algo = "algo";
console.time(algo);
var list2 = reverseList1(list);
console.timeEnd(algo);
printList(list2);

var list3=reverseList2(list2);
printList(list3);