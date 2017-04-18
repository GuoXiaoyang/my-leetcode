/**
 * Created by gxy on 2017/4/18.
 */
/****************************************************************
 121. Best Time to Buy and Sell Stock
 Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 Example 1:
 Input: [7, 1, 5, 3, 6, 4]
 Output: 5

 max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 Example 2:
 Input: [7, 6, 4, 3, 1]
 Output: 0

 In this case, no transaction is done, i.e. max profit = 0.
****************************************************************/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length<=1) return 0;
  var max=0,minPrice=prices[0];
  for(var i=1;i<prices.length;i++) {
    minPrice = Math.min(prices[i-1],minPrice);
    max = Math.max(max,prices[i]-minPrice);
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