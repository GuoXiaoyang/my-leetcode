/**
 * Created by gxy on 2017/4/18.
 */
/****************************************************************
 122. Best Time to Buy and Sell Stock II
 Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 (ie, buy one and sell one share of the stock multiple times).
 However, you may not engage in multiple transactions at the same time
 (ie, you must sell the stock before you buy again).
****************************************************************/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var max=0;
  for(var i=1;i<prices.length;i++) {
    max+=Math.max(0,prices[i]-prices[i-1]);
  }
  return max;
};

//test
var arr = [7, 1, 5, 3, 6, 4];
var algo = "algo";
console.time(algo);
var res = maxProfit(arr);
console.timeEnd(algo);
console.log("res:",res);