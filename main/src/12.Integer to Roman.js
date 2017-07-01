/**
 * Created by gxy on 2017/3/23.
 */
/*****************************************************************
 12. Integer to Roman
 Given an integer, convert it to a roman numeral.

 Input is guaranteed to be within the range from 1 to 3999.

 Subscribe to see which companies asked this question.
 *****************************************************************/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numArr=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var res="";
    for(var i=0;i<numArr.length;i++) {
        while(num>=numArr[i]) {
            res+=roman[i];
            num-=numArr[i];

        }
    }
    return res;
};

//test
var arr=2976;
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=intToRoman(arr);
console.timeEnd(timeLog1);
console.log("res:", res);