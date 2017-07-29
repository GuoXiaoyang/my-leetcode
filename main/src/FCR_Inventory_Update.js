// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a 
// fresh delivery. Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned 
// inventory array should be in alphabetical order by item.
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    //convert arr1 to map
    let map = {};
    for(let i=0; i<arr1.length; i++) {
      map[arr1[i][1]] = arr1[i][0];
    }
    // update or insert
    for(let i=0; i<arr2.length; i++) {
    	if(map[arr2[i][1]] !== undefined) {
    		map[arr2[i][1]] += arr2[i][0];
    	} else map[arr2[i][1]] = arr2[i][0];
    }
  
    // convert back
    let res = [];
    for(let x in map) {
      res.push([map[x],x]);
    }
    return res.sort((v1,v2) => v1[1]>v2[1]);
}