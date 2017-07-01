/**
 * Created by gxy on 2017/3/23.
 */
/*************************************************************************************
 08.String to Integer (atoi).js
 Implement atoi to convert a string to an integer.

 Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
 Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
 *************************************************************************************/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //discard all leading whitespaces
    if(!str) return 0;
    var validStr=str.trim();
    //sign of the number
    var sign = true,i=0;
    if(validStr[i]=='+' || validStr[i]=='-') {
        sign=(validStr[i++]=='+');
    }
    //overflow && invalid input
    var MAX_INT = 0x7fffffff, MIN_INT=(MAX_INT+1);
    var res=0;
    for(;i <validStr.length;i++) {
        if(validStr[i]>='0' && validStr[i]<='9') {
            res=parseInt(validStr[i])+res*10;
        } else {
            break;
        }
    }
    if(sign) return ((res<MAX_INT)?res:MAX_INT);
    if(!sign) return ((res<MIN_INT)?-res:-MIN_INT);

};
//test
var timeLog = "Algo";
var str="  -87876126";
console.time(timeLog);
var res=myAtoi(str);
console.timeEnd(timeLog);
console.log("res:", res);
