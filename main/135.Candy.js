/**
 * Created by gxy on 2017/6/16.
 */
/****************************************************************
 135. Candy
 There are N children standing in a line. Each child is assigned a rating value.

 You are giving candies to these children subjected to the following requirements:

 Each child must have at least one candy.
 Children with a higher rating get more candies than their neighbors.
 What is the minimum candies you must give?
 ****************************************************************/
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  var len = ratings.length;
  var candies = new Array(len).fill(1);
  for (var i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
    }
  }
  return candies.reduce(function (val1, val2) {
    return val1 + val2;
  });
};

//test
var arr = [3, 1, 2, 5, 6, 4, 3, 2];
var algo = "algo";
console.time(algo);
var res = candy(arr);
console.timeEnd(algo);
console.log("res:", res);