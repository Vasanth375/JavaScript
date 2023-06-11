// Day 5.1 - javascript problems

function sides(literals, ...expressions) {
    // literals are the expressions about Area and perimeter
    // expressions are the numbers representing inside the backticks
    let m = Math.pow(expressions[1], 2) - 16 * expressions[0];
    let for1 = (expressions[1] + Math.sqrt(m)) / 4;
    let for2 = (expressions[1] - Math.sqrt(m)) / 4;
    return [for1, for2].sort();
}

// Tagged template literals allow us to use a function to modify the output of a template literal. In this construct:

// The first argument contains an array of string literals.
// The subsequently processed arguments are the values of the substitution expressions.
// After processing all the arguments, the function returns the manipulated string.

const [a, b] = sides`The area is: ${140 * 48}.\nThe perimeter is: ${
  2 * (140 + 48)
}.`;

console.log([a, b]);
