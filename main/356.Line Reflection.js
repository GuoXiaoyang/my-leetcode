/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 356.Line Reflection
 Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given set of points.
 Example 1:
 Given points = [1,1],[-1,1], return true.
 Example 2:
 Given points = [1,1],[-1,-1], return false.
****************************************************************/
var isReflected = function (points) {
  points.sort(function (val1,val2) {
    return val1[0]-val2[0];
  });
  var len=points.length;
  var min=points[0][0],max=points[len-1][0];
  var pointsCopy=points.map(function (item,index,array) {
    return [min+max-item[0],item[1]];
  });
  pointsCopy.sort(function (val1,val2) {
    return val1[0]-val2[0];
  });
  for(var i=0;i<len;i++) {
    if(points[i][0]!=pointsCopy[i][0] || points[i][1]!=pointsCopy[i][1]) return false;
  }
  return true;
};


//test
var points = [[1,1],[-1,1]];
var algo = "algo";
console.time(algo);
var res = isReflected(points);
console.timeEnd(algo);
console.log("res:",res);