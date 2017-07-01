import BinaryTree from '../modules/BinaryTree';

describe('BinaryTree Method', () => {
  let bt;
  beforeEach(() => {
    const arr = [1, 2, '#', 3, 4, 5, '#', 6, 7, '#', 8, 9];
    bt = new BinaryTree(arr);
  });

  it('BreadFirst Traverse from left to right should be right', () => {
    expect(bt.breadFirstLTR()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('BreadFirst Traverse from right to left should be right', () => {
    expect(bt.breadFirstRTL()).toEqual([1, 2, 4, 3, 7, 6, 5, 9, 8]);
  });
  it('PreOrder Traverse should be right', () => {
    expect(bt.preOrder()).toEqual([1, 2, 3, 5, 8, 4, 6, 9, 7]);
  });
  it('InOrder Traverse should be right', () => {
    expect(bt.inOrder()).toEqual([5, 8, 3, 2, 9, 6, 4, 7, 1]);
  });
  it('PostOrder Traverse should be right', () => {
    expect(bt.postOrder()).toEqual([8, 5, 3, 9, 6, 7, 4, 2, 1]);
  });
});
