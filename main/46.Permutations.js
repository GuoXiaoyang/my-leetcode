/**
 * Created by gxy on 2017/4/2.
 */

/****************************************************************
 46. Permutations
 Given a collection of distinct numbers, return all possible permutations.

 For example,
 [1,2,3] have the following permutations:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
****************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//recursive solution
var permute1 = function(nums) {
  if(!nums) return nums;
  var result=[],begin=0;
  getAllPermutations(nums,result,begin);
  return result;
};

function getAllPermutations(nums,result,begin) {
  if(begin>=nums.length) {
    result.push(nums.slice(0));
    return;
  }
  var tmp;
  for(var i=begin;i<nums.length;i++) {
    tmp=nums[i];
    nums[i] = nums[begin];
    nums[begin] = tmp;
    getAllPermutations(nums,result,begin+1);
    tmp=nums[i];
    nums[i] = nums[begin];
    nums[begin] = tmp;
  }
}

//loop solution
var permute2= function(nums) {
  if(!nums) return nums;
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
        tmpResult.push(t);
      }
    }
    result = tmpResult;
  }
  return result;
};

//test
var arr=[1,2,3];
var algo = "algo1";
console.time(algo);
var res1 = permute1(arr);
console.timeEnd(algo);
console.log("res1:",res1);

algo = "algo2";
console.time(algo);
var res2 = permute2(arr);
console.timeEnd(algo);
console.log("res2:",res2);