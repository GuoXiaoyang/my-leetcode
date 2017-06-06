/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 347. Top K Frequent Elements
 Given a non-empty array of integers, return the k most frequent elements.

 For example,
 Given [1,1,1,2,2,3] and k = 2, return [1,2].

 Note:
 You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
****************************************************************/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var map={},cnts=new Array(nums.length+1);
  var res=[];
  for(var i=0;i<nums.length;i++) {
    map[nums[i]]=map[nums[i]]===undefined?1:map[nums[i]]+1;
  }
  for(var item in map) {
    if(!cnts[map[item]]) cnts[map[item]]=[];
    cnts[map[item]].push(parseInt(item));
  }
  console.log("cnts:",cnts);
  for(i=cnts.length;i>0 && k>0;i--) {
    if(cnts[i]!==undefined) {
      res=res.concat(cnts[i]);
      k-=cnts[i].length;
    }
  }
  return res;
};

//test
var arr = [1,1,1,2,2,3],k=2;
var algo = "algo";
console.time(algo);
var res = topKFrequent(arr,k);
console.timeEnd(algo);
console.log("res:",res);