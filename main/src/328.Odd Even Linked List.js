/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 328. Odd Even Linked List
 Given a singly linked list, group all odd nodes together followed by the even nodes.
 Please note here we are talking about the node number and not the value in the nodes.

 You should try to do it in place. The program should run in O(1) space complexity
 and O(nodes) time complexity.

 Example:
 Given 1->2->3->4->5->NULL,
 return 1->3->5->2->4->NULL.

 Note:
 The relative order inside both the even and odd groups should remain as it was in the input.
 The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
  if(head===null || head.next===null) return head;
  var second=head.next;
  var odd=head,even=head.next;
  while(odd.next!==null && even.next!==null) {
    odd.next=even.next;
    even.next=odd.next.next;
    odd=odd.next;
    even=even.next;
  }
  odd.next=second;
  return head;
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
var list = arrayToList(arr);
printList(list);
var algo = "algo";
console.time(algo);
var list2 = oddEvenList(list);
console.timeEnd(algo);
printList(list2);