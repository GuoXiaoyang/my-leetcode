/**
 * Created by gxy on 2017/6/12.
 */
/** **************************************************************
 140. Word Break II
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 add spaces in s to construct a sentence where each word is a valid dictionary word.
 You may assume the dictionary does not contain duplicate words.

 Return all such possible sentences.

 For example, given
 s = 'catsanddog',
 dict = ['cat', 'cats', 'and', 'sand', 'dog'].

 A solution is ['cats and dog', 'cat sand dog'].
 ****************************************************************/
// directly DFS: TLE
const wordBreakHelper = function (str, tmp, wordDict, res) {
  if (str.length === 0) {
    res.push(tmp.slice(0));
    return;
  }
  for (let i = 0; i < wordDict.length; i += 1) {
    if (str.startsWith(wordDict[i])) {
      tmp.push(wordDict[i]);
      wordBreakHelper(str.slice(wordDict[i].length), tmp, wordDict, res);
      tmp.pop();
    }
  }
};

// DFS with memory
const wordBreakHelper2 = function (str, map, wordDict) {
  if (map.get(str)) return map.get(str);
  const res = [];
  if (str.length === 0) {
    res.push('');
    map.set('', res);
    return res;
  }
  for (let i = 0; i < wordDict.length; i += 1) {
    if (str.startsWith(wordDict[i])) {
      const subList = wordBreakHelper2(str.substring(wordDict[i].length), map, wordDict);
      for (let j = 0; j < subList.length; j += 1) {
        res.push(wordDict[i] + (subList[j] === '' ? '' : ' ') + subList[j]);
      }
      map.set(str, res);
    }
  }
  return res;
};


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
  // const res = [];
  // wordBreakHelper(s, map, wordDict, res);
  // return res.map(item => item.join(' '));
  // const tmp = [];
  const map = new Map();
  return wordBreakHelper2(s, map, wordDict);
};

// test
const s = 'catsanddog';
const dict = ['cat', 'cats', 'and', 'sand', 'dog'];
const algo = 'algo';
console.time(algo);
const res = wordBreak(s, dict);
console.timeEnd(algo);
console.log('res:', res);
