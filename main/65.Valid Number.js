/**
 * Created by gxy on 2017/3/22.
 */
/***************************************************************
* Validate if a given string is numeric.
*
* Some examples:
* "0" => true
* " 0.1 " => true
* "abc" => false
* "1 a" => false
* "2e10" => true
* Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.
****************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

  //1.trim: remove spaces
  s = s.trim();
  //2.sign
  var i=0;
  if(s[i]==='+' || s[i]==='-') {
    i++;
  }

  //3.find points
  var num=0, pointNum=0;
  for(;i<s.length;i++) {
    if(s[i]>='0' && s[i]<=9) {
      num++;
    } else if(s[i]=='.') {
      pointNum++;
    } else {
      break;
    }
  }
  if(num <=0 || pointNum>1) return false;

  //4.find e
  if(i<s.length && s[i] === 'e') {
    i++;
    if(s[i]==='+' || s[i]==='-') {
      i++;
    }
    num=0;
    while(i<s.length) {
      if(s[i]>='0' && s[i]<='9') {
        num++;
        i++;
      } else {
        break;
      }
    }
    console.log("i:",i);
    if(num<1) return false;
  }

  return i==s.length;
};

//test
var str = "3.5e+3.5e+3.5";
var algo = "algo";
console.time(algo);
var res = isNumber(str);
console.timeEnd(algo);
console.log("res:",res);