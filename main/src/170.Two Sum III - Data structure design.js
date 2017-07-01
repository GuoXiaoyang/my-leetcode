/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 170.Two Sum III - Data structure design
 Design and implement a Two Sum class.
 It should support the following operations: add and find.
 add - Add the number to an internal data structure.
 find - Find if there exists any pair of numbers which sum is equal to the value.
 For example,
 add(1); add(3); add(5); find(4) -> true find(7) -> false
****************************************************************/
var twoSum = function () {
  this.sum = {};
  this.num = [];
};
twoSum.prototype = {
  add:function (number) {
    if(this.num.indexOf(number)==-1) {
      this.num.push(number);
      for(var i=0;i<this.num.length;i++) {
          this.sum[this.num[i]+number]=1;

      }
    } else {  //if exist
      this.sum[2*number]=1;
    }
  },
  find:function (number) {
    return this.sum[number]==1;
  }

};

//test
var twoData = new twoSum();
twoData.add(1);
twoData.add(3);
twoData.add(5);

console.log("twoData.find(4):",twoData.find(4));
console.log("twoData.find(7):",twoData.find(7));