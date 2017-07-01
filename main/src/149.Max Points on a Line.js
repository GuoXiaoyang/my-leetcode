/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 149. Max Points on a Line
 Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
****************************************************************/
/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if(!points) return 0;
  var gradient,slope,res=0,overlap,max;
  for(var i=0;i<points.length;i++) {
    gradient={};
    overlap=0;
    max=0;
    for(var j=0;j<points.length;j++) {
      if(j==i) continue;
      if(points[i].x!==points[j].x) {
        slope = (points[i].y-points[j].y)/(points[i].x-points[j].x);
        gradient[slope] = gradient[slope]==undefined?1:gradient[slope]+1;
        max=Math.max(max,gradient[slope]);
      } else if(points[i].x==points[j].x &&points[i].y!=points[j].y){
        gradient.infinite = gradient.infinite==undefined?1:gradient.infinite+1;
        max=Math.max(max,gradient.infinite);
      } else {
        overlap++;
      }
    }
    max=max+overlap+1;
    res=Math.max(res,max);
  }
  return res;
};

function Point(x, y) {
  this.x = x;
  this.y = y;
}

//test
var points = [],point;
for(var i=2;i<6;i++) {
  point = new Point(parseInt(i/2),parseInt(i/2));
  points.push(point);
}
var algo = "algo";
console.time(algo);
var res = maxPoints(points);
console.timeEnd(algo);
console.log("res:",res);