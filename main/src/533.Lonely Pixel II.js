/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
 533.Lonely Pixel II
 Given a picture consisting of black and white pixels, and a positive integer N, find the number of
 black pixels located at some specific row R and column C that align with all the following rules:
 Row R and column C both contain exactly N black pixels.
 For all rows that have a black pixel at column C, they should be exactly the same as row R
 The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
 Example:
 Input:
 ['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'W', 'B', 'W', 'B', 'W']
 N = 3
 Output: 6
 Explanation:
 All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).
 0 1 2 3 4 5 column index 0 ['W', 'B', 'W', 'B', 'B', 'W'], 1 ['W', 'B', 'W', 'B', 'B', 'W'], 2 ['W', 'B', 'W', 'B', 'B', 'W'], 3 ['W', 'W', 'B', 'W', 'B', 'W'] row index
 Take 'B' at row R = 0 and column C = 1 as an example:
 Rule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels.
 Rule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.
 Note:
 The range of width and height of the input 2D array is [1,200].
****************************************************************/
var findLonelyPixel2 = function (pic,N) {
  var row = pic.length, col=pic[0].length;
  var rowCnts = new Array(row).fill(0);
  var colCnts = new Array(col).fill(0);
  var cnt=0;
  for(var i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(pic[i][j]=='B') {
        rowCnts[i]++;
        colCnts[j]++;
      }
    }
  }
  for(i=0;i<row;i++) {
    for(j=0;j<col;j++) {
      if(rowCnts[i]==N && colCnts[j]==N) {
        for(var k=0;k<row;k++) {
          if(pic[k][j]=='B') {
            if(pic[k]!=pic[i]){
              break;
            }
          }
        }
        cnt+=(k==row)?colCnts[j]:0;
        colCnts[j]=0;
      }
    }
  }
  return cnt;
};

//test
var pic = ["WBWBBW","WBWBBW","WBWBBW","WWBWBW"],N=3;
var algo = "algo";
console.time(algo);
var res = findLonelyPixel2(pic,N);
console.timeEnd(algo);
console.log("res:",res);