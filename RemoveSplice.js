// splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers 
//which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed,
//so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to 
//begin removing elements, while the second parameter indicates the number of elements to delete. 

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);