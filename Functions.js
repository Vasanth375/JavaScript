// In JavaScript, we can divide up our code into reusable parts called functions
// You can call or invoke this function by using its name followed by parentheses
// All of the code between the curly braces will be executed every time the function is called.
function reusableFunction (){
    console.log("Hi World");
}
reusableFunction()

/*
 * Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
 * When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") 
 * into a function when it is called are known as arguments.
 */

function functionWithArgs(para1, para2){
    console.log(para1+para2);
  }
functionWithArgs(1,2);
/**
 * We can pass values into a function with arguments. 
 * You can use a return statement to send a value back out of a function. */
 function timesFive(num){
  return num * 5;
}
timesFive(2)

