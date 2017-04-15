/**
 * Created by gxy on 2017/4/14.
 */
/****************************************************************
 84. Largest Rectangle in Histogram
 Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
 find the area of largest rectangle in the histogram.
 For example,
 Given heights = [2,1,5,6,2,3],
 return 10.
****************************************************************/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.push(-1);
  var stack=[],area=0,h,tmpArea;
  for(var i=0;i<heights.length;i++) {
    while(stack.length!==0 && heights[i]<heights[stack[stack.length-1]]) {
      h = heights[stack.pop()];
      if(stack.length===0) {
        tmpArea = h*i;
      } else {
        tmpArea = h*(i-stack[stack.length-1]-1);
      }
      area = Math.max(area,tmpArea);
    }
    stack.push(i);

  }
  return area;
};

//test
var heights = [2,1,5,6,2,3];
var algo = "algo";
console.time(algo);
var res = largestRectangleArea(heights);
console.timeEnd(algo);
console.log("res:",res);