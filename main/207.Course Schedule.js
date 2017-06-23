/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 207. Course Schedule
 There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first
 take course 1, which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, is it possible for
 you to finish all courses?

 For example:
 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished
 course 0. So it is possible.

 2, [[1,0],[0,1]]
 There are a total of 2 courses to take. To take course 1 you should have finished
 course 0, and to take course 0 you should also have finished course 1.
 So it is impossible.

 Note:
 The input prerequisites is a graph represented by a list of prerequisites,
 not adjacency matrices. Read more about how a graph is represented.
 You may assume that there are no duplicate prerequisites in the input prerequisites.
****************************************************************/
//Topological sort
var canFinish = function (numCourses, prerequisites) {
  //init the inDegree and neighbours
  var neighbors=[];
  for(var i=0;i<numCourses;i++) {
    neighbors.push([]);
  }
  var inDegree = new Array(numCourses).fill(0);
  for(var i=0; i<prerequisites.length; i++) {
    var x=prerequisites[i][0],y=prerequisites[i][1];
    inDegree[y]++;
    neighbors[x].push(y);
  }

  //store the nodes whose indegree=0;
  var queue=[];
  for(i=0;i<numCourses;i++) {
    if(inDegree[i]===0) queue.push(i);
  }
  console.log("inDegree:",inDegree);
  console.log("neighbors:",neighbors);
  //BFS
  var count=0;
  while(queue.length!==0) {
    count++;
    var node=queue.shift();
    for(i=0;i<neighbors[node].length;i++) {
      if(--inDegree[neighbors[node][i]]==0) queue.push(neighbors[node][i]);
    }
  }

  return count==numCourses;
};

//test
var n= 3, prerequisites = [[0,2],[1,2],[2,0]];
var algo = "algo";
console.time(algo);
var res = canFinish(n,prerequisites);
console.timeEnd(algo);
console.log("res:",res);