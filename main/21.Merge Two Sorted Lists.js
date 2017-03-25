
/**
 * Created by gxy on 2017/3/23.
 */
/**********************************************************************
 21. Merge Two Sorted Lists
 Merge two sorted linked lists and return it as a new list.
 The new list should be made by splicing together the nodes of the first two lists.
 **********************************************************************/

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
var mergeTwoLists = function(l1, l2) {
    if(l1===null || l2===null) return (l1===null)?l2:l1;
    var pHead;
    if(l1.val<=l2.val && l1.next === null) {
        pHead=l1;
        pHead.next=l2;
        return pHead;
    } else if(l1.val>l2.val && l2.next === null) {
        pHead=l2;
        pHead.next=l1;
        return pHead;
    } else if(l1.val<=l2.val && l1.next !== null) {
        pHead = l1;
        l1=l1.next;
    } else if(l1.val>l2.val && l2.next !== null) {
        pHead=l2;
        l2=l2.next;
    }
    var p=pHead;
    while(l1 && l2) {
        if(l1.val<=l2.val) {
            p.next=l1;
            p=p.next;
            l1=l1.next;
        } else if(l1.val>l2.val) {
            p.next=l2;
            p=p.next;
            l2=l2.next;
        }
    }
    p.next=(l1?l1:l2);
    return pHead;
};


//test
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function initList(n,odd) {
    var pHead=new ListNode();
    var pTail=pHead;
    var i,temp;
    if(odd) {
        for(i=1;i<n+1;i++) {
            temp=new ListNode(2*i-1);
            pTail.next=temp;
            pTail=pTail.next;
        }
    } else {
        for(i=1;i<n+1;i++) {
            temp=new ListNode(2*i);
            pTail.next=temp;
            pTail=pTail.next;
        }
    }

    return pHead.next;
}

function printList(head) {
    var p=head;
    while(p!=null) {
        console.log(p.val,"->");
        p=p.next;
    }
}





var list1 = initList(6,true);
var list2 = initList(6,false);
printList(list1);
printList(list2);


var timeLog1 = "Algo1";
console.time(timeLog1);
var res=mergeTwoLists(list1,list2);
console.timeEnd(timeLog1);
printList(res);