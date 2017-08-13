/**
 * Created by gxy on 2017/8/1.
 */
/** **************************************************************
 找出无序数组中3个数的最大乘积，数组元素均为整数(正数、负数和0)
 要求时间复杂度O(n),空间复杂度O(1)
 ****************************************************************/
function maxMultiply(arr) {
  var MAX = Number.MAX_VALUE;
  var MIN = -MAX;
  var max3 = new Array(3).fill(MIN);
  var min2 = new Array(2).fill(MAX);
  for(let i=0;i<arr.length;i++) {
    if(arr[i]>max3[0]) {
      max3[2] = max3[1];
      max3[1] = max3[0];
      max3[0] = arr[i];
    } else if(arr[i]>max3[1]) {
      max3[2] = max3[1];
      max3[1] = arr[i];
    } else if(arr[i]>max3[2]) {
      max3[2] = arr[i];
    }
    if(arr[i] < min2[0]) {
      min2[1] = min2[0];
      min2[0] = arr[i];
    } else if(arr[i] < min2[1]) {
      min2[1] = arr[i];
    }
  }
  console.log('max3:',max3);

  console.log('min2:',min2);
  var m1=1,m2=1;
  for(let i=0;i<3;i++) {
    m1 *=max3[i];
  }
  for(let i=0;i<2;i++) {
    m2 *=min2[i];
  }
  m2 = m2*max3[0];
  console.log('m1,m2:',m1,m2);
  return Math.max(m1,m2)
}

// test
var arr = [3,4,1,2,7,8];
var res = maxMultiply(arr);
console.log('res:',res);