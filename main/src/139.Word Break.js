/**
 * Created by gxy on 2017/6/12.
 */
/** **************************************************************
 139. Word Break
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 determine if s can be segmented into a space-separated sequence of one or more dictionary
 words. You may assume the dictionary does not contain duplicate words.

 For example, given
 s = 'leetcode',
 dict = ['leet', 'code'].

 Return true because 'leetcode' can be segmented as 'leet code'.
 ****************************************************************/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * Dynamic Programming
 */
const wordBreak = function (s, wordDict) {
  const len = s.length;
  const seg = new Array(len + 1).fill(0);
  seg[0] = 1;
  for (let i = 1; i < len + 1; i += 1) {
    for (let j = 0; j < wordDict.length; j += 1) {
      if (wordDict[j].length <= i && seg[i - wordDict[j].length] === 1) {
        if (s.substring(i - wordDict[j].length, i) === wordDict[j]) {
          seg[i] = 1;
          break;
        }
      }
    }
  }
  return seg[len] === 1;
};

// test
const s = 'bb';
const dict = ['a', 'b', 'bbb', 'bbbb'];
const algo = 'algo';
console.time(algo);
const res = wordBreak(s, dict);
console.timeEnd(algo);
console.log('res:', res);
