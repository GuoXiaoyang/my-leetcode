/**
 * Created by gxy on 2017/5/29.
 */
/****************************************************************
 414. Third Maximum Number
 Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

 Example 1:
 Input: [3, 2, 1]

 Output: 1

 Explanation: The third maximum is 1.
 Example 2:
 Input: [1, 2]

 Output: 2

 Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 Example 3:
 Input: [2, 2, 3, 1]

 Output: 1

 Explanation: Note that the third maximum here means the third maximum distinct number.
 Both numbers with value 2 are both considered as second maximum.
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var max2=null,max1=null,max0=null;
  var ele;
  for(var i=0;i<nums.length;i++) {
    ele=nums[i];
    if(ele==max2 || ele==max1 || ele==max0) {

    } else if(max2==null || ele>max2) {
      max0=max1;
      max1=max2;
      max2=ele;
    } else if(max1==null || ele>max1) {
      max0=max1;
      max1=ele;
    } else if(max0==null || ele>max0) {
      max0=ele;
    }
  }
  return max0==null?max2:max0;
};




//test
var arr = [3,3,4,3,4,3,0,3,3];
var algo = "algo";
console.time(algo);
var res = thirdMax(arr);
console.timeEnd(algo);
console.log("res:",res);