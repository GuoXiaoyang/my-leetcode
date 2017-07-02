/**
 * Created by gxy on 2017/7/2.
 */
/** **************************************************************
 337.House Robber III
 The thief has found himself a new place for his thievery again. There is only one entrance
 to this area, called the "root." Besides the root, each house has one and only one parent
 house. After a tour, the smart thief realized that "all houses in this place forms a binary
 tree". It will automatically contact the police if two directly-linked houses were broken
 into on the same night.

 Determine the maximum amount of money the thief can rob tonight without alerting the
 police.

 Example 1:
 3
 / \
 2   3
 \   \
 3   1
 Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 Example 2:
 3
 / \
 4   5
 / \   \
 1   3   1
 Maximum amount of money the thief can rob = 4 + 5 = 9.
 ****************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import BinaryTree from '../modules/BinaryTree';

/**
 * @param {TreeNode} root
 * @return {number}
 */
const robHelper = function (root) {
  if (root === null) return [0, 0];
  const left = robHelper(root.left);
  const right = robHelper(root.right);
  return [Math.max(...left) + Math.max(...right), root.val + left[0] + right[0]];
};

const rob = function (root) {
  if (root === null) return 0;
  const res = robHelper(root);
  return Math.max(...res);
};


// test
const bt = new BinaryTree([3, 2, 3, '#', 3, '#', 1]);
bt.print();
const algo = 'algo';
console.time(algo);
const res = rob(bt.root);
console.timeEnd(algo);
console.log('res:', res);
