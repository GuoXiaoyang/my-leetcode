/**
 * Created by gxy on 2017/3/23.
 */

/**********************************************************************
 22. Generate Parentheses
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:

 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]
 **********************************************************************/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [],
    str = "";
  generate(res, str, n, 0);
  return res;
};

function generate(res, str, n, m) {
  if (m === 0 && n === 0) {
    res.push(str);
  }
  if (m > 0) generate(res, str + ')', n, m - 1);
  if (n > 0) generate(res, str + '(', n - 1, m + 1);
}

//test

var num = 3;
var algo = "algo";
console.time(algo);
var res = generateParenthesis(num);
console.timeEnd(algo);
console.log("res:", res);
