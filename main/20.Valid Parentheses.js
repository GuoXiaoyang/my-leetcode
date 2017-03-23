/**
 * Created by gxy on 2017/3/23.
 */
/*********************************************************************
 20. Valid Parentheses
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 Subscribe to see which companies asked this question.
 *********************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack=[];
    for(var i=0;i<s.length;i++) {
        if(s[i]=='(' || s[i]=='[' || s[i]=='{') {
            stack.push(s[i]);
        } else if(s[i]==')') {
            if(stack[stack.length-1] == '(') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else if(s[i]==']') {
            if(stack[stack.length-1] == '[') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else if(s[i]=='}') {
            if(stack[stack.length-1] == '{') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }

    return stack.length===0;
};


//test
var str="a({b[c]+(s)})";
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=isValid(str);
console.timeEnd(timeLog1);
console.log("res:", res);
