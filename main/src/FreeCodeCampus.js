
//jshint esversion:6
// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let fib = [1,1];
  let [a,b,c] = [1,1,1];
  while(a+b <= num) {
    c = a+b;
    a = b;
    b = c;
    fib.push(c);
  }
  return fib.filter(v => v%2 === 1).reduce((v1,v2) => v1+v2);
}


// Smallest Common Multiple
function smallestCommons(arr) {
  let res=1;
  const min = Math.min(arr[0],arr[1]);
  const max = Math.max(arr[0],arr[1]);
  for(let i=min;i<=max;i++) {
    res = res*i/GCD(res,i);
  }
  return res;
}

function GCD(num1,num2) {
  if(num1<num2) return GCD(num2,num1);
  if(num2 === 0) return num1;
  return GCD(num2,num1%num2);
}


// Arguments Optional
function addTogether() {
  let args = [...arguments];
  if(args.length === 2 && typeof args[0] === 'number' && typeof args[1] == 'number') return args[0]+args[1];
  if(args.length === 1 && typeof args[0] === 'number') return function(num) {
    if(typeof num == 'number') return args[0]+num;
  };
}

// Validate US Telephone Numbers
function telephoneCheck(str) {
  // Good luck!
  let reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  return reg.test(str);
}


// Symmetric Difference
function sym(args) {
  args = [...arguments];
  args = args.reduce((v1,v2) => symDif(v1,v2));
  return args.sort((v1,v2) => v1-v2);
}

function symDif(arr1,arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  for(let x of set1) {
    if(set2.has(x)) {
      set1.delete(x);
      set2.delete(x);
    }  
  }
  for(let x of set2) set1.add(x);
  console.log('set1:',set1);
  console.log('set2:',set2);
  return [...set1];
}

// checkCashRegister
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  // calculate money
  let allMoney = cid.map(v => Number.parseFloat(v[1])).reduce((v1,v2) => v1+v2).toFixed(2);
  // console.log("allMoney", allMoney);
  let needMoney = (cash-price).toFixed(2);
  needMoney = Number.parseFloat(needMoney);
  allMoney = Number.parseFloat(allMoney);
  // console.log("needMoney", needMoney);
  if(needMoney === allMoney) return 'Closed';
  typeof needMoney
  // console.log("typeof needMoney", typeof needMoney);
  // console.log("typeof allMoney", typeof allMoney);
  // console.log("needMoney > allMoney", needMoney > allMoney);
  if(needMoney > allMoney) return 'Insufficient Funds';
  // convert cid to array whose item contains [money:count]
  const map = {'ONE HUNDRED':100,'TWENTY':20,'TEN':10,'FIVE':5,'ONE':1,'QUARTER':0.25,'DIME':0.1,'NICKEL':0.05,'PENNY':0.01};
  let moneyCnt = cid.map(v => [Number.parseFloat(map[v[0]]),Number.parseInt(v[1]/map[v[0]])]).reverse();
  // console.log("moneyCnt", moneyCnt);

  // calculate
  let res = new Array(9).fill(0);

  for(let i = 0; i < moneyCnt.length; i += 1) {
  	// console.log("moneyCnt[i][0]", moneyCnt[i][0]);
		while(needMoney >= moneyCnt[i][0] && moneyCnt[i][1] > 0) {
	  	needMoney -= moneyCnt[i][0];
	  	needMoney = Number.parseFloat(needMoney.toFixed(2));
	  	moneyCnt[i][1] -= 1;
	  	res[i] += 1;
		}
  }
  // convert back
  const map2 = ['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY'];
  res = res.map((v,i) => [map2[i],v*map[map2[i]]]).filter(v => v[1] > 0);
  // console.log("res", res);

  return needMoney > 0 ? 'Insufficient Funds' : res;
}
