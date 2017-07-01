/**
 * Created by gxy on 2017/6/16.
 */
/****************************************************************
 134. Gas Station
 There are N gas stations along a circular route, where the amount of gas at station i isgas[i].

 You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from
 station i to its next station (i+1).
 You begin the journey with an empty tank at one of the gas stations.

 Return the starting gas station's index if you can travel around the circuit once,
 otherwise return -1.

 Note:
 The solution is guaranteed to be unique.
 ****************************************************************/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  var totalGas = 0, totalCost = 0;
  var tmp = 0, start = 0;
  for (var i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tmp += gas[i] - cost[i];
    if (tmp < 0) {
      tmp = 0;
      start = i + 1;
    }
  }
  return totalGas >= totalCost ? start : -1;
};

//test
var gas = [1, 3, 5], cost = [0, 3, 6];
var algo = "algo";
console.time(algo);
var res = canCompleteCircuit(gas, cost);
console.timeEnd(algo);
console.log("res:", res);