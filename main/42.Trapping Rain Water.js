/**
 * Created by gxy on 2017/3/30.
 */

/**********************************************************************************************
 42. Trapping Rain Water
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

 For example,
 Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 **********************************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var maxIndex=0,max=height[0],res=0;
  for(var i=1;i<height.length;i++) {
    if(height[i]>max) {
      maxIndex=i;
      max=height[i];
    }
  }

  var tmpMax=height[0];
  for(i=0;i<maxIndex;i++) {
    if(height[i]<tmpMax) {
      res+=tmpMax-height[i];
      console.log("res:", res);

    }
    if(height[i]>tmpMax) {
      tmpMax=height[i];
    }
  }
  tmpMax=height[height.length-1];
  for(i=height.length-1;i>maxIndex;i--) {

    if(height[i]<tmpMax) {
      res+=tmpMax-height[i];
      console.log("res:", res);
    }
    if(height[i]>tmpMax) tmpMax=height[i];
  }
  return res;
};

//test
var arr=[0,1,0,2,1,0,1,3,2,1,2,1];
var algo1 = "algo1";
console.time(algo1);
var res = trap(arr);
console.timeEnd(algo1);
console.log("res:",res);

