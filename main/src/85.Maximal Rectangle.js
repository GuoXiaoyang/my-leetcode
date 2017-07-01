/**
 * Created by gxy on 2017/4/15.
 */
/****************************************************************
 85. Maximal Rectangle
 Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 For example, given the following matrix:

 1 0 1 0 0
 1 0 1 1 1
 1 1 1 1 1
 1 0 0 1 0
 Return 6.
****************************************************************/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if(matrix.length===0 || matrix[0].length===0) return 0;
  var area=0,tmpArea,nums=[];
  for(var j=0;j<matrix[0].length;j++) nums.push(parseInt(matrix[0][j]));
  tmpArea = maxHistogram(nums.slice(0));
  area = Math.max(area,tmpArea);
  console.log("nums:",nums);
  for(var i=1;i<matrix.length;i++) {
    for(j=0;j<matrix[0].length;j++) {
      if(matrix[i][j]==='0') {
        nums[j]=0;
      } else {
        nums[j]++;
      }
    }
    console.log("nums:",nums);
    tmpArea = maxHistogram(nums.slice(0));
    area = Math.max(area,tmpArea);
  }
  return area;
};

function maxHistogram(heights) {
  console.log("heights:",heights);
  heights.push(-1);
  var stack=[], area=0,tmpArea,h;
  for(var i=0;i<heights.length;i++) {
    while(stack.length !==0 && heights[i]<heights[stack[stack.length-1]]) {
      h = heights[stack.pop()];
      if(stack.length===0) {
        tmpArea=h*i;
      } else {
        tmpArea=h*(i-stack[stack.length-1]-1);
      }
      
      area=Math.max(area,tmpArea);
    }
    stack.push(i);
  }
  return area;

}

//test
var matrix = ["1"];
var  algo= "algo";
console.time(algo);
var res = maximalRectangle(matrix);
console.timeEnd(algo);
console.log("res:",res);