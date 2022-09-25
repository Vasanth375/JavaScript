console.log( 42 % 10); // 2
console.log( 42 % -10); // 2
console.log(-42 % 10); // -2
console.log(-42 % -10); // -2
console.log(-40 % 10); // -0
console.log( 40 % 10); // 0

// check if a number is divisible by another number or not
let a = 1;
if(a % 2 == 0){
    console.log(a+" is divisible");
}
else{
    console.log("This is another number")
}