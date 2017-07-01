/**
 * Created by gxy on 2017/3/21.
 **/

/** ************************************************************
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input: 'babad'
 * Output: 'bab'
 * Note: 'aba' is also a valid answer.
 * Example:
 * Input: 'cbbd'
 * Output: 'bb'
 ************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function longestPalindrome(s) {
  let maxLen = 1;
  let start = 0;
  let end = 0;
  for (let i = 1; i < s.length; i += 1) {
    let pStart = i;
    let pEnd = i;
    while (pEnd + 1 < s.length && s[i] === s[pEnd + 1]) {
      pEnd += 1;
      console.log('pEnd:', pEnd);
    }
    while (pStart - 1 >= 0 && s[i] === s[pStart - 1]) {
      pStart -= 1;
      console.log('pStart:', pStart);
    }
    while (pStart - 1 >= 0 && pEnd + 1 < s.length && s[pStart - 1] === s[pEnd + 1]) {
      pStart -= 1;
      pEnd += 1;
    }
    if ((pEnd - pStart) + 1 > maxLen) {
      maxLen = (pEnd - pStart) + 1;
      start = pStart;
      end = pEnd;
    }
  }
  return s.substring(start, end + 1);
};

// test
// var str='babad';
const str = 'abadd';
console.time('Algo');
const res = longestPalindrome(str);
console.log('res:', res);
console.timeEnd('Algo');
