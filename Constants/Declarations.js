/**
 * There are four principle ways to declare variable in Javascript: 
 * var, let, const and a bare declaration creates global variable
 * var - can be used if we want to create function-scope variable
 * let - is used if we want to create a block-level variable
 * const - is used if we want to create a block-level variable, but one thing is we can't modify this variable
 * about const, we can't declare constant without initialization, it will raise syntax error
 * A bare declaration creates a global variables
 */

var fscope = 'boom';     //function-scope variable
let blockScope = 'A-team';      // block scope variable
const noModify = "This can't be modified";  // Can't be modified

// when we declare var, let variables but it's default value is undefined
    