// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once
// that condition is no longer true.

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while(i>=0){
  myArray.push(i);
  i--;
}
console.log(myArray);