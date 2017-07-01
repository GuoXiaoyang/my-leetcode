/**
 * Created by gxy on 2017/3/23.
 */

/*******************************************************************
 18. 4Sum
 Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 Find all unique quadruplets in the array which gives the sum of target.
 Note: The solution set must not contain duplicate quadruplets.

 For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 A solution set is:
 [
 [-1,  0, 0, 1],
 [-2, -1, 1, 2],
 [-2,  0, 0, 2]
 ]
 *******************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var res=[];
    if(nums.length <4) return res;
    nums.sort(function compare(num1,num2){
        return num1-num2;
    });
    console.log("nums:", nums);

    var i,j,start,end,sum;
    for(i=0;i<nums.length-3;i++) {
        while(i!==0 && nums[i]==nums[i-1]) {i++;}
        for(j=i+1;j<nums.length-2;j++) {
            while(j!=i+1 && nums[j]==nums[j-1]) {j++;}
            start=j+1,end=nums.length-1;
            while(start<end) {
                // console.log("i,j,start,end:", i,j,start,end);
                // console.log("nums[i]+nums[j]+nums[start]+nums[end]:", nums[i],nums[j],nums[start],nums[end]);
                sum=nums[i]+nums[j]+nums[start]+nums[end];
                if(sum<target) {
                    start++;
                } else if(sum>target) {
                    end--;
                } else {
                    res.push([nums[i],nums[j],nums[start],nums[end]]);
                    while(nums[start]==nums[start+1]) start++;
                    while(nums[end]==nums[end-1]) end--;
                    start++,end--;
                }
            }

        }
    }
    return res;
};

//test
var nums=[-1,0,1,2,-1,-4];
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=fourSum(nums,-1);
console.timeEnd(timeLog1);
console.log("res:", res);