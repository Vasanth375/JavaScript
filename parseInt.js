// The parseInt() function parses a string and returns an integer.
// If the first character in the string can't be converted into a number, then it returns NaN.

function convertToInteger(str) {
    return parseInt(str);
  }
  
  console.log(convertToInteger("56"));

// parseInt can also take two arguments one for parsing item and second one is radix(base) used you want to convert into specific base
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies 
// the base of the number in the string. The radix can be an integer between 2 and 36.
function convertToIntegerWithRadix(str) {
    return parseInt(str, 2);
  }
  
  console.log(convertToIntegerWithRadix("10011"));