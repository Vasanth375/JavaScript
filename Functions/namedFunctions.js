/**Named Functions and Unnamed functions(anonymous functions)
 * the function can be accessed using the variable only
 */

// this is named function
var intSum = function sum(a, b){
    return a+b;
};

// Unnamed functions: Anonymous function
var stringConcate = function(a, b){
    return a+b;
};

console.log(intSum(10, 20));
console.log(stringConcate("Hello,", "World"));
