/**
 * Created by gxy on 2017/4/2.
 */

/****************************************************************
 47. Permutations II
 Given a collection of numbers that might contain duplicates, return all possible unique permutations.

 For example,
 [1,1,2] have the following unique permutations:
 [
 [1,1,2],
 [1,2,1],
 [2,1,1]
 ]
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//recursive solution
var permuteUnique1 = function(nums) {
  if(!nums) return nums;
  nums.sort(function(val1,val2) {
    return val1-val2;
  });
  var result=[],used=[],tmp=[];
  getAllUniquePermutations(nums,result,tmp,used);
  return result;
};

function getAllUniquePermutations(nums,result,tmp,used) {
  if(tmp.length===nums.length) {
    result.push(tmp.slice(0));
    return;
  }
  for(var i=0;i<nums.length;i++) {
    if(used[i]){
      continue;
    }
    if(i>0 && !used[i-1] && nums[i]===nums[i-1]) {
      continue;
    }
    tmp.push(nums[i]);
    used[i] = true;
    getAllUniquePermutations(nums,result,tmp,used);
    tmp.pop();
    used[i] = false;

  }
}
// loop solution
// Note: cannot get right result because of array.prototype.indexOf is not suitable here for objects
var permuteUnique2= function(nums) {
  if(!nums) return nums;
  nums.sort(function(val1,val2) {
    return val1-val2;
  });
  console.log("nums:",nums);
  var result=[],tmpResult=[],arr=[];
  var nums0 = [];
  nums0.push(nums[0]);
  result.push(nums0);
  for(var i=1;i<nums.length;i++) {
    tmpResult = [];
    for(var j=0;j<=i;j++) {
      for(var k=0;k<result.length;k++) {
        var t=result[k].slice(0);
        t.splice(j,0,nums[i]);
        if(tmpResult.indexOf(t) === -1) {

          tmpResult.push(t);
        }
      }
    }
    result = tmpResult;
  }
  return result;
};

//test

var arr = [2,2,1,1];
var algo="algo1";
console.time(algo);
var res1 = permuteUnique1(arr);
console.timeEnd(algo);
console.log("res1:",res1);

algo = "algo2";
console.time(algo);
var res2 = permuteUnique2(arr);
console.timeEnd(algo);
console.log("res2:",res2);