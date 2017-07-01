/**
 * Created by gxy on 2017/6/3.
 */
/****************************************************************
 166. Fraction to Recurring Decimal
 Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

 If the fractional part is repeating, enclose the repeating part in parentheses.

 For example,

 Given numerator = 1, denominator = 2, return "0.5".
 Given numerator = 2, denominator = 1, return "2".
 Given numerator = 2, denominator = 3, return "0.(6)".
****************************************************************/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if(numerator===0) return "0";
  var flag=(numerator>0)?1:-1;
  flag*=((denominator>0)?1:-1);
  numerator=Math.abs(numerator);
  denominator=Math.abs(denominator);
  var res=(flag==-1)?"-":"";
  var integer;
  if(numerator>=denominator) {
    integer= parseInt(numerator/denominator);
  } else {
    integer=0;
  }
  console.log("integer:",integer);
  var integerStr=num2Str(integer);

  numerator=numerator-integer*denominator;
  if(numerator==0) {
    return res+integerStr.join("");
  }
  var fracArr=[],numerArr=[];
  var numer=numerator,frac;
  while(numerArr.indexOf(numer)==-1 && numer!==0) {
    numerArr.push(numer);
    if(numer*10>=denominator) {
      frac= parseInt(numer*10/denominator);
    } else {
      frac=0;
    }
    fracArr.push(frac);
    console.log("numerArr:",numerArr);
    console.log("fracArr:",fracArr);
    numer=numer*10-frac*denominator;
  }
  if(numer!==0) {
    console.log("numerArr.indexOf(numer):",numerArr.indexOf(numer));
    fracArr.splice(numerArr.indexOf(numer),0,"(");
    fracArr.push(")");
  }

  res+=integerStr.join("")+"."+fracArr.join("");
  return res;
};
function num2Str(num) {
  var res=[];
  if(num===0) {
    res.push(0);
    return res;
  }

  while(num!==0) {
    res.unshift(num%10);
    num=parseInt(num/10);
  }
  return res;
}

//test
var numer = 1,denom=214748364;
var algo = "algo";
console.time(algo);
var res = fractionToDecimal(numer,denom);
console.timeEnd(algo);
console.log("res:",res);