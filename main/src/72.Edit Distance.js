/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 72. Edit Distance
 Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

 You have the following 3 operations permitted on a word:

 a) Insert a character
 b) Delete a character
 c) Replace a character
 **********************************************************************************************/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//dynamic programming
var minDistance = function(word1, word2) {
  var m=word1.length, n=word2.length;
  var dists = [];
  for(var i=0;i<=m;i++) {
    var tmp=new Array(n+1).fill(0);
    dists.push(tmp);
  }
  for(i=1;i<=n;i++) {
    dists[0][i]=i;
  }
  for(i=1;i<=m;i++) {
    dists[i][0]=i;
  }

  for(i=1;i<=m;i++) {
    for(var j=1;j<=n;j++) {
      if(word1[i-1]==word2[j-1]) {
        dists[i][j] = dists[i-1][j-1];
      } else {
        dists[i][j] = Math.min(dists[i-1][j-1],dists[i-1][j],dists[i][j-1])+1;
      }

    }
  }
  return dists[m][n];
};


//test
var word1="abc",word2="def";
var algo1 = "algo1";
console.time(algo1);
var res = minDistance(word1,word2);
console.timeEnd(algo1);
console.log("res:",res);
