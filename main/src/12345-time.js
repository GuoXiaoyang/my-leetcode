// first 
// output : 5-->5->5->5->5->5
/* for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
}

console.log(new Date(), i); */

// second let本质上就是形成了一个闭包
// output: undefined --> 0->1->2->3->4
/* for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
}

console.log(new Date(), i); */

// third closure(闭包)
// output: 5 --> 0->1->2->3->4
/* for (var i = 0; i < 5; i++) {
  (function f(j) {
    setTimeout(function () {
      console.log(new Date(), j);
    }, 1000);
  })(i);
}

console.log(new Date(), i); */

// output: 5 --> 0->1->2->3->4 
// The same with the last
/* function f(i) {
  setTimeout(function() {
    console.log(new Date(), i)
  }, 1000);
}
for (var i = 0; i < 5; i++) {
  f(i);
}
console.log(new Date(), i);
 */
// fourth closure(闭包)
// output: 5 --> 0->1->2->3->4
/* function f(i) {
  return function() {
    console.log(new Date(), i);
  }
}
for (var i = 0; i < 5; i++) {
  setTimeout(f(i), 1000);
}

console.log(new Date(), i); */

// fifth closure(闭包)
// output: 5 --> 0->1->2->3->4
/* for (var i = 0; i < 5; i++) {
  setTimeout((function f(j) {
    return function() {
      console.log(new Date(), i);
    }
  })(j), 1000);
}

console.log(new Date(), i); */

// sixth promise 
// output:
/* const tasks = [];
const output = (i) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(new Date(), i);
    resolve();
  }, 1000 * i);
})

for(var i = 0; i < 5; i++) {
  tasks.push(output(i));
}

Promise.all(tasks).then(() => setTimeout(() => console.log(new Date(), i), 1000)); */

/* const output = (i, j) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(new Date(), i);
    resolve();
  }, j * 1000);
});

const arr = [1, 2, 3, 4, 5];
arr.reduce((seq, val) => {
  console.log(val);
  return seq.then(() => output(val, 1));
}, output(0, 0)); */


// seventh async await
// output: 
/* const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

(async () => {
  for(var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }

  await sleep(1000);
  console.log(new Date(), i);
})() */
