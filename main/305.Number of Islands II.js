/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 305.Number of Islands II
 A 2d grid map of m rows and n columns is initially filled with water.
 We may perform an addLand operation which turns the water at position (row, col) into
 a land. Given a list of positions to operate, count the number of islands after each
 addLand operation. An island is surrounded by water and is formed by connecting
 adjacent lands horizontally or vertically. You may assume all four prerequisites of
 the grid are all surrounded by water.

 Example:

 Given m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]].
 Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1
 represents land).

 0 0 0
 0 0 0
 0 0 0
 Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

 1 0 0
 0 0 0   Number of islands = 1
 0 0 0
 Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

 1 1 0
 0 0 0   Number of islands = 1
 0 0 0
 Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

 1 1 0
 0 0 1   Number of islands = 2
 0 0 0
 Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

 1 1 0
 0 0 1   Number of islands = 3
 0 1 0
 We return the result as an array: [1, 1, 2, 3]

 Challenge:

 Can you do it in time complexity O(k log mn), where k is the length of the positions?
 ****************************************************************/
//union and find
var Island = function (grid) {
  this.grid=grid;
  this.islands=[];
  this.parent=new Array(grid.length*grid[0].length).fill(-1);
  this.rank=new Array(grid.length*grid[0].length).fill(0);
};

Island.prototype = {
  addLand: function (i,j) {
    if(!(i>-1 && j>-1 && i<grid.length && j<grid[0].length)) {
      return this.islands;
    }
    this.grid[i][j]=1;
    this.parent[i*this.grid[0].length+j]=i*this.grid[0].length+j;
    var dir=[[0,-1],[1,0],[0,1],[-1,0]];
    for(var k=0;k<dir.length;k++) {
      if(i+dir[k][0]>-1 && j+dir[k][1]>-1 && i+dir[k][0]<grid.length && j+dir[k][1]<grid[0].length &&
        this.grid[i+dir[k][0]][j+dir[k][1]]==1) {
        var x=this.find(i*this.grid[0].length+j);
        var y=this.find((i+dir[k][0])*this.grid[0].length+j+dir[k][1]);
        if(x!=y) {
          this.union(x,y);
        }
      }
    }
    // console.log("this.parent:",this.parent);
    var map={},res=0;
    for(k=0;k<this.parent.length;k++) {
      // console.log("this.find(this.parent[k]:",this.find(this.parent[k]));
      if(this.find(this.parent[k])!=-1) map[this.find(this.parent[k])]=1;
    }
    for(var val in map) res++;
    this.islands.push(res);
    return this.islands;
  },
  find: function(index) {
    while(index!=-1 && this.parent[index]!=-1 && index != this.parent[index]) {
      index=this.parent[index];
    }
    return index==-1?-1:this.parent[index];
  },
  union: function (m,n) {
    if(this.rank[m]<this.rank[n]) {
      this.parent[m]=n;
    } else {
      this.parent[n]=m;
      if(this.rank[n]==this.rank[m]) this.rank[m]++;
    }
  }
};

//test
var grid=[[0,0,0],[0,0,0],[0,0,0]];
var island = new Island(grid);

console.log("island.addLand(0,0):",island.addLand(0,0));
console.log("island.addLand(0,1):",island.addLand(0,1));
console.log("island.addLand(1,2):",island.addLand(1,2));
console.log("island.addLand(2,1):",island.addLand(2,1));