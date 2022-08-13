// array can store multiple data items
// this is a single dimensional array
let myArray = ["vasanth", 10];

// multi-dimensional array
let multiArray = [["Bulls", 23], ["White Sox", 45]];

// an easiest way to append data to the end of an array is via the push() function
const myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3]);

// .pop() removes the last element from an array and returns that element
let k=myArray1.pop();

// .shift() method deletes first element of the array
const array = [1,2,3,4,5];
let m=array.shift();        // deletes array 1 

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array,
// unshift() adds the element at the beginning of the array.
array.unshift(m);   // adding m element from front

// creating multidimensional array assume there's some data in the sub arrays
const myList=[
    [],
    [],
    []
];
