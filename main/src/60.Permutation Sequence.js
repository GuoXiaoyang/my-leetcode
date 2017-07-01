/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 60. Permutation Sequence
 The set [1,2,3,…,n] contains a total of n! unique permutations.

 By listing and labeling all of the permutations in order,
 We get the following sequence (ie, for n = 3):

 "123"
 "132"
 "213"
 "231"
 "312"
 "321"
 Given n and k, return the kth permutation sequence.

 Note: Given n will be between 1 and 9 inclusive.
****************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// next permutation  TLE
var getPermutation1 = function(n, k) {
  var numStr = "";
  for(var i=1;i<=n;i++) {
    numStr+=i;
  }
  for(i=0;i<k-1;i++) {
    numStr=nextPermuation(numStr);
    console.log("numStr:",numStr);
  }
  return numStr;

};
function nextPermuation(str) {
  var i=str.length-2;
  while(i>=0) {
    if(str[i]<str[i+1]) {
      break;
    }
    i--;
  }
  if(i>=0) {
    var k = str.length - 1, tmp;
    while (k >= 0) {
      if (str[k] > str[i]) {
        break;
      }
      k--;
    }
    console.log("i,k:",i,k);
    str = str.substring(0,i)+str[k]+str.substring(i+1,k)+str[i]+str.substring(k+1);

  }
  str = reverse(str,i+1);
  return str;
}

function reverse(str,num) {
  var result=str.substring(0,num);
  for(var i=str.length-1;i>=num;i--) {
    result+=str[i];
  }
  return result;
}

//A tricky solution
var getPermutation2 = function(n, k) {
  var num=[1],factorize = [1],result="";
  for(var i=1;i<=n-1;i++) {
    num.push(i+1);
    factorize.push(factorize[i-1]*i);
  }
  console.log("num,factorize:",num,factorize);
  k--;
  var index;
  i=n;
  while(i>0) {
    index = Math.floor(k/factorize[i-1]);
    k=k%factorize[i-1];
    console.log("index,num[index]:",index,num[index]);
    result+=num[index];
    num.splice(index,1);
    i--;

  }
  return result;

};

//test
var num = 4, k=3;
var algo = "algo";
console.time(algo);
var res =getPermutation2(num,k) ;
console.timeEnd(algo);
console.log("res:",res);