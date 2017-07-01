/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 138. Copy List with Random Pointer
 A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

 Return a deep copy of the list.
****************************************************************/
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if(!head) return null;
  var cur=head,next;
  var p;
  while(cur!==null) {
    next=cur.next;
    p=new RandomListNode(cur.label);
    cur.next=p;
    p.next=next;
    cur=next;
  }
  cur = head;
  while(cur!=null) {
    if(cur.random !== null) {

      cur.next.random = cur.random.next;
    }
    cur=cur.next.next;

  }
  var fakeHead=new RandomListNode(0);
  var q=fakeHead;
  cur = head;
  while(cur!==null) {
    next=cur.next.next;
    q.next=cur.next;
    q=q.next;
    cur.next=next;
    cur=next;
  }
  return fakeHead.next;
};

