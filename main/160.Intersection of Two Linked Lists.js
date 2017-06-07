/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 160. Intersection of Two Linked Lists
 Write a program to find the node at which the intersection of two singly linked lists begins.


 For example, the following two linked lists:

 A:          a1 → a2
 ↘
 c1 → c2 → c3
 ↗
 B:     b1 → b2 → b3
 begin to intersect at node c1.
 Notes:

 If the two linked lists have no intersection at all, return null.
 The linked lists must retain their original structure after the function returns.
 You may assume there are no cycles anywhere in the entire linked structure.
 Your code should preferably run in O(n) time and use only O(1) memory.
****************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA===null || headB===null) return null;
  var p1=headA,p2=headB;
  while(p1!=p2) {
    p1=p1===null?headB:p1.next;
    p2=p2===null?headA:p2.next;
  }
  return p1;
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
var list = arrayToList(arr);
printList(list);
var list1=new ListNode(9);
list1.next=new ListNode(8);
list1.next.next=new ListNode(7);
list1.next.next.next=list;
var list2=new ListNode(6);
list2.next=list;
printList(list1);
printList(list2);

var algo = "algo";
console.time(algo);
var node=getIntersectionNode(list1,list2);
console.timeEnd(algo);
console.log("node:",node);
