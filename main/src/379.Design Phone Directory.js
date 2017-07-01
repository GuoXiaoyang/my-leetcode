/**
 * Created by gxy on 2017/6/6.
 */
/****************************************************************
 379.Design Phone Directory
 Design a Phone Directory which supports the following operations:
 get: Provide a number which is not assigned to anyone.
 check: Check if a number is available or not.
 release: Recycle or release a number.
 Example:
 // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
 PhoneDirectory directory = new PhoneDirectory(3);
 // It can return any available phone number. Here we assume it returns 0.
 directory.get();
 // Assume it returns 1.
 directory.get();
 // The number 2 is available, so return true.
 directory.check(2);
 // It returns 2, the only number that is left.
 directory.get();
 // The number 2 is no longer available, so return false.
 directory.check(2);
 // Release number 2 back to the pool.
 directory.release(2);
 // Number 2 is available again, return true.
 directory.check(2);
****************************************************************/
var PhoneDirectory = function (totalNumber) {
  this.dict={};
  for(var i=0;i<totalNumber;i++) {
    this.dict[i]=1;
  }

};

PhoneDirectory.prototype={
  get:function () {
    var res;
    for(var item in this.dict) {
      res=item;
      break;
    }
    delete this.dict[item];
    return res;
  },
  check:function (number) {
    if(this.dict[number]>0) return true;
    return false;
  },
  release:function (number) {
    this.dict[number]=1;
  }
};

//test
var directory=new PhoneDirectory(3);

console.log("directory.get():",directory.get());
console.log("directory.get():",directory.get());
console.log("directory.check(1):",directory.check(1));
directory.release(1);
console.log("directory.check(1):",directory.check(1));

