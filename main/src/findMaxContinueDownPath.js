/**
 * Created by gxy on 2017/7/25.
 */

const maxGet = require('./chooseHuo.js');
/*
 @matrix: input Matrix
 */
function findMaxContinueDownPath(matrix) {
  let res = 0;
  const row = matrix.length;
  const col = matrix[0].length;
  // find local maximum value and store the position
  // build a path table to store the intermediate result
  const localMinPos = [];
  const midResult = [];
  for (let i = 0; i < row; i += 1) {
    midResult.push(new Array(col).fill(-1));
    for (let j = 0; j < col; j += 1) {
      if (isLocalMinimum(matrix, i, j)) {
        localMinPos.push([i, j]);
        midResult[i][j] = 1;
      }
    }
  }
  // console.log('localMinPos:',localMinPos);
  // DFS search from localMaximum point
  // and build a path table to store the intermediate result
  for (let i = 0; i < localMinPos.length; i += 1) {
    updateTable(matrix, midResult, localMinPos[i][0], localMinPos[i][1]);
  }
  // console.log('midResult:',midResult);
  // get total max
  // return Math.max.apply(...midResult.map(x => Math.max(...x)));
  return Math.max.apply(Math, midResult.map(x => Math.max.apply(Math, x)));
}

function isLocalMinimum(matrix, i, j) {
  const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  for (let k = 0; k < dir.length; k += 1) {
    if (isInside(matrix, i + dir[k][0], j + dir[k][1]) &&
      matrix[i + dir[k][0]][j + dir[k][1]] < matrix[i][j]) {
      return false;
    }
  }
  return true;
}

function isInside(matrix, i, j) {
  return (i > -1 && i < matrix.length && j > -1 && j < matrix[0].length);
}

function updateTable(matrix, midResult, i, j) {
  const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  for (let k = 0; k < dir.length; k += 1) {
    const x = i + dir[k][0];
    const y = j + dir[k][1];
    // whether to update the (x,y) pos
    if (isInside(matrix, x, y) && matrix[x][y] > matrix[i][j] &&
      midResult[x][y] < midResult[i][j] + 1) {
      midResult[x][y] = midResult[i][j] + 1;
      updateTable(matrix, midResult, i + dir[k][0], j + dir[k][1]);
    }
  }
}

//
// let matrix = [[13,12,3,11,26],[16,30,22,1,24],[20,23,25,5,19],
//   [20,23,25,5,19],[27,15,9,17,31]];
// const matrix = [[32, 34, 7, 33, 21, 2], [13, 12, 3, 11, 26, 36], [16, 30, 22, 1, 24, 14],
//   [20, 23, 25, 5, 19, 29], [27, 15, 9, 17, 31, 4], [6, 18, 8, 10, 35, 28]];

const matrix = [];
const row = 40;
const col = 40;
for (let i = 0; i < row; i += 1) {
  matrix.push(new Array(col));
  for (let j = 0; j < col; j += 1) {
    matrix[i][j] = Number.parseInt(Math.random() * col, 10);
  }
}
console.time('optimize');
const res1 = findMaxContinueDownPath(matrix);
console.timeEnd('optimize');
console.log('res1:', res1);

console.time('origin');
const res2 = maxGet(matrix);
console.timeEnd('origin');
console.log('res2:', res2);

