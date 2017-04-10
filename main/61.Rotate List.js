/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 Given a list, rotate the list to the right by k places, where k is non-negative.

 For example:
 Given 1->2->3->4->5->NULL and k = 2,
 return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

};


//test
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrayToList(arr) {
  if(!arr) return null;
  var pHead = new ListNode(arr[0]);
  var pTail = pHead, temp;

  for(var i = 1;i<arr.length;i++) {
    temp = new ListNode(arr[i]);
    pTail.next = temp;
    pTail = pTail.next;
  }

  return pHead;
}
var list = arrayToList();
var algo = "algo";
console.time(algo);
var res = rotateRight(list);
console.timeEnd(algo);
console.log("res:",res);