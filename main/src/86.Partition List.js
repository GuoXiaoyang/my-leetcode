/**
 * Created by gxy on 2017/4/15.
 */
/****************************************************************
 86. Partition List
 Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

 You should preserve the original relative order of the nodes in each of the two partitions.

 For example,
 Given 1->4->3->2->5->2 and x = 3,
 return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var l=new ListNode(0),g= new ListNode(0);
  var lt=l, gt=g;
  while(head!==null) {
    if(head.val<x) {
      lt.next=head;
      lt=lt.next;
    } else {
      gt.next=head;
      gt=gt.next;
    }
    head=head.next;
  }
  gt.next=null;
  lt.next= g.next;
  return l.next;
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
var arr = [1,4,3,2,5,2],target=3;
var list=arrayToList(arr);
printList(list);
var algo = "algo";
console.time(algo);
var res = partition(list,target);
console.timeEnd(algo);
printList(res);