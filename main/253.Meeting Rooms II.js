/**
 * Created by gxy on 2017/6/15.
 */
/****************************************************************
 253.Meeting Rooms II
 Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

 For example,
 Given [[0, 30],[5, 10],[15, 20]],
 return 2.
 ****************************************************************/
var Heap = require('./BinaryHeap');
var roomNum = function (intervals) {
  intervals.sort(function (interval1, interval2) {
    return interval1[0] - interval2[0];
  });
  var minHeap = new Heap(function (x) {
    return x;
  });
  minHeap.push(intervals[0][1]);
  var res = 1;
  for (var i = 1; i < intervals.length; i++) {
    var minEnd = minHeap.pop();
    if (intervals[i][0] >= minEnd) {
      minEnd = intervals[i][1];
    } else {
      res++;
      minHeap.push(intervals[i][1]);
    }
    minHeap.push(minEnd);
  }
  return res;
};

//test
var intervals = [[0, 30], [5, 10], [15, 20]];
var algo = "algo";
console.time(algo);
var res = roomNum(intervals);
console.timeEnd(algo);
console.log("res:", res);