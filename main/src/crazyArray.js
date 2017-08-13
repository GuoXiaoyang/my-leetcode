/**
 * Created by gxy on 2017/8/12.
 */
/** **************************************************************
 题目描述：
 小易老师是非常严厉的，它会要求所有学生在进入教室前都排成一列，
 并且他要求学生按照身高不递减的顺序排列。有一次，n个学生在列队的时候，
 小易老师正好去卫生间了。学生们终于有机会反击了，于是学生们决定来一次疯狂的队列，
 他们定义一个队列的疯狂值为每对相邻排列学生身高差的绝对值总和。
 由于按照身高顺序排列的队列的疯狂值是最小的，他们当然决定按照疯狂值最大的顺序来进行列队。
 现在给出n个学生的身高，请计算出这些学生列队的最大可能的疯狂值。小易老师回来一定会气得半死。

 输入描述：
 输入包括两行，第一行一个整数n(1 =< n <= 50)，表示学生的人数
 第二行为n个整数h[i](1 =< h[i] <= 1000)，表示每个学生的身高
 输出描述：
 输出一个整数，表示n个学生列队可以获得的最大的疯狂值。

 如样例所示：
 当队列排列顺序是：25-10-40-5-25，身高差绝对值的总和为15+30+35+20=100。
 这是最大的疯狂值了。

 示例1
 输入
 5
 5 10 25 40 25
 55
 输出
 100

 时间限制：1s
 空间限制: 32768K
 ****************************************************************/
/**
 *
 * @param {number[]} arr
 * @return {number} maxValue
 */
var maxSumOfAdajacentDif = function (arr) {
  if (arr.length <= 1) return 0;
  // recursive method
  const max = [0];
  // helper(arr, 0, max);

  // iterative method
 /* const permu = permutations(arr);
  var len = permu.length;
  let tmpArr;
  for (let i = 0; i < len; i += 1) {
      const tmp = difSum(permu[i]);
      if(tmp>max[0]) {
        tmpArr = permu[i];
        max[0] = tmp;
      }
  }
  console.log('tmpArr:',tmpArr);*/

  // third method
  arr.sort((v1,v2) => v1-v2);
  const len = arr.length;
  if(len%2 === 0) {
    return maxSum(arr);
  } else {
    const mid = arr.splice(Number.parseInt(len/2),1)[0];
    return maxSum(arr)+Math.max(mid-arr[arr.length/2-1],arr[arr.length/2]-mid);
  }
  // return max[0];
};

function maxSum(arr) {
  const len = arr.length;
  return 2*arr.slice(len/2+1).reduce((v1,v2) => v1+v2) + arr[len/2]-arr[len/2-1]-2*arr.slice(0,len/2-1).reduce((v1,v2) => v1+v2);
}

function helper(arr, start, max) {
  if (containConsecutiveOrder(arr, start)) {
    return;
  }
  if (start === arr.length) {
    const sum = difSum(arr);
    console.log('sum:', sum);
    if (sum > max) {
      console.log('arr:', arr);
    }
    max[0] = sum > max[0] ? sum : max[0];
    return;
  }
  for (let i = start; i < arr.length; i += 1) {
    swap(arr, start, i);
    helper(arr, start + 1, max);
    swap(arr, start, i);
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function difSum(arr) {
  const len = arr.length;
  let sum = 0;
  for (let i = 1; i < len; i += 1) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }
  return sum;
}

function containConsecutiveOrder(arr, start) {
  if (start < 3) return false;
  for (let i = start - 1; i >= 2; i -= 1) {
    if ((arr[i - 2] < arr[i - 1] && arr[i - 1] < arr[i]) || (arr[i - 2] > arr[i - 1] && arr[i - 1] > arr[i])) {
      return true;
    }
  }
  return false;
}

function permutations(nums) {
  if (!nums) return nums;
  var result = [], tmpResult = [], arr = [];
  var nums0 = [];
  nums0.push(nums[0]);
  result.push(nums0);
  for (var i = 1; i < nums.length; i++) {
    tmpResult = [];
    for (var j = 0; j <= i; j++) {
      for (var k = 0; k < result.length; k++) {
        var t = result[k].slice(0);
        t.splice(j, 0, nums[i]);
        tmpResult.push(t);
      }
    }
    result = tmpResult;
  }
  return result;
}
// test
// const arr = [5,10,25,25,40];
// const arr = [2, 4, 6, 8, 10, 12];
let arr = new Array(50).fill(0);
arr = arr.map((v,i) => i+1);
console.log('arr:', arr);
console.time("time");
const res = maxSumOfAdajacentDif(arr);
console.timeEnd("time");
console.log('res:', res);


// log1 recursive method >20 exceed calling stack
// n: 11, time: 12496.398ms
// max: 59

// log2 cut branch using containOrder >20 exceed calling stack

// n: 11, time: 1299.328ms
// max: 59

// permutations memory exceeding

// log3 another method
// n:50, time: 1.286ms
// max: 1249