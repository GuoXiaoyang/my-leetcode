/**
 * Created by gxy on 2017/6/16.
 */
/****************************************************************
 407. Trapping Rain Water II
 Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

 Note:
 Both m and n are less than 110. The height of each unit cell is greater than 0 and is less than 20,000.

 Example:

 Given the following 3x6 height map:
 [
 [1,4,3,1,3,2],
 [3,2,1,3,2,4],
 [2,3,3,2,3,1]
 ]

 Return 4.
 ****************************************************************/
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var Heap = require('./BinaryHeap');

var trapRainWater = function (heightMap) {
  if (!heightMap || heightMap.length < 1 || heightMap[0].length < 1) return 0;
  //build min heap with the four borders;
  var row = heightMap.length, col = heightMap[0].length;
  var used = [];
  for (i = 0; i < row; i++) {
    used.push(new Array(col).fill(false));
  }
  //heap element (i,j,height)
  var minHeap = new Heap(function (x) {
    return x[2];
  });
  for (var i = 0; i < row; i++) {
    minHeap.push([i, 0, heightMap[i][0]]);
    minHeap.push([i, col - 1, heightMap[i][col - 1]]);
    used[i][0] = used[i][col - 1] = true;
  }
  for (i = 1; i < col - 1; i++) {
    minHeap.push([0, i, heightMap[0][i]]);
    minHeap.push([row - 1, i, heightMap[row - 1][i]]);
    used[0][i] = used[row - 1][i] = true;
  }
  //iterate from border to center
  var res = 0, moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      var minHeight = minHeap.pop();
      for (var k = 0; k < moves.length; k++) {
        var x = minHeight[0] + moves[k][0], y = minHeight[1] + moves[k][1];
        if (x > -1 && x < row && y > -1 && y < col && !used[x][y]) {
          if (minHeight[2] > heightMap[x][y]) {
            res += minHeight[2] - heightMap[x][y];
            minHeap.push([x, y, minHeight[2]]);
          } else {
            minHeap.push([x, y, heightMap[x][y]]);
          }
          used[x][y] = true;
        }
      }
    }
  }
  return res;
};

//test
var heightMap = [
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1]
];
var algo = "algo";
console.time(algo);
var res = trapRainWater(heightMap);
console.timeEnd(algo);
console.log("res:", res);