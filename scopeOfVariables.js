/**
 * In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope.
 *  This means, they can be seen everywhere in your JavaScript code.Variables which are declared without the let or const keywords are 
 * automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. 
 * You should always declare your variables with let or const.
 */

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

//      LOCAL VARIABLE
/**
 * Variables which are declared within a function, as well as the function parameters, have local scope. 
 * That means they are only visible within that function.
 */
 function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log('outside myLocalScope', myVar);


// what if the case is both Global and Local variables with same names
/**
 * It is possible to have both local and global variables with the same name. 
 * When you do this, the local variable takes precedence over the global variable.
 */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());