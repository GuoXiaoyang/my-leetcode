/**
 * Created by gxy on 2017/3/21.
 */

/**************************************************************
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 ************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var maxLen = 1, start = 0, end = 0;
    for (var i = 1; i < s.length; i++) {
        var pStart = i, pEnd = i;
        while (pEnd + 1 < s.length && s[i] == s[pEnd + 1]) {
            pEnd++;
            console.log("pEnd:", pEnd);
        }
        while (pStart - 1 >= 0 && s[i] == s[pStart - 1]) {
            pStart--;
            console.log("pStart:", pStart);
        }
        while (pStart - 1 >= 0 && pEnd + 1 < s.length && s[pStart - 1] == s[pEnd + 1]) {
            pStart--;
            pEnd++;

        }
        if (pEnd - pStart + 1 > maxLen) {
            maxLen = pEnd - pStart + 1;
            start = pStart;
            end = pEnd;
        }
    }
    return s.substring(start, end + 1);
};

//test
// var str="babad";
var str = "abadd";
console.time("Algo");
var res = longestPalindrome(str);
console.log("res:", res);
console.timeEnd("Algo");