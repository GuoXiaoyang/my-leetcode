/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 369.Plus One Linked List
 Given a non-negative number represented as a singly linked list of digits, plus one to the number.
 The digits are stored such that the most significant digit is at the head of the list.
 ****************************************************************/
var plusOneList1 = function (head) {
  if(head===null) return null;
  //reverse the list
  var fakeHead=new ListNode(0);
  fakeHead.next=head;
  var cur=head,next;
  while(cur.next!==null) {
    next=cur.next;
    cur.next=next.next;
    next.next=fakeHead.next;
    fakeHead.next=next;

  }

  //add 1
  var cur=fakeHead;
  if(cur.next.val<9) {
    cur.next.val++;
  } else {
    while(cur.next!==null && cur.next.val==9) {
      cur.val=0;
      cur=cur.next;
    }
    if(cur.next!==null) {
      cur.val=0;
      cur.next.val++;
    } else {
      cur.val=0;
      var tmp=new ListNode(1);
      cur.next=tmp;
    }
  }
  //reverse again
  var cur=fakeHead.next,next;
  while(cur.next!==null) {
    next=cur.next;
    cur.next=next.next;
    next.next=fakeHead.next;
    fakeHead.next=next;
  }
  return fakeHead.next;
};

var plusOneList2 = function (head) {
  if(head===null) return null;
  var fakeHead=new ListNode(0);
  fakeHead.next=head;
  var i=fakeHead,j=fakeHead;
  while(i.next!==null) {
    i=i.next;
    if(i.val<9) j=i;
  }
  if(i.val<9) {
    i.val++;
  } else {
    j.val++;
    j=j.next;
    while(j!==null) {
      j.val=0;
      j=j.next;
    }
  }
  if(fakeHead.val>0) return fakeHead;
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
var arr = [9,8];
var list = arrayToList(arr);
var algo = "algo";
console.time(algo);
var list2 = plusOneList1(list);
console.timeEnd(algo);
printList(list2);

var list3=plusOneList2(list2);
printList(list3);