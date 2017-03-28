/**
 * Created by gxy on 2017/3/28.
 */
/**********************************************************************************************
 32. Longest Valid Parentheses
 Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 For "(()", the longest valid parentheses substring is "()", which has length = 2.

 Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 **********************************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if(!s) return 0;
  var stack=[],n=s.length,longest=0;
  for(var i=0;i<s.length;i++) {

    if(s[i]=='(') stack.push(i);
    if(s[i]==')') {
      if(s[stack[stack.length-1]]=='(') {
        stack.pop();
      } else stack.push(i);
    }
    console.log("stack:", stack);
  }
  console.log("stack.length:", stack.length);
  if(stack.length === 0) {
    longest = n;
  } else {
    longest = n-stack[stack.length-1]-1;
    console.log("longest:", longest);
    for(i=0;i<stack.length-1;i++) {
      var tmpLen = stack[i+1]-stack[i]-1;
      longest = (tmpLen>longest)?tmpLen:longest;
    }
    longest = ((stack[0])>longest)?(stack[0]):longest;
    console.log("longest:", longest);
  }

  return longest;
};


//test
var str=")))(()())()((()(())(()))(((((()()(()))(()()((((())())(()())))()())(((()((((((())()()))((()))(()))))((((((()((()()()))))))(()()()))))())()()((((((()))((((()(()))))()())((((()(()())())";
var algo1 = "algo1";
console.time(algo1);
var res = longestValidParentheses(str);
console.timeEnd(algo1);
console.log("res:",res);