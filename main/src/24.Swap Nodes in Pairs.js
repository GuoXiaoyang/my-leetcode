/**
 * Created by gxy on 2017/3/25.
 */

/****************************************************************
 24. Swap Nodes in Pairs
 Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.

 Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

 Subscribe to see which companies asked this question.

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

// recursive solution
var swapPairs1 = function(head) {
  if(!head || !head.next) return head;
  var pFirst = head, pSecond = head.next;
  pFirst.next = swapPairs1(head.next.next);
  pSecond.next = pFirst;
  return pSecond;
};

//loop solution
var swapPairs2 = function(head) {
  if(!head || !head.next) return head;
  var pre = new ListNode(0);
  pre.next = head;
  var p1=pre, p2, p3;
  while(p1.next && p1.next.next) {
    p2=p1.next;
    p3=p2.next;
    p2.next = p3.next;
    p3.next = p2;
    p1.next = p3;
    p1=p2;
  }
  return pre.next;
};

//List Structure
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function List() {
  this.pHead = null;
  this.pTail = null;
  this.length = 0;
}
List.prototype = {
  addNode: function (listNode) {
    if(this.length === 0 ) {
      this.pHead = listNode;
      this.pTail = listNode;
    } else {
      this.pTail.next = listNode;
      this.pTail = this.pTail.next;

    }
    this.length++;
  },
  removeNode: function () {
    var p = this.pHead;
    if(!p.next) {
      this.pHead = null;
      this.pTail = null;
      this.length--;
    } else {
      while(p.next.next) {
        p=p.next;
      }
      this.pTail = p;
      p.next = null;
      this.length--;
    }


  },
  getHead: function () {
    return this.pHead;
  },
  getTail: function () {
    return this.pTail;
  },
  size: function () {
    return this.length;
  },
  initArray: function (arr) {
    if(!arr) {
      this.pHead = null;
      this.pTail = null;
      this.length = 0;
    }
    this.pHead = new ListNode(arr[0]);
    this.length++;
    this.pTail = this.pHead;
    var temp;

    for(var i = 1;i<arr.length;i++) {
      temp = new ListNode(arr[i]);
      this.pTail.next = temp;
      this.length++;
      this.pTail = this.pTail.next;
    }

  },
  print: function () {
    var p=this.pHead;
    console.log("list:");
    while (p.next != null) {
      console.log(p.val, "->");
      p = p.next;
    }
    console.log(p.val);
  }
};


function printList(head) {
  var p = head;
  console.log("list:");
  while (p.next != null) {
    console.log(p.val, "->");
    p = p.next;
  }
  console.log(p.val);
}

//test
var arr = [1,2,3,4];
var list = new List();
list.initArray(arr);
list.print();
console.time("algo1");
var res1 = swapPairs1(list.pHead);
console.timeEnd("algo1");
printList(res1);

console.time("algo2");
list.print();
var res2 = swapPairs2(list.pHead);
console.timeEnd("algo2");
printList(res2);


