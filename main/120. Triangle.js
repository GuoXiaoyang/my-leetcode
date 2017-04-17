/**
 * Created by gxy on 2017/4/17.
 */
/****************************************************************
 120. Triangle
 Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

 For example, given the following triangle
 [
 [2],
 [3,4],
 [6,5,7],
 [4,1,8,3]
 ]
 The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 Note:
 Bonus point if you are able to do this using only O(n) extra space,
 where n is the total number of rows in the triangle.
****************************************************************/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if(!triangle.length) return 0;
  var level=triangle.length;
  var paths=new Array(level).fill(0);
  var i=0,j=0;
  for(;i<triangle[level-1].length;i++) {
    paths[i]=triangle[level-1][i];
  }
  for(i=level-2;i>=0;i--) {
    for(j=0;j<=i;j++) {
      paths[j]=Math.min(paths[j],paths[j+1])+triangle[i][j];
    }
  }
  return paths[0];
};

//test
var arr = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]];
var algo = "algo";
console.time(algo);
var res = minimumTotal(arr);
console.timeEnd(algo);
console.log("res:",res);