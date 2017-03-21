/**
 * Created by gxy on 2017/3/21.
 */

/*********************************************************************
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
*  (you may want to display this pattern in a fixed font for better legibility)
*
* P   A   H   N
* A P L S I I G
* Y   I   R
* And then read line by line: "PAHNAPLSIIGYIR"
* Write the code that will take a string and make this conversion given a number of rows:
*
*     string convert(string text, int nRows);
* convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *********************************************************************/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, numRows) {
    var len=s.length;
    var circle =numRows*2-2,interval=circle;
    var res="";
    if(len<numRows) return s;
    for(var i=0;i<numRows;i++) {
        interval =interval-(i>0?2:0);
        var j=i;
        var tpStr=s[i];
        while((j+interval<len && interval>0) || j+circle<len){
            if(j+interval<len && interval>0) {

                tpStr=tpStr+s[j+interval];
                j+=interval;
                console.log(s[j]);
            }
            if(j+circle-interval<len && circle-interval>0) {
                tpStr=tpStr+s[j+circle-interval];
                j+=circle-interval;
                console.log(s[j]);
            }


        }
        res+=tpStr;

    }
    return res;
};


var convert2 = function (s,numRows) {
    if(numRows==1) return s;
    var storeArr = [],index=0,down=true;
    for(var i=0;i<numRows;i++) {
        storeArr.push("");
    }
    for(i=0;i<s.length;i++) {
        storeArr[index]+=s[i];
        index=(down?index+1:index-1);
        if(index==numRows-1) down=false;
        if(index===0) down=true;
    }
    var res=storeArr.reduce(function (prev,cur,index,array) {
        return prev+cur;
    });
    return res;
};
//test
var str="PAYPALISHIRING";
console.time("Algo1");
var res1=convert1(str,16);
console.log("res1:",res1);
console.timeEnd("Algo1");

console.time("Algo2");
var res2=convert2(str,16);
console.log("res2:",res2);
console.timeEnd("Algo2");