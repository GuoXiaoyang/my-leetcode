/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 210. Course Schedule II
 There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first
 take course 1, which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, return the
 ordering of courses you should take to finish all courses.

 There may be multiple correct orders, you just need to return one of them.
 If it is impossible to finish all courses, return an empty array.

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished
 course 0. So the correct course order is [0,1]

 4, [[1,0],[2,0],[3,1],[3,2]]
 There are a total of 4 courses to take. To take course 3 you should have finished
 both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
 So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

 Note:
 The input prerequisites is a graph represented by a list of prerequisites, not adjacency
 matrices. Read more about how a graph is represented.
 You may assume that there are no duplicate prerequisites in the input prerequisites.
****************************************************************/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //init the inDegree and neighbours
    var neighbors=[];
    for(var i=0;i<numCourses;i++) {
      neighbors.push([]);
    }
    var inDegree = new Array(numCourses).fill(0);
    for(var i=0; i<prerequisites.length; i++) {
      var x=prerequisites[i][1],y=prerequisites[i][0];
      inDegree[y]++;
      neighbors[x].push(y);
    }

    //store the nodes whose indegree=0;
    var queue=[];
    for(i=0;i<numCourses;i++) {
      if(inDegree[i]===0) queue.push(i);
    }
    //BFS
    var res=[];
    var count=0;
    while(queue.length!==0) {
      count++;
      var node=queue.shift();
      res.push(node);
      for(i=0;i<neighbors[node].length;i++) {
        if(--inDegree[neighbors[node][i]]==0) queue.push(neighbors[node][i]);
      }
    }

    return count==numCourses?res:[];
  };

var n= 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
var algo = "algo";
console.time(algo);
var res = findOrder(n,prerequisites);
console.timeEnd(algo);
console.log("res:",res);