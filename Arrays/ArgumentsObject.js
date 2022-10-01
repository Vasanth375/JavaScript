function myFunction(){
    // arguments is an array like object accessible inside a function that contains the values passed at function call
    // arguments is not an array it's an object but it has similar properties same as arrays except it doesn't have pop() method

    for (const iterator of arguments) {
        console.log(iterator);
    }
    console.log(arguments.length)   // to find the length of the object
    console.log(typeof arguments)    // to get the typeof the arguments
    console.log(arguments.callee)   // to know which function is accessed this arguments object

    let arg_Array = [...arguments]; // we can use spread syntax to convert arguments into array
    // we can also use Array.from(arguments) 
    
    console.log(arg_Array);
}

myFunction(12, "vasnth", 14, 15, 11, 10, 68)