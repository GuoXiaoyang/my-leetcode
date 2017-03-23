/**
 * Created by gxy on 2017/3/23.
 */
/********************************************************************
 19. Remove Nth Node From End of List
 Given a linked list, remove the nth node from the end of list and return its head.

 For example,

 Given linked list: 1->2->3->4->5, and n = 2.

 After removing the second node from the end, the linked list becomes 1->2->3->5.
 Note:
 Given n will always be valid.
 Try to do this in one pass.
 ********************************************************************/

/**
 * Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd = function(head, n) {
    var p=new ListNode();
    p.next=head;
    var q=p;
    while(n>0) {
        q=q.next;
        n--;
    }
    while(q.next!=null) {
        p=p.next;
        q=q.next;
    }
    var s=p.next;
    p.next=p.next.next;
    s.next=null;
    return (p.val==undefined)?p.next:head;
};

//test
function printList(head) {
    var p=head;
    while(p!=null) {
        console.log(p.val,"->");
        p=p.next;
    }
}



var pHead=new ListNode();
var pTail=pHead;
for(var i=1;i<6;i++) {
    var temp=new ListNode(i);
    pTail.next=temp;
    pTail=pTail.next;
}
printList(pHead.next)



var timeLog1 = "Algo1";
console.time(timeLog1);
var res=removeNthFromEnd(pHead.next,5);
console.timeEnd(timeLog1);
printList(res);
