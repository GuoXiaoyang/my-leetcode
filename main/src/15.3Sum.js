/**
 * Created by gxy on 2017/3/23.
 */
/*******************************************************************
 15. 3Sum
 Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 Find all unique triplets in the array which gives the sum of zero.
 Note: The solution set must not contain duplicate triplets.
 For example, given array S = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 *******************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function compare(num1,num2) {
        return num1-num2;
    });
    var start=0,end=0;
    var res=[];
    for(var i=0;i<nums.length-2;i++) {
        if(i===0 || (i>0 && nums[i]!=nums[i-1])) {
            start=i+1,end=nums.length-1;

            while(start<end){
                if(nums[start]+nums[end]+nums[i] < 0) {
                    start++
                }else if(nums[start]+nums[end]+nums[i] > 0) {
                    end--;
                }else {
                    res.push([nums[i],nums[start],nums[end]]);
                    while(nums[start]==nums[start+1]) {
                        start++;
                    }
                    while(nums[end]==nums[end-1]) {
                        end--;
                    }
                    start++;
                    end--;
                }
            }
        }


    }
    return res;
};


//test
var arr=[-1, 0, 1, 2, -1, -4];
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=threeSum(arr);
console.timeEnd(timeLog1);
console.log("res:", res);