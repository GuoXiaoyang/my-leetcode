function permAlone(str) {
	let res = [];
	helper(str.split(''), res, 0);
	return res.filter(v => !(/(.)\1+/g.test(v))).length;
}

function helper(arr,res,pos) {
	if(pos == arr.length-1) {
		res.push(arr.join(''));
		return;
	}
	for(let i=pos; i<arr.length; i++) {
		swap(arr,i,pos);
		helper(arr,res,pos+1);
		swap(arr,i,pos);
	}
}

function swap(arr,i,j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

// Test here.
console.log("permAlone('aab')", permAlone('aab'));