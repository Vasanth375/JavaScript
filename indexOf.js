// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a 
// given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows 
//us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it 
//returns the position, or index, of that element, or -1 if the element does not exist on the array.
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array.

function quickCheck(arr, elem) {
    // Only change code below this line
    return (arr.indexOf(elem) == -1)?false:true;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));