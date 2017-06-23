/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 323.Number of Connected Components in an Undirected Graph
 Given n nodes labeled from 0 to n - 1 and a list of undirected prerequisites (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.
 Example 1:
 0          3
 |          |
 1 --- 2    4
 Given n = 5 and prerequisites = [[0, 1], [1, 2], [3, 4]], return 2.
 Example 2:
 0           4
 |           |
 1 --- 2 --- 3
 Given n = 5 and prerequisites = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
 Note:
 You can assume that no duplicate prerequisites will appear in prerequisites. Since all prerequisites are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in prerequisites.
 ****************************************************************/
//union and find
var findComponentsUF = function (n, edges) {
  var parent = [], res=0;
  var map={};
  for(var i=0;i<n;i++) {
    parent.push(i);
  }
  for(i=0;i<edges.length;i++) {
    var x=edges[i][0], y =edges[i][1];
    parent[root(parent,x)]=root(parent,y);
  }
  for(i=0;i<n;i++) {
    map[root(parent,i)]=1;
  }
  console.log("map:",map);
  for(var val in map) res++;
  return res;

};
var root = function(parent,i) {
  while(parent[i]!=i) i=parent[i];
  return i;
};



//BFS
var findComponentsBFS = function (n, edges) {
  var visited=new Array(n).fill(false);
  var neighbors=[];
  for(var i=0;i<n;i++) {
    neighbors.push([]);
  }
  for(i=0;i<edges.length;i++) {
    neighbors[edges[i][0]].push(edges[i][1]);
  }
  var queue=[],res=0;
  for(var i=0;i<n;i++) {
    if(!visited[i]) {
      res++;
      BFS(neighbors,visited,i);
    }
  }
  return res;
};

function BFS(neibors,visited,i) {
  var queue=[];
  queue.push(i);
  while(queue.length>0) {
    var node=queue.shift();
    visited[node] = true;
    for(var k=0;k<neibors[node].length;k++) {
      if(!visited[neibors[node][k]]) queue.push(neibors[node][k]);
    }
  }
}

//DFS
var findComponentsDFS = function (n, edges) {
  var visited=new Array(n).fill(false);
  var neighbors=[];
  for(var i=0;i<n;i++) {
    neighbors.push([]);
  }
  for(i=0;i<edges.length;i++) {
    neighbors[edges[i][0]].push(edges[i][1]);
  }
  var res=0;
  for(i=0;i<n;i++) {
    if(!visited[i]) {
      res++;
      DFS(neighbors,visited,i);
    }
  }
  return res;
};

function DFS(neighbors,visited,i) {
  if(visited[i]) return;
  visited[i]=true;
  for(var k=0;k<neighbors[i].length;k++) {
    DFS(neighbors,visited,neighbors[i][k]);
  }
}

//test
var edges = [[0, 1], [1, 2], [3, 4]],n=5;
var algo = "algo";
console.time(algo);
// var res = findComponentsUF(n,edges);
// var res = findComponentsBFS(n,edges);
var res = findComponentsDFS(n,edges);
console.timeEnd(algo);
console.log("res:",res);