/**
 * The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where 
 * equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of 
 * values while comparing.
 */
// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(10));
  console.log(testNotEqual('99'));

/*--------------------------------------------------------------------------------------------- */

/**
 * The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and 
 * returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.
 */

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
 console.log(testStrictNotEqual(10));
 console.log(testStrictNotEqual(17));