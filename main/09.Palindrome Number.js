/**
 * Created by gxy on 2017/3/23.
 */

/********************************************************************************************
 09.Palindrome Number
 Determine whether an integer is a palindrome. Do this without extra space.

 click to show spoilers.
 Some hints:
 Could negative integers be palindromes? (ie, -1)

 If you are thinking of converting the integer to string, note the restriction of using extra space.

 You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

 There is a more generic way of solving this problem.

 Subscribe to see which companies asked this question.
 ******************************************************************************************/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x===0) return true;
    if(x<0 || x%10===0) return false;
    var anotherHalf = 0;
    while(x>anotherHalf) {
        anotherHalf = anotherHalf*10+x%10;
        x=parseInt(x/10);
    }
    return (x==anotherHalf)||(x==parseInt(anotherHalf/10));

};

//test
var timeLog = "Algo";
var num=12321;
console.time(timeLog);
var res=isPalindrome(num);
console.timeEnd(timeLog);
console.log("res:", res);