/**
 * In Computer Science a queue is an abstract Data Structure where items are kept in order.
 * New items can be added at the back of the queue and old items are taken off from the front of the queue.
 */

 function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);         // adds the item at end
    item = arr.shift();     // removes the data at end store in item
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));