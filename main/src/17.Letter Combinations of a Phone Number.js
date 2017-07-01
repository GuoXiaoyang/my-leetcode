/**
 * Created by gxy on 2017/3/23.
 */
/*******************************************************************
 17. Letter Combinations of a Phone Number
 Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.

 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *******************************************************************/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [];
    var phoneCharacter = ['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    var res=[""];
    for(var i=0;i<digits.length;i++) {
        var temp=[],str=phoneCharacter[digits[i]];
        for(var j=0;j<res.length;j++) {
            for(var k=0;k<str.length;k++) {
                temp.push(res[j]+str[k]);
            }

        }
        res=temp;
    }
    return res;
};


//test
var di="23";
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=letterCombinations(di);
console.timeEnd(timeLog1);
console.log("res:", res);