/**
 * Created by gxy on 2017/3/19.
 */

/*******************************************************************

* 3. Longest Substring Without Repeating Characters
*
* Given a string, find the length of the longest substring without repeating characters.
*
* Examples:
* Given "abcabcbb", the answer is "abc", which the length is 3.
* Given "bbbbb", the answer is "b", with the length of 1.
* Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*
****************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    var start=0,end=0;
    var len=1, maxLen=1;
    var index;
    for(var i=1;i<s.length;i++) {
        index = s.substring(start,i).indexOf(s[i]);
        if(index == -1) {
            len++;
            maxLen = len>maxLen?len:maxLen;
        } else {
            start = index+1+start;
            len=i-start+1;
        }
    }
    return maxLen;

};

//test
var str = "abcabcbb";
str = "abb";
var res = lengthOfLongestSubstring(str);
console.log(res);