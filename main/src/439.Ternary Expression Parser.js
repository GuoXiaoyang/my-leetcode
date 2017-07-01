/**
 * Created by gxy on 2017/6/15.
 */
/****************************************************************
 439.Ternary Expression Parser
 Given a string representing arbitrarily nested ternary expressions, 
 calculate the result of the expression. You can always assume that the given expression 
 is valid and only consists of digits 0-9, ?, :, T and F 
 (T and Frepresent True and False respectively).
 Note:
 The length of the given string is ≤ 10000.
 Each number will contain only one digit.
 The conditional expressions group right-to-left (as usual in most languages).
 The condition will always be either Tor F. That is, the condition will never be a digit.
 The result of the expression will always evaluate to either a digit 0-9, T or F.
 Example 1:
 Input: "T?2:3"
 Output: "2"
 Explanation: If true, then result is 2; otherwise result is 3.
 Example 2:
 Input: "F?1:T?4:5" 
 Output: "4" 
 Explanation: The conditional expressions group right-to-left. 
 Using parenthesis, it is read/evaluated as: 
 "(F?1:(T?4:5))""(F?1:(T?4:5))"->"(F?1:4)"or->"(T?4:5)"->"4"->"4"
 Example 3:
 Input: "T?T?F:5:3"
 Output: "F" 
 Explanation: The conditional expressions group right-to-left. 
 Using parenthesis, it is read/evaluated as:
 "(T?(T?F:5):3)""(T?(T?F:5):3)"->"(T?F:3)"or->"(T?F:5)"->"F"->"F"
 ****************************************************************/
var parseTernary = function (str) {
  var stack = [];
  for (var i = str.length - 1; i >= 0; i--) {
    if (stack.length > 0 && stack[stack.length - 1] == '?') {
      stack.pop();
      var first = stack.pop();
      stack.pop(); //pop out ':'
      var second = stack.pop();
      if (str[i] == 'T') {
        stack.push(first);
      } else {
        stack.push(second);
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack[0];
};

//test
var str="T?T?F:5:3";
var algo = "algo";
console.time(algo);
var res = parseTernary(str);
console.timeEnd(algo);
console.log("res:",res);