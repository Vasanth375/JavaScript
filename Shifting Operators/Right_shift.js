// Right shift is the sign propagating operator means sign keeps the initial operand.
// The right shift operator shifts the value the specified shift amount of bits to the right.
// the new bits coming from the right is based on the sign only if the sign is plus then 0's are added , if minus 1's are added
let a = 10;
console.log(a >> 1);
// 10 - 0.001010
// after right shift
//  5 - 0.000101

let b = -10;
console.log(b >> 1)