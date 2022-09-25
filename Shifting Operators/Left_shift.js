// left shift operator is used to shift the bits to the left side only in certain amount of bits only
// (value) << (shift Amount)

let a = 5;
console.log(a << 1);    // for simplicity we took minimum values
// 5 - 0.000101
// After shifted
// 10 - 0.001010

// LSB - sign  - +/-
// MSB - value - any integer
let b = -10;
console.log(b = b << 2);
// -10 - 1.001010
// here a negtive sign is add to the value, after the left shift operator applid sign remains same not changed
