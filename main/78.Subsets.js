/**
 * Created by gxy on 2017/4/13.
 */
/****************************************************************
 * 78. Subsets
 Given a set of distinct integers, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]
****************************************************************/

var subsets = function (nums) {
  var results=[],tmp=[];
  subsetHelp(results,0,tmp,nums);
  return results;
  
};
function subsetHelp(results,start,tmp,nums) {
  results.push(tmp.slice(0));
  for(var i=start;i<nums.length;i++) {
    tmp.push(nums[i]);
    subsetHelp(results,i+1,tmp,nums);
    tmp.pop();
  }
}

//iteration method
var subsets2 = function (nums) {
  var results=[];
  results.push([]);
  for(var i=0;i<nums.length;i++) {
    var len=results.length;
    for(var j=0;j<len;j++) {
      var tmp=results[j].slice(0)
      console.log("results:",results);
      tmp.push(nums[i]);
      results.push(tmp);
      console.log("results:",results);
    }
    console.log("results:",results);
  }
  return results;
};

//test
var nums = [1,2,3];
var algo = "algo";
console.time(algo);
var res = subsets(nums);
console.timeEnd(algo);
console.log("res:",res);

var algo = "algo2";
console.time(algo);
var res2 = subsets2(nums);
console.timeEnd(algo);
console.log("res2:",res2);