/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 Given a collection of intervals, merge all overlapping intervals.

 For example,
 Given [1,3],[2,6],[8,10],[15,18],
 return [1,6],[8,10],[15,18].
****************************************************************/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if(intervals.length <=1) return intervals;
  // sort intervals according to the first num
  intervals.sort(function (val1, val2) {
    return val1.start-val2.start;
  });
  console.log("intervals:",intervals);
  var result = [], tmpInterval;
  var start=intervals[0].start, end=intervals[0].end;
  for(var i=1;i<intervals.length;i++) {
    if(intervals[i].start<=end) {
      end=Math.max(end,intervals[i].end);
    } else {
      tmpInterval = new Interval(start,end);
      result.push(tmpInterval);
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  tmpInterval = new Interval(start, end);
  result.push(tmpInterval);
  return result;

};




//test

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

function initIntervals(nums) {
  if(nums.length == 0 ) return null;
  if(nums[0].length != 2) return null;
  var interval, intervals=[];
  for(var i=0;i<nums.length;i++) {
    interval = new Interval(nums[i][0], nums[i][1]);
    intervals.push(interval);
  }
  return intervals;

}
var nums=[[1,4],[1,4]];
var intervals = initIntervals(nums);


var algo = "algo";
console.time(algo);
var res = merge(intervals);
console.timeEnd(algo);
console.log("res:",res);
