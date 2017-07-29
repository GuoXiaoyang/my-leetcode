// Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return 
// the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, 
// return the smallest sum of indices. Once an element has been used, it cannot be reused to pair 
// with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and 
// [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6
// 

 
function pairwise(arr, arg) {
	let len = arr.length;
	let visited = new Array(len).fill(0);
	let res=[];
	for(let i=0; i<arr.length;i++) {
		if(visited[i] === 1) continue;
		let start = i+1;
		let dif = arg - arr[i];
		while(start < len) {
			let index = arr.indexOf(dif,start);
			if(index === -1) break;
			if(visited[index] === 1) {
				start = index+1;
			} else {
				res.push(i,index);
				visited[index] = 1;
				break;
			}
		}
	}
	console.log("res", res);
  console.log("res", res.reduce((v1,v2) => v1+v2));
  return res.length ===0 ?0:resres.reduce((v1,v2) => v1+v2);
}

pairwise([], 100)