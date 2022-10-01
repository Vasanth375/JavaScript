// While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new 
//spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. 
//The spread syntax simply looks like this: ...

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

// Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, 
// at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and 
// at the start of another. 

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

// Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.