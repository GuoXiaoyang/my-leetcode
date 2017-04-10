/**
 * Created by gxy on 2017/4/10.
 */

/****************************************************************
 66. Plus One
 Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

 You may assume the integer do not contain any leading zero, except the number 0 itself.

 The digits are stored such that the most significant digit is at the head of the list.
****************************************************************/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if(!digits.length) return digits;
  for(var i=digits.length-1;i>=0;i--) {
    if(digits[i] >= 9) {
      digits[i]=0;
    } else {
      digits[i]+=1;
      return digits;
    }
  }
  digits[0]=1;
  digits.push(0);
  return digits;
};

//test
var nums = [9,9,9];
var  algo= "algo";
console.time(algo);
var res = plusOne(nums);
console.timeEnd(algo);
console.log("res:",res);