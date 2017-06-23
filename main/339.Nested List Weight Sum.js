/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 339.Nested List Weight Sum
 Given a nested list of integers, return the sum of all integers in the list weighted
 by their depth.

 Each element is either an integer, or a list -- whose elements may also be integers
 or other lists.

 Example 1:
 Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

 Example 2:
 Given the list [1,[4,[6]]], return 27. (one 1 at depth 1, one 4 at depth 2, and one
 6 at depth 3; 1 + 4*2 + 6*3 = 27)
 ****************************************************************/
var weightedSum = function (list) {
  var res=0;
  var depth=1,l=list.slice(0);
  while(l.length!==0) {
    var tmp=[];
    for(var i=0;i<l.length;i++) {
      if(typeof l[i] == 'number') {
        res+=depth*l[i];
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
    depth++;
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


