/**
 * Created by gxy on 2017/8/1.
 */
/** **************************************************************
 迷宫寻路
 假设一个探险家被困在了地底的迷宫之中，要从当前位置开始找到一条通往迷宫出口的路径。
 迷宫可以用一个二维矩阵组成，有的部分是墙有的部分是路。迷宫之中有的路上还有门，
 每扇门者随迷宫的某个地方有与之匹配的钥匙，只有先拿到钥匙才能打开门。
 请设计一个算去，帮助探险家找到脱困的最短路径。如前所述，迷宫是通过一个二维矩阵表示的，
 每个元素的值的含义如下0--墙，1--路，2--探险家的起始位置，3--迷宫的出口，大写字母--门，
 小写字母--对应大写字母所代表的门的钥匙

 输入描述：
 迷宫的地图，用二维矩阵表示。第一行足表示矩阵的行数和列数M和N,后面的M行是矩阵的数据，
 每一行对应与矩阵的一行（中间没有空格）。M和N都不超过100，门不超过10扇。
 输出描述：
 路径的长度，是一个整数。
 示例：
 输入
 5 5
 02111
 01a0A
 01003
 01001
 01111

 输出 7
 说明 输出7，对应路径是(0,1)->(0,2)->(1,2)->(0,2)->(0,3)->(0,4)->(1,4)->(2,4)

 ****************************************************************/
// DFS
function helper(maze,x,y,visited,keyRing,path,shortestPath) {
  // console.log('x,y',x,y);
  // if out of bound or have been visited
  // if(x>0 && x<maze.length && y>0 && y<maze[0].length && visited[x][y]) console.log('visited[x][y]:',visited[x][y]);
  if(x<0 || x>=maze.length || y<0 || y>=maze[0].length || visited[x][y]) return;
  // console.log('maze[x][y]:',maze[x][y]);
  const currentValue = maze[x][y];
  // if meet the wall
  if(currentValue === '0') return;
  // if reach the goal, refresh the shortestPath
  if(currentValue === '3') {
    cleanArray(shortestPath);
    copyArray(shortestPath,path);
    shortestPath.push([x,y]);
  }
  // if the current path is longer than the existing path, give up the way
  if(shortestPath.length > 0 && path.length + 2 >= shortestPath.length) return;
  // if meet the door
  if(currentValue >= 'A' && currentValue <= 'Z') {
    // have no corresponding key
    const shiftDoor = currentValue.charCodeAt(0) - 'A'.charCodeAt(0);
    if((keyRing & 1 << shiftDoor) === 0) return;
  }
  // if meet the key
  if(currentValue >= 'a' && currentValue <= 'z') {
    // if have not meet the key before
    const shiftKey= currentValue.charCodeAt(0) - 'a'.charCodeAt(0);
    if((keyRing & 1 << shiftKey) === 0) {
      keyRing = keyRing | 1 << shiftKey;
      visited = initVisited(maze);
    }
  }

  // add [x,y] to path and search the path from [x,y]
  visited[x][y] = true;
  path.push([x,y]);
  helper(maze,x+1,y,visited,keyRing,path,shortestPath);
  helper(maze,x-1,y,visited,keyRing,path,shortestPath);
  helper(maze,x,y+1,visited,keyRing,path,shortestPath);
  helper(maze,x,y-1,visited,keyRing,path,shortestPath);
  path.pop();
  visited[x][y] = false;
}

function initVisited(maze) {
  return new Array(maze.length).fill(0).map(v => new Array(maze[0].length).fill(false));
}

// clean the array while remain the original reference
function cleanArray(arr) {
  while(arr.length) {
    arr.pop();
  }
}
// copy the from array to the empty to array while remain the original reference
function copyArray(to, from) {
  const len = from.length;
  for (let i = 0; i < len; i += 1) {
      to.push(from[i]);
  }
}

function solveMaze(maze) {
  const row = maze.length;
  const col = maze[0].length;
  let start;
  if(row ===0 || col === 0) return 0;
  for(let i=0;i<row;i+=1) {
    for (let j = 0; j < col; j += 1) {
      if(maze[i][j] === '2') {
        start = [i,j];
      }
    }
  }
  let visited = initVisited(maze);
  let path = [];
  let shortestPath = [];
  let keyRing = 0;
  helper(maze,start[0],start[1],visited,keyRing,path,shortestPath);
  console.log('shortestPath:',shortestPath);
  return shortestPath.length-1;
}
// test
const maze = ['02111', '01a0A', '01003', '01001', '01111'];
// console.log('initVisited:',initVisited(maze));
const res = solveMaze(maze);
console.log('res:',res);