/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 463. Island Perimeter
 You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 Example:

 [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

 Answer: 16
 Explanation: The perimeter is the 16 yellow stripes in the image below:
****************************************************************/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var blocks=0,overlap=0;
  var row=grid.length,col=grid[0].length;
  for(var i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(grid[i][j]==1) {
        blocks++;
        if(i<row-1 && grid[i+1][j]==1) overlap++;
        if(j<col-1 && grid[i][j+1]==1) overlap++;
      }
    }
  }
  console.log("blocks,overlap:",blocks,overlap);
  return 4*blocks-2*overlap;
};

//test
var grid= [[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]];
var algo = "algo";
console.time(algo);
var res = islandPerimeter(grid);
console.timeEnd(algo);
console.log("res:",res);