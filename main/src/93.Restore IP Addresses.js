/**
 * Created by gxy on 2017/6/9.
 */
/** **************************************************************
 93. Restore IP Addresses
 Given a string containing only digits, restore it by returning all possible valid IP
 address combinations.

 For example:
 Given "25525511135",

 return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 ****************************************************************/

const isValid = function (s) {
  if (s === undefined) return false;
  if (s.length > 1 && s[0] === '0') return false;
  if (Number.parseInt(s, 10) > 255) return false;
  return true;
};

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const res = [];
  const len = s.length;
  if (len < 3) return res;
  if (len > 12) return res;
  for (let i = 1; i <= 3; i += 1) {
    const first = i < len ? s.substring(0, i) : undefined;
    for (let j = i + 1; j <= i + 3; j += 1) {
      const second = (i < len && j < len) ? s.substring(i, j) : undefined;
      for (let k = j + 1; k <= j + 3; k += 1) {
        const third = (i < len && j < len && k < len) ? s.substring(j, k) : undefined;
        const fourth = (i < len && j < len && k < len) ? s.substring(k) : undefined;
        if (isValid(first) && isValid(second) && isValid(third) && isValid(fourth)) {
          const valid = `${first}.${second}.${third}.${fourth}`;
          res.push(valid);
        }
      }
    }
  }
  return res;
};

// test
const str = '25525511135';
const algo = 'algo';
console.time(algo);
const res = restoreIpAddresses(str);
console.timeEnd(algo);
console.log('res:', res);
