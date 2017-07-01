/**
 * Created by gxy on 2017/4/17.
 */
/****************************************************************
 119. Pascal's Triangle II
 Given an index k, return the kth row of the Pascal's triangle.

 For example, given k = 3,
 Return [1,3,3,1].

 Note:
 Could you optimize your algorithm to use only O(k) extra space?
****************************************************************/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var tmp=new Array(rowIndex+1).fill(0);
  var i=0,j=0;
  tmp[0]=1;
  for(i=1;i<rowIndex+1;i++) {
    for(j=i;j>0;j--) {
      tmp[j]+=tmp[j-1];
    }
  }
  return tmp;
};


//test
var num = 3;
var algo = "algo";
console.time(algo);
var res = getRow(num);
console.timeEnd(algo);
console.log("res:",res);