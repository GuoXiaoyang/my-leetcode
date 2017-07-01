/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 249.Group Shifted Strings
 Given a string, we can "shift" each of its letter to its successive letter,
 for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:
 "abc" -> "bcd" -> ... -> "xyz"
 Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.
 For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
 Return:
 [ ["abc","bcd","xyz"], ["az","ba"], ["acef"], ["a","z"] ]
 Note: For the return value, each inner list's elements must follow the lexicographic order.
****************************************************************/
var groupStrings = function(str) {
  var dict={},res=[];
  for(var i=0;i<str.length;i++) {
    var p=str[i].charCodeAt(0)-'a'.charCodeAt(0);
    var tmpStr='',tmp;
    for(var j=0;j<str[i].length;j++) {
      tmp= str[i].charCodeAt(j)-p;
      tmp=tmp<'a'.charCodeAt(0)?tmp+26:tmp;
      tmp=String.fromCharCode(tmp);
      tmpStr+=tmp;
    }
    if(!dict[tmpStr]) dict[tmpStr]=[];
    dict[tmpStr].push(str[i]);
  }
  for(var item in dict) {
    res.push(dict[item].sort());
  }
  return res
};

//test
var str = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
var algo = "algo";
console.time(algo);
var res = groupStrings(str);
console.timeEnd(algo);
console.log("res:",res);