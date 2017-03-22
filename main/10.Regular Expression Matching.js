/**
 * Created by gxy on 2017/3/23.
 */
/***************************************************************************
10. Regular Expression Matching
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

    The matching should cover the entire input string (not partial).

The function prototype should be:
    bool isMatch(const char *s, const char *p)

Some examples:
    isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*******************************************************************************/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function(s, p) {
    if(s.length==0 && checkEmpty(p)) return true;
    if(p.length == 0) return false;
    var m=s.length,n=p.length,i=0,j=0;

    if(p.length>1 && p.charAt(j+1)=='*') {
        return (isMatch1(s,p.substring(2)) || (s.charAt(i)==p.charAt(j) || s.charAt(i)=='.')
        && isMatch1(s.substring(1),p));
    }else {
        return ((s.charAt(i)==p.charAt(j) || s.charAt(i)=='.')
        && isMatch1(s.substring(1),p.substring(1)));
    }

};

function checkEmpty(p) {
    if(p.length===0) return true;
    if(p.length%2!==0) return false;
    var flag=true;
    for(i=1;i<p.length;i+=2) {
        flag=flag&&(p.charAt(i)=='*');
        if(!flag) return false;
    }
    return flag;
}

var isMatch2 = function(s,p) {
    var m=s.length,n=p.length,i=0,j=0;
    var arr=[];
    for(i=0;i<m+1;i++) {
        arr[i]=[];
        for(j=0;j<n+1;j++) {
            arr[i][j]=false;
        }
    }

    arr[0][0]=true;
    for(j=1;j<n+1;j++) {
        arr[0][j]=(j>1 && p[j-1]=='*' && arr[0][j-2]);
    }
    for(i=1;i<m+1;i++) {
        for(j=1;j<n+1;j++) {
            if(p[j-1]=='*') {
                arr[i][j] = arr[i][j-2] || (s[i-1]==p[j-2] || p[j-2]=='.') && arr[i-1][j];

            } else {
                arr[i][j] = (s[i-1]==p[j-1] || p[j-1]=='.') && arr[i-1][j-1];
            }
        }
    }
    return arr[m][n];
};

//test
var s="aafb", p="c*a*b";
var timeLog1 = "Algo1";
console.time(timeLog1);
var res1=isMatch1(s,p);
console.timeEnd(timeLog1);
console.log("res1:", res1);

var timeLog2 = "Algo2";
console.time(timeLog2);
var res2=isMatch2(s,p);
console.timeEnd(timeLog2);
console.log("res2:", res2);