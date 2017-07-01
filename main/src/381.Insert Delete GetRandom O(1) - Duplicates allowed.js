/**
 * Created by gxy on 2017/5/29.
 */
/****************************************************************
 381. Insert Delete GetRandom O(1) - Duplicates allowed
 Design a data structure that supports all following operations in average O(1) time.

 Note: Duplicate elements are allowed.
 insert(val): Inserts an item val to the collection.
 remove(val): Removes an item val from the collection if present.
 getRandom: Returns a random element from current collection of elements.
 The probability of each element being returned is linearly related to the number of same value the collection contains.
 Example:

 // Init an empty collection.
 RandomizedCollection collection = new RandomizedCollection();

 // Inserts 1 to the collection. Returns true as the collection did not contain 1.
 collection.insert(1);

 // Inserts another 1 to the collection. Returns false as the collection contained 1.
 Collection now contains [1,1].
 collection.insert(1);

 // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
 collection.insert(2);

 // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
 collection.getRandom();

 // Removes 1 from the collection, returns true. Collection now contains [1,2].
 collection.remove(1);

 // getRandom should return 1 and 2 both equally likely.
 collection.getRandom();
****************************************************************/

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.dictData={};
  this.data=[];
};

/**
 * Inserts a value to the collection. Returns true
 * if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  var flag;
  if(this.dictData[val]!==undefined) {
    flag=false;
  } else {
    this.dictData[val]=[];
    flag=true;
  }
  var ele=[],len=this.data.length;
  ele.push(val);
  ele.push(this.dictData[val].length);
  this.data.push(ele);
  this.dictData[val].push(len);
  return flag;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if(this.dictData[val]===undefined) return false;
  var last=this.data[this.data.length-1];
  var targetIndex=this.dictData[val][this.dictData[val].length-1];
  this.dictData[last[0]][last[1]]=targetIndex;
  this.data[targetIndex]=last;
  this.data.pop();
  if(this.dictData[val].length==1) {
    delete this.dictData[val];
  } else {
    this.dictData[val].pop();
  }
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  var len=this.data.length;
  var randomIndex = Math.floor(Math.random()*len);
  return this.data[randomIndex][0];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//test
// Init an empty set.
var randomSet = new RandomizedCollection();
randomSet.insert(10);
randomSet.insert(10);
randomSet.insert(20);
randomSet.insert(20);
randomSet.insert(30);
randomSet.insert(30);

console.log("randomSet.data:",randomSet.data);
console.log("randomSet.dictData:",randomSet.dictData);
randomSet.remove(10);
console.log("randomSet.data:",randomSet.data);
console.log("randomSet.dictData:",randomSet.dictData);
randomSet.remove(10);
console.log("randomSet.data:",randomSet.data);
console.log("randomSet.dictData:",randomSet.dictData);
randomSet.remove(30);
randomSet.remove(30);
console.log("randomSet.dictData:",randomSet.dictData);
console.log("randomSet.data:",randomSet.data);


/*
// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log("randomSet.insert(1):",randomSet.insert(1));
console.log("randomSet.data:",randomSet.data);
// Inserts another 1 to the collection. Returns false as the collection contained 1.
// Collection now contains [1,1].
console.log("randomSet.insert(1):",randomSet.insert(1));
console.log("randomSet.data:",randomSet.data);

// Inserts 2 to the set, returns true. Set now contains [1,1,2].
console.log("randomSet.insert(2):",randomSet.insert(2));
console.log("randomSet.data:",randomSet.data);
// getRandom should return either 1 or 2 randomly.
console.log("randomSet.getRandom():",randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log("randomSet.remove(1):",randomSet.remove(1));
console.log("randomSet.data:",randomSet.data);

// Since 2 is the only number in the set, getRandom always return 2.
console.log("randomSet.getRandom():",randomSet.getRandom());*/
