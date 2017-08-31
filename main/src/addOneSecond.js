/**
 * 编写一个函数，要求输入年月日时分秒，输出该年月日时分秒的下一秒。
 * 如输入2004年12月31日23时59分59秒，则输出2005年1月1日0时0分0秒。
 * @author: GuoXiaoyang <guoxiaoyang0925@gmail.com>
 * @param {string} beforeDate - input beforeDate: should be 2004年12月31日23时59分59秒 format 
 * @return {string} afterbeforeDate - output beforeDate: 1s after the input beforeDate 
 */
function addOneSecond(beforeDate) {
  const reg = /^(\d{4})\u5E74(\d{2})\u6708(\d{2})\u65E5(\d{2})\u65F6(\d{2})\u5206(\d{2})\u79D2$/;
  const params = reg.exec(beforeDate);
  if(params === null) {
    return '';
  }  
  // const params = beforeDate.trim().split(/\s|-|\/|:/).map(val => Number.parseInt(val));
  params[2] -= 1;
  const before = Date.UTC.apply(this,params.slice(1));
  // afterDate = beforeDate + 1000ms
  const after = new Date(before + 1000);
  return `${after.getUTCFullYear()}年${after.getUTCMonth()+1}月${after.getUTCDate()}日\
${after.getUTCHours()}时${after.getUTCMinutes()}分${after.getUTCSeconds()}秒`;
}


// test
// const beforeDate = '2004-12-31 23:59:59';
const beforeDate = '2004年12月31日23时59分59秒';
console.log('addOneSecond(beforeDate):',addOneSecond(beforeDate));