/**
 * Created by gxy on 2017/6/16.
 */
function BinaryHeap(scoreFunction) {
  this.data = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
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
    var element = this.data[n],
      score = this.scoreFunction(element);
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2 - 1),
        parent = this.data[parentN];
      if (score >= this.scoreFunction(parent)) break;
      this.data[parentN] = element;
      this.data[n] = parent;
      n = parentN;
    }
  },
  sinkdown: function (n) {
    var element = this.data[n],
      length = this.size(),
      score = this.scoreFunction(element);

    while (true) {
      var swapN = null;
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      if (child1N < length) {
        var child1 = this.data[child1N],
          child1Score = this.scoreFunction(child1);
        if (score > child1Score) {
          swapN = child1N;
        }

      }
      if (child2N < length) {
        var child2 = this.data[child2N],
          child2Score = this.scoreFunction(child2);
        if (child2Score < (swapN===null?score:child1Score)) {
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

module.exports=BinaryHeap;