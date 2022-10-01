// The bitwise XOR (exclusive or) operation a ^ b places a 1 only if the two bits are different. Exclusive or means either
// one or the other, but not both.
// real world example of swaping two integer values without additional memory allocation
let a = 10, b = 20;
a = a ^ b
b = a ^ b
a = a ^ b
console.log(a, b)