/**
 * Created by gxy on 2017/8/12.
 */
/** **************************************************************
 题目描述：
 小易非常喜欢拥有以下性质的数列：
 1、数列的长度为n
 2、数列中的每个数都在1到k之间(包括1和k)
 3、对于位置相邻的两个数A和B(A在B前)，都满足（A<=B)或(A mod B != 0)（满足其一即可）
 例如，当n=4,k=7
 那么{1,7,7,2}，它的长度是4，所有数字也在1到7范围内，并且满足第三条性质，所以小易是喜欢这个数列的
 但是小易不喜欢{4,4,4,2}这个数列。小易给出n和k，希望你能帮他求出有多少个是他会喜欢的数列。

 输入描述：
 输入包括两个整数n和k(1 =< n <= 10, 1 =< k <= 10^5)
 输出描述：
 输出一个整数，即满足要求的数列个数，因为答案可能很大，输出对1,000,000,007取模的结果。
 示例：
 2 2
 输出
 3

 时间限制：1s
 空间限制: 32768K

 ****************************************************************/
/**
 *
 * @param {number} n
 * @param {number} k
 * @return {number} value
 */
const numOfSeries = function (n, k) {
  // if(k===1) return 1;
  // if(n===1) return k;
  // get factors of nums <= k
  const factors = [[]];
  for (let i = 2; i <= k; i += 1) {
    factors[i - 1] = getFactor(i);
  }
  // elements with [factor[i][j],n-1]
  let nums = new Array(k).fill(1);
  // nums = nums.map((v, i) => factors[i].length);
  // f(1,k)
  let sumNum = k;
  for (let i = 1; i < n; i += 1) {
    // get f(i,k)
    // let tmpNums = new Array(k).fill(sumNum);
    let tmpNums;
    if(nums.every(v => v > 1000000007)) {
      nums = nums.map(v => v%1000000007);
      tmpNums = new Array(k).fill(sumNum%1000000007);
    } else {
      tmpNums = new Array(k).fill(sumNum);
    }
    for (let j = 1; j < k; j += 1) {
      // get w(factor(k),i)
      for (let l = 0; l < factors[j].length; l += 1) {

        tmpNums[j] -= nums[factors[j][l]-1];
      }
    }
    sumNum = tmpNums.reduce((v1, v2) => v1 + v2);
    nums = tmpNums.slice();
  }
  return sumNum%1000000007;
};

function getFactor(num) {
  const factors = [1];
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}


// test
const n = 5;
const k = 10000;
console.time('time');
const res = numOfSeries(n, k);
console.timeEnd('time');
console.log('res:', res);

// log
// n:3,k:3
// ans: 15
// times: 5.827ms

// n:5,k:1000
// ans: 104446767
// times: 69.312ms


