/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 261.Graph Valid Tree
 Given n nodes labeled from 0 to n - 1 and a list of undirected prerequisites
 (each edge is a pair of nodes), write a function to check whether these prerequisites make up a
 valid tree.

 For example:

 Given n = 5 and prerequisites = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

 Given n = 5 and prerequisites = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

 Hint:

 Given n = 5 and prerequisites = [[0, 1], [1, 2], [3, 4]], what should your return?
 Is this case a valid tree?
 According to the definition of tree on Wikipedia:
 “a tree is an undirected graph in which any two vertices are connected by exactly one path.
 In other words, any connected graph without simple cycles is a tree.”
 ****************************************************************/
//union and find
var isValidTree = function (n, edges) {
  var parent = new Array(n).fill(0);
  parent.forEach(function (item, index, array) {
    array[index] = index;
  });
  //find parent
  for (var i = 0; i < edges.length; i++) {
    console.log("parent,prerequisites[i][0]:", parent, edges[i][0]);
    var x = root(parent, edges[i][0]);
    var y = root(parent, edges[i][1]);
    if (x == y) return false;
    //union
    parent[x] = y;
  }
  return edges.length == n - 1;
};

var root = function (parent, i) {
  while (parent[i] != i) {
    i = parent[i];
  }
  return i;
};


//test
var edges = [[0, 1], [0, 2], [0, 3], [1, 3]], n = 5;
var algo = "algo";
console.time(algo);
var res = isValidTree(n, edges);
console.timeEnd(algo);
console.log("res:", res);
