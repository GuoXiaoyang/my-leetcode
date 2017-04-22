/**
 * Created by gxy on 2017/4/22.
 */
/****************************************************************
163.Missing Ranges
 Missing Ranges
 Given a sorted integer array where the range of elements are <[i>lower, upper] inclusive, return its missing ranges.
 For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].
****************************************************************/
var getMissingRanges = function (nums) {
  var tmp,res=[];
  if(nums[0]==1) {
    tmp="0";
    res.push(tmp);
  } else if(nums[0]>1) {
    tmp=""+"0->"+(nums[0]-1);
    res.push(tmp);
  }
  var i=1,len=nums.length;
  console.log("res:",res);
  while(i<len) {
    if(nums[i]-nums[i-1]==2) {
      tmp=""+(nums[i-1]+1);
      res.push(tmp);
    } else if(nums[i]-nums[i-1]>2){
      tmp=""+(nums[i-1]+1)+"->"+(nums[i]-1);
      res.push(tmp);
    }
    i++;

  }
  if(nums[len-1]==98) {
    tmp="99";
    res.push(tmp);
  } else if(nums[len-1]<98) {
    tmp=(nums[len-1]+1)+"->99";
    res.push(tmp);
  }
  return res;
};


//test
var arr = [0, 1, 3, 50, 75];
var algo = "algo";
console.time(algo);
var res = getMissingRanges(arr);
console.timeEnd(algo);
console.log("res:",res);