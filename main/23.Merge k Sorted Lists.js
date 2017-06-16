/**
 * Created by gxy on 2017/3/23.
 */
/**********************************************************************
 23. Merge k Sorted Lists
 Merge k sorted linked lists and return it as one sorted list.
 Analyze and describe its complexity.
 **********************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 1) return null;
  console.log("lists.length:",lists.length);
  var pHead = new ListNode(0),
    pTail = pHead;
  var binaryHeap = new BinaryHeap(function (x) {
    return x.val;
  });
  for (var i = 0; i < lists.length; i++) {
    if(lists[i]) {
      binaryHeap.push(lists[i]);
    }

  }
  console.log("binaryHeap:");
  binaryHeap.print();
  while (binaryHeap.size() > 0) {
    pTail.next = binaryHeap.pop();
    console.log("binaryHeap size:", binaryHeap.size());

    pTail = pTail.next;
    if (!pTail.next) continue;
    binaryHeap.push(pTail.next);
  }
  return pHead.next;
};

// data structure
// build a binary head with the listNode node-type

function BinaryHeap(scoreFunction) {
  this.data = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
  push: function (element) {
    // console.log("element:", this.scoreFunction(element));
    this.data.push(element);
    this.bubbleUp(this.size() - 1);
  },
  pop: function () {
    if (this.size() < 1) return null;
    var result = this.data[0];
    var end = this.data.pop();
    if(this.size()>0) {
      this.data[0] = end;
      this.sinkdown(0);
    }

    return result;
  },
  remove: function (node) {
    for (var i = 0; i < this.size(); i++) {
      if (this.data[i] !== node) continue;
      var end = this.data.pop();
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == this.size() - 1) break;
      this.data[i] = end;
      this.bubbleUp(i);
      this.sinkdown(i);
      break;
    }
  },
  size: function () {
    return this.data.length;
  },

  bubbleUp: function (n) {
    var element = this.data[n],
      score = this.scoreFunction(element);
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2 - 1),
        parent = this.data[parentN];
      if (score >= this.scoreFunction(parent)) break;
      this.data[parentN] = element;
      this.data[n] = parent;
      n = parentN;
    }
  },
  sinkdown: function (n) {
    var element = this.data[n],
      length = this.size(),
      score = this.scoreFunction(element);

    while (true) {
      var swapN = null;
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      if (child1N < length) {
        var child1 = this.data[child1N],
          child1Score = this.scoreFunction(child1);
        if (score > child1Score) {
          swapN = child1N;
        }

      }
      if (child2N < length) {
        var child2 = this.data[child2N],
          child2Score = this.scoreFunction(child2);
        if (child2Score < (swapN===null?score:child1Score)) {
          swapN = child2N;
        }
      }

      if (swapN === null) break;
      this.data[n] = this.data[swapN];
      this.data[swapN] = element;
      n = swapN;
    }
  },
  print: function () {
    for (var i = 0; i < this.size(); i++) {
      console.log(this.scoreFunction(this.data[i]), "->");
    }
  }

};

//test
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function initList(n, odd) {
  var pHead = new ListNode();
  var pTail = pHead;
  if (odd) {
    for (var i = 1; i < n + 1; i++) {
      var temp = new ListNode(2 * i - 1);
      // var temp=new ListNode(11-2*i);
      pTail.next = temp;
      pTail = pTail.next;
    }
  } else {
    for (var i = 1; i < n + 1; i++) {
      var temp = new ListNode(2 * i);
      pTail.next = temp;
      pTail = pTail.next;
    }
  }

  return pHead.next;
}

function printList(head) {
  var p = head;
  while (p != null) {
    console.log(p.val, "->");
    p = p.next;
  }
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

var lists = [];
var list1 = initList(5, true);
// printList(list1);

/*var listHeap = new BinaryHeap(function (x) {
  return x.val;
});
var p = list1;
while (p) {
  listHeap.push(p);
  p = p.next;
}
listHeap.print();
var x = listHeap.pop();
console.log("x:", x);
listHeap.print();*/

/*lists.push(list1);
var list2 = initList(5, false);
// printList(list2);
lists.push(list2);
var list3 = initList(3, true);
// printList(list3);
lists.push(list3);
var list4 = initList(4, false);
// printList(list4);
lists.push(list4);
var algo1 = "algo1";
console.time(algo1);
var res = mergeKLists(lists);
console.timeEnd(algo1);
printList(res);*/


//another test
var arrlist2 = [[-8,-7,-6,-3,-2,-2,0,3],[-10,-6,-4,-4,-4,-2,-1,4],[-10,-9,-8,-8,-6],[-10,0,4]];
var list2=[];
for(var i=0;i<arrlist2.length;i++) {
  var listI = arrayToList(arrlist2[i]);
  console.log("list of",i,":");
  printList(listI);
  list2.push(listI);

}
var algo2 = "algo2";
console.time(algo2);
var res = mergeKLists(list2);
console.log("res:");
printList(res);
console.timeEnd(algo2);