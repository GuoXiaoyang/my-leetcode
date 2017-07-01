/**
 * Created by gxy on 2017/5/1.
 */
/****************************************************************
531.Lonely Pixel I
 Given a picture consisting of black and white pixels, find the number of black lonely pixels.
 The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
 A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.
 Example:
 Input: ['W', 'W', 'B'], ['W', 'B', 'W'], ['B', 'W', 'W'] Output: 3
 Explanation: All the three 'B's are black lonely pixels.
 Note:
 The range of width and height of the input 2D array is [1,500].
****************************************************************/
var findLonelyPixels = function (pic) {
  var res=0,lonely=1;
  var row=pic.length, col=pic[0].length;
  for(var i=0;i<row;i++) {
    for(var j=0;j<col;j++) {
      if(pic[i][j]=='B') {
        lonely = lonely && (i-1==-1?1:pic[i-1][j]=='W');
        lonely = lonely && (i+1==row?1:pic[i+1][j]=='W');
        lonely = lonely && (j-1==-1?1:pic[i][j-1]=='W');
        lonely = lonely && (j+1==col?1:pic[i][j+1]=='W');
        if(lonely) res++;
      }
    }
  }

  return res;
};

//test
var pic = ["WWB","WBW","BWW"];
var algo = "algo";
console.time(algo);
var res = findLonelyPixels(pic);
console.timeEnd(algo);
console.log("res:",res);