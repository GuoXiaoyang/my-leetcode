/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 599. Minimum Index Sum of Two Lists
 Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

 You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

 Example 1:
 Input:
 ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
 Output: ["Shogun"]
 Explanation: The only restaurant they both like is "Shogun".
 Example 2:
 Input:
 ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 ["KFC", "Shogun", "Burger King"]
 Output: ["Shogun"]
 Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 Note:
 The length of both lists will be in the range of [1, 1000].
 The length of strings in both lists will be in the range of [1, 30].
 The index is starting from 0 to the list length minus 1.
 No duplicates in both lists.
****************************************************************/
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var map={},min=Number.MAX_VALUE;
  var res=[];
  for(var i=0;i<list1.length;i++) {
    if(!map[list1[i]]) map[list1[i]]=i;
  }
  for(i=0;i<list2.length;i++) {
    if(map[list2[i]]!=undefined && min>map[list2[i]]+i) {
      min=map[list2[i]]+i;
      res=[];
      res.push(list2[i]);
    } else if(map[list2[i]]!=undefined && min==map[list2[i]]+i) {
      res.push(list2[i]);
    }
  }
  return res;
};

//test
var list1=["Shogun", "Tapioca Express", "Burger King", "KFC"];
var list2=["KFC", "Shogun", "Burger King"];
var algo = "algo";
console.time(algo);
var res = findRestaurant(list1,list2);
console.timeEnd(algo);
console.log("res:",res);