/**
 * Created by gxy on 2017/6/14.
 */
/****************************************************************
 254.Factor Combinations
 Numbers can be regarded as product of its factors. For example,
 8 = 2 x 2 x 2; = 2 x 4.
 Write a function that takes an integer n and return all possible combinations of its factors.
 Note:
 Each combination's factors must be sorted ascending, for example: The factors of 2 and 6 is [2, 6], not [6, 2].
 You may assume that n is always positive.
 Factors should be greater than 1 and less than n.
 Examples:
 input: 1
 output:
 []
 input:  37
 output:
 []
 input:  12
 output:
 [ [2, 6], [2, 2, 3], [3, 4] ]
 input:  32
 output:
 [ [2, 16], [2, 2, 8], [2, 2, 2, 4], [2, 2, 2, 2, 2], [2, 4, 4], [4, 8] ]
 ****************************************************************/
var factorCombinations = function (n) {
  var res=[],cur=n,tmp=[];
  factorHelp(cur,tmp,res);
  return res;
};

var factorHelp = function (cur, tmp, res) {
  var i = tmp.length === 0 ? 2 : tmp[tmp.length - 1];
  for (; i <= cur / i; i++) {
    if (cur % i == 0) {
      tmp.push(i);
      tmp.push(cur / i);
      res.push(tmp.slice(0));
      tmp.pop();
      factorHelp(cur / i, tmp, res);
      tmp.pop();
    }
  }
};

//test
var num=16;
var algo = "algo";
console.time(algo);
var res = factorCombinations(num);
console.timeEnd(algo);
console.log("res:",res);