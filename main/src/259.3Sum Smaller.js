/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
 259.3Sum Smaller
 3Sum Smaller
 Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 that satisfy the condition
 nums[i] + nums[j] + nums[k] <target.
 For example, given nums = [-2, 0, 1, 3], and target = 2.
 Return 2. Because there are two triplets which sums are less than 2:
 [-2, 0, 1] [-2, 0, 3]
 Follow up:
 Could you solve it in O(n2) runtime?
****************************************************************/

var threeSumSmaller = function (nums, target) {
  var len=nums.length;
  var num=0,start=0,tmp=[],res=[];
  nums.sort(function (val1,val2) {
    return val1-val2;
  });
  threeSumSmallerHelper(nums,tmp,res,start,target);
  return res.length;
};

function threeSumSmallerHelper(nums,tmp,res,start,target) {
  if(tmp.length==3) {
    if(target>0) {
      res.push(tmp.slice(0));
    }
    return;
  }
  for(var i=start;i<nums.length;i++) {
    tmp.push(nums[i]);
    threeSumSmallerHelper(nums,tmp,res,i+1,target-nums[i]);
    tmp.pop();
  }
}

var threeSumSmaller2 = function (nums,target) {
  var left,right;
  var count=0;
  for(var i=0;i<nums.length-2;i++) {
    left=i+1;
    right=nums.length-1;
    while(left<right) {
      if(nums[i]+nums[left]+nums[right]<target) {
        count+=right-left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

//test
var nums = [-2, 0, 1, 3];
var target=2;
var algo = "algo";
console.time(algo);
var res = threeSumSmaller2(nums,target);
console.timeEnd(algo);
console.log("res:",res);