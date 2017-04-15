/**
 * Created by gxy on 2017/4/15.
 */
/****************************************************************
 90. Subsets II
 Given a collection of integers that might contain duplicates, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,2], a solution is:

 [
 [2],
 [1],
 [1,2,2],
 [2,2],
 [1,2],
 []
 ]
****************************************************************/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//iteration
var subsetsWithDup1 = function(nums) {
  nums.sort(function (val1,val2) {
    return val1-val2;
  });
  var res=[[]],i=0,len;
  while(i<nums.length){
    var counts=0;
    while(counts+i<nums.length && nums[i+counts]==nums[i]) counts++;
    len=res.length;
    for(var j=0;j<len;j++) {
      var tmp=res[j].slice(0);
      for(var k=0;k<counts;k++) {
        tmp.push(nums[i]);
        res.push(tmp.slice(0));
      }
    }
    i+=counts;
  }
  return res;
};

//recursive
var subsetsWithDup2 = function (nums) {
  nums.sort(function (val1,val2) {
    return val1-val2;
  });
  var res=[], start=0,tmp=[];
  subsetsWithDup2Help(res,tmp,start,nums);
  return res;

};

function subsetsWithDup2Help(res,tmp,start,nums) {
  res.push(tmp.slice(0));
  for(var i=start;i<nums.length;i++) {
    if(i==start || nums[i]!=nums[i-1]) {
      tmp.push(nums[i]);
      subsetsWithDup2Help(res,tmp,i+1,nums);
      tmp.pop();
    }
  }
}



//test
var arr = [4,4,4,1,4];
var algo = "algo";
console.time(algo);
var res = subsetsWithDup1(arr);
console.timeEnd(algo);
console.log("res:",res);

var algo = "algo22";
console.time(algo);
var res2 = subsetsWithDup2(arr);
console.timeEnd(algo);
console.log("res2:",res2);