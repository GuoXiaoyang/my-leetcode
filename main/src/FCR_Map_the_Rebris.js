// Map the Debris
// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var pi = 3.1415926;
	let res = arr.map(v => {

		let x = 2 * pi * 
		Math.sqrt(Math.pow((earthRadius + Number.parseFloat(v.avgAlt)), 3) / GM);
		v.orbitalPeriod = Math.round(x);
		delete v.avgAlt;
		console.log("v", v);
		return v;
	});
	return res;
}

console.log("orbitalPeriod([{name : \"sputnik \", avgAlt : 35873.5553}])", 
	orbitalPeriod([{
		name: "sputnik",
		avgAlt: 35873.5553
	}]));