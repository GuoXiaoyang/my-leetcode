/**
 * Created by gxy on 2017/3/30.
 */

/****************************************************************
 40. Combination Sum II
 Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 Each number in C may only be used once in the combination.

 Note:
 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 A solution set is:
 [
 [1, 7],
 [1, 2, 5],
 [2, 6],
 [1, 1, 6]
 ]
****************************************************************/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort(function compare(val1,val2) {
    return val1-val2;
  });
  console.log("candidates:", candidates);
  var res=[],tmp=[],start=0;
  combine(candidates,start,res,tmp,target);
  console.log("res:", res);
  return res;
};

function combine(candidates,start,res,tmp,target) {
  if(target == 0) {
    res.push(tmp.slice(0));
  }
  for(var i=start;i<candidates.length && candidates[i]<=target;i++) {
    if(i>start && candidates[i] == candidates[i-1]) continue;
    tmp.push(candidates[i]);
    combine(candidates,i+1,res,tmp,target-candidates[i]);
    tmp.pop();
  }

}

//test
var arr=[10, 1, 2, 7, 6, 1, 5],target=8;
var algo1 = "algo1";
console.time(algo1);
var res = combinationSum2(arr,target);
console.timeEnd(algo1);
console.log("res:",res);

