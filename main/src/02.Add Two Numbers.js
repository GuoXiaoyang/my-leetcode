/**
 * Created by gxy on 2017/3/19.
 */
/**********************************************************************************
 * 02. Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.

 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8

 ********************************************************************************/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var p = l1, q = l2;
    var pHead = new ListNode(0);
    var r = pHead;
    var temp;
    var flag = 0;
    while (p || q || flag) {
        // console.log(p.val,"&",q.val);
        var sum = parseInt((p ? p.val : 0)) + parseInt((q ? q.val : 0)) + flag;
        // console.log(sum);
        p = p ? p.next : p;
        q = q ? q.next : q;
        temp = new ListNode(parseInt(sum % 10));
        flag = parseInt(sum / 10);
        r.next = temp;
        r = r.next;

    }
    return pHead.next;
};


// test
var ph = new ListNode();
var rh = ph;
var tp;
for (var i = 1; i < 10; i++) {
    // rh.val = i;
    tp = new ListNode(i);
    rh.next = tp;
    rh = rh.next;
}
var l = ph.next;
/*while (l) {
 console.log(l.val, "->");
 l = l.next;
 }*/

var res = addTwoNumbers(l, l);
while (res) {
    console.log(res.val, "->");
    res = res.next;
}