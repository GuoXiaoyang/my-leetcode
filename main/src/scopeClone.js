class Scope {
  constructor() {
      this.name = 'test';
  }
  clone() {
    let copy = {};
    copy.__proto__ = this;
    return copy;  
  }
}

let sup = new Scope();
let sub = sup.clone();
console.log('sup.name',sup.name);
console.log('sub.name:',sub.name);
sup.type = 'haha';
console.log('sup.type',sup.type);
console.log('sub.type:',sub.type);

sup.type = 'gaga';
console.log('sup.type',sup.type);
console.log('sub.type:',sub.type);

sub.type = 'new haha';
console.log('sup.type',sup.type);
console.log('sub.type:',sub.type);

