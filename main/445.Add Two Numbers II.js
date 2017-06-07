/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 445. Add Two Numbers II
 You are given two non-empty linked lists representing two non-negative integers.
 The most significant digit comes first and each of their nodes contain a single digit.
 Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Follow up:
 What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

 Example:

 Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 8 -> 0 -> 7
****************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var stack1=[],stack2=[];
  var p1=l1,p2=l2;
  while(p1!==null) {
    stack1.push(p1.val);
    p1=p1.next;
  }
  while(p2!==null) {
    stack2.push(p2.val);
    p2=p2.next;
  }
  //add two stacks
  var stack3=[],carry=0;
  var p,q,r;
  while(stack1.length>0 || stack2.length>0) {
    p=stack1.length>0?stack1.pop():0;
    q=stack2.length>0?stack2.pop():0;
    r=carry+p+q;
    stack3.push(r%10);
    carry=parseInt(r/10);
  }
  if(carry>0) stack3.push(carry);
  var head=new ListNode(0);
  p=head;
  while(stack3.length>0) {
    var tmp=new ListNode(stack3.pop());
    p.next=tmp;
    p=p.next;
  }
  return head.next;
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
var arr1 = [1,2,3,4,5],arr2=[3,4,6];
var list1 = arrayToList(arr1);
var list2=arrayToList(arr2);

var algo = "algo";
console.time(algo);
var res = addTwoNumbers(list1,list2);
console.timeEnd(algo);
printList(res);