/**
 * Created by gxy on 2017/4/18.
 */

/****************************************************************
 123. Best Time to Buy and Sell Stock III
 Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit. You may complete at most two transactions.

 Note:
 You may not engage in multiple transactions at the same time
 (ie, you must sell the stock before you buy again).
****************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
  var hold1=-Number.MAX_VALUE,hold2=-Number.MAX_VALUE;
  var release1=0,release2=0;
  for(var i=0;i<prices.length;i++) {
    release2=Math.max(release2,hold2+prices[i]);
    hold2=Math.max(hold2,release1-prices[i]);
    release1=Math.max(release1,hold1+prices[i]);
    hold1=Math.max(hold1,-prices[i]);
  }
  return release2;

};




//test
var arr = [7, 1, 5, 3, 6, 4, 8] ;
var algo = "algo";
console.time(algo);
var res = maxProfit(arr);
console.timeEnd(algo);
console.log("res:",res);
