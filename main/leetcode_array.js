/**
 * Created by gxy on 2017/3/4.
 */

/* leetcode_array.js
 01. 2Sum
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return;
    var res;
    var numPosHash = {};
    for(var i=0; i<nums.length;i++) {
        // console.log("numPosHash:", numPosHash);
        // console.log("numPosHash[(target-nums[i]).toString():", numPosHash[(target-nums[i]).toString()]);
        if(numPosHash[(target-nums[i]).toString()] === undefined) {
            numPosHash[nums[i].toString()] = i;
        } else {
            var pos = parseInt(numPosHash[(target-nums[i]).toString()]);
            res = [pos,i];
            break;
        }
    }
    return res;
};
//test
/*var testArray1 = [1,7,2,8,5,6];
var result1 = twoSum(testArray1, 13);
console.log("result1:", result1);*/



/**
 * 02. Add Two Numbers
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {

};

var p={};
ListNode.call(p,5);
console.log(p.val);