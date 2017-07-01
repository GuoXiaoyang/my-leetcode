/**
 * Created by gxy on 2017/3/30.
 */

/****************************************************************
 39. Combination Sum
 Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.

 Note:
 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 For example, given candidate set [2, 3, 6, 7] and target 7,
 A solution set is:
 [
 [7],
 [2, 2, 3]
 ]
****************************************************************/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var res=[],tmp=[],start=0;
  candidates.sort(function compare(val1,val2) {
    return val1-val2;
  });
  console.log("candidates:",candidates);
  combine(candidates,start,res,tmp,target);
  return res;
};

function combine(candidates,start,res,tmp,target) {
  if(target === 0) {
    console.log("res,tmp:",res,tmp);
    res.push(tmp.slice(0));
    console.log("res:",res);
    return;
  }
  for(var i = start;i<candidates.length && target>=candidates[i];i++) {
    tmp.push(candidates[i]);
    console.log("i,tmp:",i,tmp);
    combine(candidates,i,res,tmp,target-candidates[i]);
    tmp.pop();
    console.log("tmp:",tmp);
  }
}

//test
var arr = [2,3,6,7], target = 7;
var algo = "algo";
console.time(algo);
var res = combinationSum(arr,target);
console.timeEnd(algo);
console.log("res:",res);