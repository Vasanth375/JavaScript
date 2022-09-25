// splice method is used to delete elements from the array and add elements to the in the deleted space
// parameter 1 is index of the element you want to delete and 2nd one is ending index and remaining is to add the items to the array
// this will modifies the array and returns the new array

function htmlColorNames(arr) {
    // Only change code below this line 
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond", "a", "b");
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));