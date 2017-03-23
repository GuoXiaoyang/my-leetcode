/**
 * Created by gxy on 2017/3/23.
 */
/****************************************************************************
 16. 3Sum Closest
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 ****************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length<3) return null;
    nums.sort(function compare(num1,num2) {
        return num1-num2;
    });
    var maxclose = nums[0]+nums[1]+nums[nums.length-1];
    var start=0,end=0;
    for(var i=0;i<nums.length-2;i++) {
        start=i+1,end=nums.length-1;
        while(start<end) {
            var sum=nums[i]+nums[start]+nums[end];
            if(sum<target) start++;
            if(sum>target) end--;
            if((target-sum)===0) {
                maxclose=target;
                break;
            }
            if(Math.abs(target-sum) < Math.abs(target-maxclose)) {
                maxclose=sum;
            }
        }
    }
    return maxclose;

};

//test
var arr=[-1,2,1,-4];
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=threeSumClosest(arr,1);
console.timeEnd(timeLog1);
console.log("res:", res);
