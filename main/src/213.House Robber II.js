/**
 * Created by gxy on 2017/6/12.
 */
/** **************************************************************
 213. House Robber II
 Note: This is an extension of House Robber.

 After robbing those houses on that street, the thief has found himself a new place for
 his thievery so that he will not get too much attention. This time, all houses at this
 place are arranged in a circle. That means the first house is the neighbor of the last
 one. Meanwhile, the security system for these houses remain the same as for those in the
 previous street.

 Given a list of non-negative integers representing the amount of money of each house,
 determine the maximum amount of money you can rob tonight without alerting the police.
 ****************************************************************/
/**
 * @param {number[]} nums
 * @param {number} beg
 * @param {number} end
 * @return {number}
 */

const robWithoutCircle = function (nums, beg, end) {
  let pre = 0;
  let cur = 0;
  for (let i = beg; i <= end; i += 1) {
    const tmp = cur;
    cur = Math.max(pre + nums[i], cur);
    pre = tmp;
  }
  return cur;
};

const rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return Math.max(robWithoutCircle(nums, 0, nums.length - 2),
    robWithoutCircle(nums, 1, nums.length - 1));
};


// test
const arr = [3, 4, 2, 7, 9, 1];
const algo = 'algo';
console.time(algo);
const res = rob(arr);
console.timeEnd(algo);
console.log('res:', res);
