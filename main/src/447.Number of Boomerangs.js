/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 447. Number of Boomerangs
 Given n points in the plane that are all pairwise distinct,
 a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j
 equals the distance between i and k (the order of the tuple matters).

 Find the number of boomerangs. You may assume that n will be at most 500 and coordinates
 of points are all in the range [-10000, 10000] (inclusive).

 Example:
 Input:
 [[0,0],[1,0],[2,0]]

 Output:
 2

 Explanation:
 The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
****************************************************************/
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var res=0,map,dist;
  for(var i=0;i<points.length;i++) {
    map={};
    for(var j=0;j<points.length;j++) {
      if(j==i) continue;
      dist=distance(points[i],points[j]);
      map[dist]=map[dist]==undefined?1:map[dist]+1;
    }
    for(var item in map) {
      if(map[item]>1) res+=map[item]*(map[item]-1);
    }
  }
  return res;
};

function distance(point1,point2) {
  return Math.sqrt(Math.pow(point1[0]-point2[0],2)+Math.pow(point1[1]-point2[1],2));
}

//test
var points= [[0,0],[1,0],[2,0]];
var algo = "algo";
console.time(algo);
var res = numberOfBoomerangs(points);
console.timeEnd(algo);
console.log("res:",res);