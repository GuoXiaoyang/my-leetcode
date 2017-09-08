function number(n) {
  var div = 1000000009;
  // a^b=a^b
  var part1 = n*n;
  part1 = part1 % div;
  // 1^b=1^c
  var part2 = (n-1)*n;
  part2 = part2 % div;

  // 获取小于等于n的 表示为幂的数量
  var i = 2;
  var numOfi = [];
  while(Math.pow(n, 1/i) >= 2) {
    var num = Math.floor(Math.pow(n,1/i));
    console.log('num:',num);
    numOfi.push(num-1);
    i++;
  }
  console.log('numOfi:',numOfi);
  // (a^k)^x=a^(kx)
  var part3 = 0;
  for(var i=0;i<numOfi.length;i++) {
    part3+=numOfi[i]*2*Math.floor(n/(i+2));
    part3 = part3 % div;
  }

  // (a^k)^x=(a^x)^k
  var part4=0;
  var numCopy = numOfi.concat();
  while(numCopy.length>0) {
    var len = numCopy.length;
    part4 +=len*(len-1);
    part4 = part4 % div;
    numCopy = numCopy.map(function(v){return v-1;})
    .filter(function(v) {return v>0;});
  }

  console.log('part1,part2,part3,part4:',part1,part2,part3,part4);
  return (part1+part2+part3+part4)%div;

}



var n = 6;
var res = number(n);
console.log('res:',res);