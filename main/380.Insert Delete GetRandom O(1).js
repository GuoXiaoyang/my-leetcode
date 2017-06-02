/**
 * Created by gxy on 2017/5/29.
 */
/****************************************************************
 380.Insert Delete GetRandom O(1)
 Design a data structure that supports all following operations in average O(1) time.

 insert(val): Inserts an item val to the set if not already present.
 remove(val): Removes an item val from the set if present.
 getRandom: Returns a random element from current set of elements.
 Each element must have the same probability of being returned.
 Example:

 // Init an empty set.
 RandomizedSet randomSet = new RandomizedSet();

 // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 randomSet.insert(1);

 // Returns false as 2 does not exist in the set.
 randomSet.remove(2);

 // Inserts 2 to the set, returns true. Set now contains [1,2].
 randomSet.insert(2);

 // getRandom should return either 1 or 2 randomly.
 randomSet.getRandom();

 // Removes 1 from the set, returns true. Set now contains [2].
 randomSet.remove(1);

 // 2 was already in the set, so return false.
 randomSet.insert(2);

 // Since 2 is the only number in the set, getRandom always return 2.
 randomSet.getRandom();
****************************************************************/
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.dictData = {};
  this.data = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.dictData[val]!==undefined) return false;
  this.dictData[val] = this.data.length;
  this.data.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.dictData[val] === undefined) return false;
  if(this.dictData[val] < this.data.length-1) {
    var last = this.data[this.data.length-1];
    this.data[this.dictData[val]] = last;
    this.dictData[last] = this.dictData[val];
  }

  this.data.pop();
  delete this.dictData[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  var len = this.data.length;
  var randomIndex = Math.floor(len*Math.random());
  return this.data[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */



//test
// Init an empty set.
var randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log("randomSet.insert(1):",randomSet.insert(1));
console.log("randomSet.data:",randomSet.data);
// Returns false as 2 does not exist in the set.
console.log("randomSet.remove(2):",randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log("randomSet.insert(2):",randomSet.insert(2));
console.log("randomSet.data:",randomSet.data);
// getRandom should return either 1 or 2 randomly.
console.log("randomSet.getRandom():",randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log("randomSet.remove(1):",randomSet.remove(1));
console.log("randomSet.data:",randomSet.data);
// 2 was already in the set, so return false.
console.log("randomSet.insert(2):",randomSet.insert(2));
console.log("randomSet.data:",randomSet.data);
// Since 2 is the only number in the set, getRandom always return 2.
console.log("randomSet.getRandom():",randomSet.getRandom());