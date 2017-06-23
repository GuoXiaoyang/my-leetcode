/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 332. Reconstruct Itinerary
 Given a list of airline tickets represented by pairs of departure and arrival
 airports [from, to], reconstruct the itinerary in order.
 All of the tickets belong to a man who departs from JFK. Thus, the itinerary
 must begin with JFK.

 Note:
 If there are multiple valid itineraries, you should return the itinerary that has
 the smallest lexical order when read as a single string. For example, the itinerary
 ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 All airports are represented by three capital letters (IATA code).
 You may assume all tickets form at least one valid itinerary.
 Example 1:
 tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
 Example 2:
 tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
 Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is
 larger in lexical order.
****************************************************************/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var PriorityQueue = require('./PriorityQueue');
var findItinerary = function (tickets) {
  var res = [], neighbors = {};
  for (var i = 0; i < tickets.length; i++) {
    if (neighbors[tickets[i][0]] == undefined) {
      neighbors[tickets[i][0]] = new PriorityQueue(function comparator(s1, s2) {
        return s1 > s2;
      });
    }
    neighbors[tickets[i][0]].push(tickets[i][1]);
  }
  var start = 'JFK';
  DFS(neighbors, res, start);
  return res;
};

var DFS = function (neighbors, res, start) {
  while (neighbors[start] !== undefined && neighbors[start].size() > 0) {
    var newStart = neighbors[start].pop();
    DFS(neighbors, res, newStart);

  }
  res.unshift(start);
};

//topological sort
//test
/*
var findItinerary = function(tickets) {
var inDegree={},neighbors={},nodesCount=0;
for(var i=0;i<tickets.length;i++) {
  if(inDegree[tickets[i][0]]==undefined) {
    inDegree[tickets[i][0]]=0;
    nodesCount++;
  }
  if(inDegree[tickets[i][1]]==undefined) {
    inDegree[tickets[i][1]]=0;
    nodesCount++;
  }
  inDegree[tickets[i][1]]++;
  if(neighbors[tickets[i][0]]==undefined) neighbors[tickets[i][0]]=[];
  neighbors[tickets[i][0]].push(tickets[i][1]);
}
var queue=[],res=[];
for(var item in inDegree) {
  if(inDegree[item]==0) queue.push(item);
}
while(queue.length>0) {
  queue.sort();
  var x=queue.shift();
  res.push(x);
  for(var item in neighbors[x]) {
    if(--inDegree[item]==0) queue.push(item);
  }
}
return res.length==nodesCount?res:-1;
};
*/
var seqs = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];//
// [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
var algo = "algo";
console.time(algo);
var res = findItinerary(tickets);
console.timeEnd(algo);
console.log("res:",res);