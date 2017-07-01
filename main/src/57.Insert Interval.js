/**
 * Created by gxy on 2017/4/9.
 */

/****************************************************************
 57. Insert Interval
 Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

 You may assume that the intervals were initially sorted according to their start times.

 Example 1:
 Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

 Example 2:
 Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

 This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  intervals.sort(function (val1,val2) {
    return val1.start-val2.start;
  });
  var start=newInterval.start, end=newInterval.end;
  var first=intervals.length,last=-1;
  for(var i=0;i<intervals.length;i++) {
    if(start<=intervals[i].end) {
      first=i;
      start=Math.min(intervals[i].start,start);
      break;
    }
  }
  for(i=intervals.length-1;i>=0;i--) {
    if(end>=intervals[i].start) {
      last=i;
      end=Math.max(intervals[i].end,end);
      break;
    }
  }
  console.log("first,last:",first,last);
  console.log("start,end:",start,end);
  console.log("intervals:",intervals);
  
  intervals.splice(first,last-first+1,new Interval(start,end));
  return intervals;

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
var nums=[[1,5]];
var intervals = initIntervals(nums);
var newInterval = new Interval(6,8);

var algo = "algo";
console.time(algo);
var res = insert(intervals, newInterval);
console.timeEnd(algo);
console.log("res:",res);
