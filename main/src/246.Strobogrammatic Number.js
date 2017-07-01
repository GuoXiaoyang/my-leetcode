/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 246.Strobogrammatic Number
 A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
 Write a function to determine if a number is strobogrammatic. The number is represented as a string.
 For example, the numbers "69", "88", and "818" are all strobogrammatic.
****************************************************************/
var isStroborgrammatic = function (str) {
  // 6=9 1=1 8=8 0=0
  var preHalf = str.substr(0,parseInt((str.length-1)/2)+1);
  var latHalf = "";
  for(var i=str.length-parseInt((str.length-1)/2)-1;i<str.length;i++) {
    latHalf=str[i]+latHalf;
  }
  console.log("preHalf,latHalf:",preHalf,latHalf);
  for(i=0;i<preHalf.length;i++) {
    if((preHalf[i]==latHalf[i] && (preHalf[i]=='0' || preHalf[i]=='1' || preHalf[i]=='8'))
    || (preHalf[i]=='6' && latHalf[i]=='9') || (preHalf[i]=='9' && latHalf[i]=='6')) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

var isStroborgrammatic2 = function (str) {
  var dict={'11':1,'88':1,'00':1,'69':1,'96':1};
  for(var i=0,j=str.length-1;i<=j;i++,j--) {
    if(!dict[str[i]+str[j]]) return false;
  }
  return true;
};
//test
var str = "8160918";
var algo = "algo";
console.time(algo);
var res = isStroborgrammatic2(str);
console.timeEnd(algo);
console.log("res:",res);