/**
 * Created by gxy on 2017/3/22.
 */
/**************************************************************************
 * 07.Reverse Integer.js
 * Reverse digits of an integer.

 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * click to show spoilers.
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 *
 * Subscribe to see which companies asked this question.
**************************************************************************/
/*

* @param {number} x
* @return {number}
*/
var reverse = function(x) {
    var res=0,positive=true;
    if(x===0) return x;
    if(x<0) {positive=false;x=-x}
    while(x!==0) {
        res = 10*res+parseInt(x%10);
        x=parseInt(x/10);
    }
    if(positive && res<0x7fffffff) return res;
    if(!positive && res<0x80000000) return -res;
    else return 0;
};

//test
var timeLog = "Algo";
var num=-87876126;
console.time(timeLog);
var res=reverse(num);
console.timeEnd(timeLog);
console.log("res:", res);