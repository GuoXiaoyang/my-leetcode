/**
 * Created by gxy on 2017/6/9.
 */
/** **************************************************************
 151. Reverse Words in a String
 Given an input string, reverse the string word by word.

 For example,
 Given s = "the sky is blue",
 return "blue is sky the".

 Update (2015-02-12):
 For C programmers: Try to solve it in-place in O(1) space.
 ****************************************************************/
/**
 *
 * @param strArr
 * @return reverse of the word
 */
const reverse = function (strArr) {
  const arr = strArr.slice(0);
  for (let i = 0, j = strArr.length - 1; i < j; i += 1, j -= 1) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr.join('');
};


/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (str) {
  const trimStr = str.trim();
  const strArr = trimStr.split('');
  let res = '';
  let beg = 0;
  let end = 0;
  while (end < strArr.length) {
    if (strArr[end] === ' ') {
      const spaceStart = end;
      while (strArr[end] === ' ') {
        end += 1;
      }
      res = res + ' ' + reverse(strArr.slice(beg, spaceStart));
      beg = end;
    } else {
      end += 1;
    }
  }
  res = res + ' ' + reverse(strArr.slice(beg, end));
  return reverse(res.trim().split(''));
};

// test
const str = 'hi!';
const algo = 'algo';
console.time(algo);
const res = reverseWords(str);
console.timeEnd(algo);
console.log('res:', res);
