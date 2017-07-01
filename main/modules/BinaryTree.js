/**
 * Created by gxy on 2017/6/15.
 */


/**
 * TreeNode class
 * @constructor
 * @param {Number} val - value of the node
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const containNode = Symbol('containNode');
// const breadFirst = Symbol('breadFirst');
/**
 * BinaryTree class
 * @constructor init the BinaryTree
 * @param {TreeNode} root - the root of the BinaryTree
 * use array to construct the BinaryTree,'#' means null node
 * [1,2,3,4,'#',5] -> 1(2(4#)3(5))
 */
class BinaryTree {
  constructor(arr) {
    this.root = BinaryTree.fromArray(arr);
  }

  /**
   * print the BinaryTree in a tree-like way
   *
   */
  print() {
    BinaryTree.printBinaryTreeHelper(this.root, '', true);
  }

  contains(node) {
    return this._containNode(this.root, node);
  }


  /**
   *
   * @returns {Array}
   * breadFirst traverse from left to right
   */
  breadFirstLTR() {
    return this._breadFirst('left');
  }

  /**
   *
   * @returns {Array}
   * breadFirst traverse from right to left
   */
  breadFirstRTL() {
    return this._breadFirst('right');
  }

  preOrder() {
    function preOrderTraverse(root, res) {
      if (root === null) return;
      res.push(root.val);
      preOrderTraverse(root.left, res);
      preOrderTraverse(root.right, res);
    }

    const res = [];
    preOrderTraverse(this.root, res);
    return res;
  }

  inOrder() {
    function inOrderTraverse(root, res) {
      if (root === null) return;
      inOrderTraverse(root.left, res);
      res.push(root.val);
      inOrderTraverse(root.right, res);
    }

    const res = [];
    inOrderTraverse(this.root, res);
    return res;
  }

  postOrder() {
    function postOrderTraverse(root, res) {
      if (root === null) return;
      postOrderTraverse(root.left, res);
      postOrderTraverse(root.right, res);
      res.push(root.val);
    }

    const res = [];
    postOrderTraverse(this.root, res);
    return res;
  }

  static fromArray(arr) {
    if (!arr.length) return null;
    // use queue to store the uncreated node
    const queue = [];
    const root = new TreeNode(arr.shift());
    queue.push(root);
    while (queue.length) {
      const leftValue = arr.shift();
      const rightValue = arr.shift();
      const p = queue.shift();
      if (leftValue && rightValue && leftValue !== '#' && rightValue !== '#') {
        p.left = new TreeNode(leftValue);
        p.right = new TreeNode(rightValue);
        queue.push(p.left);
        queue.push(p.right);
      } else if ((leftValue === undefined || leftValue === '#') && rightValue && rightValue !== '#') {
        p.right = new TreeNode(rightValue);
        queue.push(p.right);
      } else if (leftValue && leftValue !== '#' && (rightValue === '#' || rightValue === undefined)) {
        p.left = new TreeNode(leftValue);
        queue.push(p.left);
      }
    }
    return root;
  }

  static printBinaryTreeHelper(root, prefix, isTail) {
    console.log(prefix, isTail ? '└──' : '├──', root.val);
    if (root.left && root.right) {
      this.printBinaryTreeHelper(root.left, prefix + (isTail ? '    ' : ' |  '), false);
      this.printBinaryTreeHelper(root.right, prefix + (isTail ? '    ' : ' |  '), true);
    } else if (root.left) {
      this.printBinaryTreeHelper(root.left, prefix + (isTail ? '    ' : ' |  '), true);
    } else if (root.right) {
      this.printBinaryTreeHelper(root.right, prefix + (isTail ? '    ' : ' |  '), true);
    }
  }

  _containNode(root, node) {
    if (node === null || root === null) return false;
    const val = typeof node === 'number' ? node : node.val;
    if (root.val === val) return true;
    return this._containNode(this.root.left, node) || this._containNode(this.root.right, node);
  }

  /**
   * offer a BreadFirst way to traverse the BinaryTree
   * @return {Array}
   * @param {String} [direction='left'] - the traverse direction
   *
   */
  _breadFirst(direction = 'left') {
    if (this.root === null) return [];
    const root = this.root;
    const dirLeft = direction === 'left';
    const dirRight = direction === 'right';
    const res = [];
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      res.push(node.val);
      if (dirLeft) {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      if (dirRight) {
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);
      }
    }
    return res;
  }
}


export default BinaryTree;

