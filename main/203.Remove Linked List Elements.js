/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 203. Remove Linked List Elements
 Remove all elements from a linked list of integers that have value val.

 Example
 Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(head===null) return null;
  var fakeHead=new ListNode(0);
  fakeHead.next=head;
  var p=fakeHead;
  while(p.next!==null) {
    if(p.next.val!=val) {
      p=p.next;
    }else p.next=p.next.next;
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
var list2 = removeElements(list,val);
console.timeEnd(algo);
printList(list2);