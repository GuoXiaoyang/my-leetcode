/**
 * Created by gxy on 2017/3/23.
 */
/***********************************************************************************
 11. Container With Most Water
 Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 Note: You may not slant the container and n is at least 2.

 Subscribe to see which companies asked this question.
 ***********************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0,j=height.length,temp=0,maxA=0;
    while(i<j) {
        if(height[i]<height[j]) {
            temp = height[i]*(j-i);
            i++;
        } else {
            temp = height[j]*(j-i);
            j--;
        }
        maxA = (maxA>temp)?maxA:temp;
    }
    return maxA;
};

//test
var arr=[4,5,1,2,3];
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=maxArea(arr);
console.timeEnd(timeLog1);
console.log("res:", res);