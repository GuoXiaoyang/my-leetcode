/**
 * Created by gxy on 2017/3/23.
 */

/******************************************************************
 13. Roman to Integer
 Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.

 Subscribe to see which companies asked this question.
 ******************************************************************/

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    var roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    var res=roman[s[s.length-1]];
    for(var i=s.length-2;i>=0;i--) {
        if(roman[s[i]]>=roman[s[i+1]]) {
            res+=roman[s[i]];
        }else {
            res-=roman[s[i]];
        }
    }
    return res;
};

//test
var str="MMCMLXXV";
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=romanToInt(str);
console.timeEnd(timeLog1);
console.log("res:", res);