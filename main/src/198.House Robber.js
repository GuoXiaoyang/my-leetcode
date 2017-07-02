/**
 * Created by gxy on 2017/6/12.
 */
/** **************************************************************
 198. House Robber
 You are a professional robber planning to rob houses along a street. Each house has a
 certain amount of money stashed, the only constraint stopping you from robbing each of
 them is that adjacent houses have security system connected and it will automatically
 contact the police if two adjacent houses were broken into on the same night.

 Given a list of non-negative integers representing the amount of money of each house,
 determine the maximum amount of money you can rob tonight without alerting the police.
 ****************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  let pre = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i += 1) {
    const tmp = cur;
    cur = Math.max(pre + nums[i], cur);
    pre = tmp;
  }

  return cur;
};

// test
const arr = [3, 4, 2, 7, 9, 1];
const algo = 'algo';
console.time(algo);
const res = rob(arr);
console.timeEnd(algo);
console.log('res:', res);

