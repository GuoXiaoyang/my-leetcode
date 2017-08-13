/**
 * Created by gxy on 2017/8/1.
 */
/** **************************************************************
 //共num首歌，每首歌长度length(s)，CD录音长CDlength(s)，每首歌在CD上需要至少相隔1s
 //且由于13不吉利，每张CD不能存放13的倍数首歌，输出至少需要的CD数量
****************************************************************/


function numOfCD(num,length,CDlength) {
  var singleNum = parseInt((CDlength+1)/(length+1));
  if(singleNum%13 === 0) singleNum -= 1;
  var ans = Math.ceil(num/singleNum);
  var left = num-parseInt(num/singleNum)*singleNum;
  if(left>0 && left%13 === 0) ans += 1;
  return ans
}

console.log('numOfCD(7,2,6):',numOfCD(7,2,6));