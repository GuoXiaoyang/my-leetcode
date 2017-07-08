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
 */
const wordBreak = function (s, wordDict) {
  let copyStr = s;
  for (let i = 0; i < wordDict.length; i += 1) {
    while (copyStr.indexOf(wordDict[i]) !== -1) {
      const index = copyStr.indexOf(wordDict[i]);
      copyStr = copyStr.substring(0, index) + copyStr.substring(index + wordDict[i].length);
    }
  }
  return copyStr.length === 0;
};

// test
const s = 'bb';
const dict = ['a', 'b', 'bbb', 'bbbb'];
const algo = 'algo';
console.time(algo);
const res = wordBreak(s, dict);
console.timeEnd(algo);
console.log('res:', res);
