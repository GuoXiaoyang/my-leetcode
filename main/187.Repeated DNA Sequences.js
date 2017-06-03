/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 187. Repeated DNA Sequences
 All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

 Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

 For example,

 Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

 Return:
 ["AAAAACCCCC", "CCCCCAAAAA"].
****************************************************************/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  var words = {};
  var res=[];
  var map = new Array(26);
  map['A'.charCodeAt(0) - 'A'.charCodeAt(0)] = 0;
  map['C'.charCodeAt(0) - 'A'.charCodeAt(0)] = 1;
  map['G'.charCodeAt(0) - 'A'.charCodeAt(0)] = 2;
  map['T'.charCodeAt(0) - 'A'.charCodeAt(0)] = 3;

  for(var i = 0; i < s.length - 9; i++) {
    var v = 0;
    for (var j = i; j < i + 10; j++) {
      v <<= 2;
      v |= map[s.charCodeAt(j) - 'A'.charCodeAt(0)];
    }
    if (!words[v]) {
      words[v] = 1;
    } else if (words[v]==1) {
      words[v]++;
      res.push(s.substr(i, 10));
    }
  }
  return res;
};

//test
var s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
var algo = "algo";
console.time(algo);
var res = findRepeatedDnaSequences(s);
console.timeEnd(algo);
console.log("res:",res);