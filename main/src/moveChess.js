/**
 * Created by gxy on 2017/8/12.
 */
/** **************************************************************
 题目描述：
 小易将n个棋子摆放在一张无限大的棋盘上。第i个棋子放在第x[i]行第y[i]列。
 同一个格子允许放置多个棋子。每一次操作小易可以把一个棋子拿起并将其移动到原格子的上、下、左、右的
 任意一个格子中。小易想知道要让棋盘上出现有一个格子中至少有i(1 =< i < =n)个棋子所需要的最少操作次数．
 输入描述：
 输入包括三行，第一行一个整数n(1 =< n <= 50)，表示棋子的个数
 第二行为n个棋子的横坐标x[i](1 =< x[i] <= 10^9)
 第二行为n个棋了的纵坐标y[i](1 =< y[i] <= 10^9)

 输出描述：
 输出n个整数，第i个表示棋盘上有一个格子至少有i个棋子所需要的操作数，以空格分割。行末无空格
 如样例所示：
 对于1个棋子：不需要操作
 对于2个棋子：将前两个棋子放在（1,1）中
 对于3个棋子：将前二个棋了放在（2,1）中
 对于4个棋子：将所有棋子都放在（3,1）中

 输入：
 4
 1 2 4 9
 1 1 1 1
 输出：
 0 1 3 10

 时间限制：1s
 空间限制: 32768K

 ****************************************************************/
/**
 *
 * @param {number} n
 * @param {number[]} posX
 * @param {number[]} posY
 * @return {number[]} moves
 */
const moveChess = function (n, posX, posY) {
  if (n <= 1) return [0];
  // recursive method
  /*  const moves = [0];
   for (let i = 2; i <= n; i += 1) {
   moves.push(minMovesOfSeveral(posX, posY, i));
   }*/
  // another method
  const pos = posX.map((v, k) => [v, posY[k]]);
  let map = new Map();
  // find max coincident point
  let max = 1;
  for (let i = 0; i < n; i += 1) {
    map.set(pos[i], map.get(pos[i]) ? map.get(pos[i]) + 1 : 1);
    max = map.get(pos[i]) > max ? map.get(pos[i]) : max;
  }
  singleChess = [...map.keys()];
  dis = singleChess.slice();
  for (let i = 0; i < singleChess.length; i += 1) {
    const tmp = singleChess[i];
    let tmpPos = pos.slice(0);
    tmpPos.splice(tmpPos.indexOf(tmp), 1);
    dis[i] = [dis[i]].concat(tmpPos.sort((v1, v2) => distance(v1, tmp) - distance(v2, tmp)));
  }
  // console.log('dis:', dis);

  // calculate moves
  const moves = new Array(n).fill(Number.MAX_VALUE);
  for (let i = 0; i < max; i += 1) {
    moves[i] = 0;
  }
  for (let i = max; i < n - 1; i += 1) {
    for (let j = 0; j < dis.length; j += 1) {
      // console.log('dis[j].slice(0, i):', dis[j].slice(0, i + 1));
      const tmpMove = minMoves(dis[j].slice(0, i + 1));
      // console.log('tmpMove:', tmpMove);
      moves[i] = tmpMove < moves[i] ? tmpMove : moves[i];
    }
  }
  moves[n - 1] = minMoves(pos);
  console.log('moves:', moves);
  return moves;
};

function distance(v1, v2) {
  return Math.abs(v1[0] - v2[0]) + Math.abs(v1[1] - v2[1]);
}

function minMovesOfSeveral(posX, posY, i) {
  const pos = posX.map((v, k) => [v, posY[k]]);
  // console.log('pos:',pos);
  let tmp = [];
  let min = [Number.MAX_VALUE];
  let start = 0;
  helper(pos, tmp, start, i, min);
  return min[0];
}

function helper(pos, tmp, start, i, min) {
  if (tmp.length === i) {
    const moves = minMoves(tmp);
    min[0] = moves < min[0] ? moves : min[0];
    return;
  }
  for (let k = start; k < pos.length; k += 1) {
    tmp.push(pos[k]);
    helper(pos, tmp, k + 1, i, min);
    tmp.pop();
  }
}


function minMoves(pos) {
  const posX = pos.map(v => v[0]);
  const posY = pos.map(v => v[1]);
  return minMovesOf1D(posX) + minMovesOf1D(posY);
}

function minMovesOf1D(pos) {
  pos.sort((val1, val2) => val1 - val2);
  let sum = 0;
  for (let i = 0, j = pos.length - 1; i < j; i += 1, j -= 1) {
    sum += pos[j] - pos[i];
  }
  return sum;
}

// test

// const n = 4;
// const posX = [1, 2, 4, 9];
// const posY = [1, 1, 1, 1];
// ans = [0, 1, 3, 10]
const n = 50;
let posX = new Array(n).fill(0);
posX = posX.map((v, i) => i + 1);
let posY = new Array(n).fill(0);
posY = posY.map((v, i) => i + 1);
console.time('time');
moveChess(n, posX, posY);
console.timeEnd('time');

// log1
// n: 20, time: 18435.933ms
// moves: [ 0, 2, 4, 8, 12, 18, 24, 32, 40, 50, 60, 72, 84, 98, 112, 128, 144, 162, 180, 200 ]

// log2
// n:20, time: 24.220ms
//moves: [ 0, 2, 4, 8, 12, 18, 24, 32, 40, 50, 60, 72, 84, 98, 112, 128, 144, 162, 180, 200 ]
// n:50 time: 113.484ms
// moves: [ 0, 2, 4, 8, 12, 18, 24, 32, 40, 50, 60, 72, 84, 98, 112, 128, 144, 162, 180, 200,
// 220, 242, 264, 288, 312, 338, 364, 392, 420, 450, 480, 512, 544, 578, 612, 648, 684, 722,
// 760, 800, 840, 882, 924, 968, 1012, 1058, 1104, 1152, 1200, 1250 ]
