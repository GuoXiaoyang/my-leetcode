/**
 * 
 * @authors GuoXiaoyang (guoxiaoyang0925@gmail.com)
 * @date    2017-07-28 20:08:35
 * @version $Id$
 */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return (str[0].toLowerCase()+str.substr(1)).replace(/[_\s][A-Za-z]/g,v => '-'+v[v.length-1].toLowerCase()).replace(/([A-Z])/g,'-$1').toLowerCase();
}
