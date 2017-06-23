/**
 * Created by gxy on 2017/6/22.
 */
//minHeap;
function PriorityQueue(comparator) {
  this.data = [];
  this.comparator = comparator;
}

PriorityQueue.prototype = {
  push: function (element) {
    // console.log("element:", this.scoreFunction(element));
    this.data.push(element);
    this.bubbleUp(this.size() - 1);
  },
  pop: function () {
    if (this.size() < 1) return null;
    var result = this.data[0];
    var end = this.data.pop();
    if(this.size()>0) {
      this.data[0] = end;
      this.sinkdown(0);
    }

    return result;
  },
  remove: function (node) {
    for (var i = 0; i < this.size(); i++) {
      if (this.data[i] !== node) continue;
      var end = this.data.pop();
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == this.size() - 1) break;
      this.data[i] = end;
      this.bubbleUp(i);
      this.sinkdown(i);
      break;
    }
  },
  size: function () {
    return this.data.length;
  },

  bubbleUp: function (n) {
    var element = this.data[n];
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2 - 1),
        parent = this.data[parentN];
      if (this.comparator(element,parent)) break;
      this.data[parentN] = element;
      this.data[n] = parent;
      n = parentN;
    }
  },
  sinkdown: function (n) {
    var element = this.data[n],
      length = this.size();

    while (true) {
      var swapN = null;
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      if (child1N < length) {
        var child1 = this.data[child1N];
        if (this.comparator(element,child1)) {
          swapN = child1N;
        }

      }
      if (child2N < length) {
        var child2 = this.data[child2N];
        if (!this.comparator(child2,swapN===null?element:child1)) {
          swapN = child2N;
        }
      }

      if (swapN === null) break;
      this.data[n] = this.data[swapN];
      this.data[swapN] = element;
      n = swapN;
    }
  },
  print: function () {
    for (var i = 0; i < this.size(); i++) {
      console.log(this.scoreFunction(this.data[i]), "->");
    }
  }

};

module.exports=PriorityQueue;