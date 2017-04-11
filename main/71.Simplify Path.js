/**
 * Created by gxy on 2017/4/12.
 */

/**********************************************************************************************
 71. Simplify Path
 Given an absolute path for a file (Unix-style), simplify it.

 For example,
 path = "/home/", => "/home"
 path = "/a/./b/../../c/", => "/c"
 **********************************************************************************************/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var pathStr = path.split('/');
  console.log("pathStr", pathStr);
  var pathStack=[];
  for(var i=0;i<pathStr.length;i++) {
    if(pathStr[i] == '.' || pathStr[i]==='') continue;
    if(pathStr[i] == '..' && pathStack.length>0) {
      pathStack.pop();
    } else if(pathStr[i] != '..') {
      pathStack.push(pathStr[i]);
    }
  }

  console.log("pathStack", pathStack);
  var result=pathStack.length>0?pathStack.join('/'):'';
  return '/'+result;
};

//test
var path="/..";
var algo1 = "algo1";
console.time(algo1);
var res = simplifyPath(path);
console.timeEnd(algo1);
console.log("res:",res);
