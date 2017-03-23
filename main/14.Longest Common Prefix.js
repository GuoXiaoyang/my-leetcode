/**
 * Created by gxy on 2017/3/23.
 */

/******************************************************************
 14. Longest Common Prefix
 Write a function to find the longest common prefix string amongst an array of strings.
 ******************************************************************/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return "";
    if(strs.length == 1) return strs[0];
    strs.sort();
    var res="";
    for(var i=0;i<strs[0].length;i++) {
        if(strs[0][i] == strs[strs.length-1][i]) res+=strs[0][i];
        else break;
    }
    return res;
};

//test
var strs=["abac","abed","abyh","abab"];
var timeLog1 = "Algo1";
console.time(timeLog1);
var res=longestCommonPrefix(strs);
console.timeEnd(timeLog1);
console.log("res:", res);