/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 364.Nested List Weight Sum II
 Given a nested list of integers, return the sum of all integers in the list weighted
 by their depth.

 Each element is either an integer, or a list -- whose elements may also be integers
 or other lists.

 Different from the previous question where weight is increasing from root to leaf,
 now the weight is defined from bottom up. i.e., the leaf level integers have weight 1,
 and the root level integers have the largest weight.

 Example 1:
 Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)

 Example 2:
 Given the list [1,[4,[6]]], return 17. (one 1 at depth 3, one 4 at depth 2,
 and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)
 ****************************************************************/
var weightedSum = function (list) {
  var res=0,tmpSum=0;
  var l=list.slice(0);
  while(l.length!==0) {
    var tmp=[];
    for(var i=0;i<l.length;i++) {
      if(typeof l[i] == 'number') {
        tmpSum+=l[i];
      } else {
        for(var k=0;k<l[i].length;k++) {
          if(typeof l[i][k] == 'number') {
            tmp.push(l[i][k]);
          } else {
            tmp.push(l[i][k].slice(0));
          }
        }
      }
    }
    res+=tmpSum;
    l=tmp.slice(0);
  }
  return res;
};

//test
var list = [1,[4,[6]]];
var algo = "algo";
console.time(algo);
var res = weightedSum(list);
console.timeEnd(algo);
console.log("res:",res);