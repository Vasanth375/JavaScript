/**Pure functions are basic principle of functional programming
 * It avoids the changes in application state and also avoids changing the variables outside the scope
*/

// Im-pure function
let obj = {'a': 0};

let result = (input) =>{
    input.a = input.a+1
    return input.a;
}

let a = result(obj);
console.log(obj);
console.log(a)
// above function changed the obj global value outside of the scope

// pure funtions are that will not change the values outside of the scope of it's function
let pureResult = (input) =>{
    let output = input.a + 1;
    return output;
}

let b = pureResult(obj);
console.log(obj);
console.log(b);
// above funtion will not change the object and will just return the evaluted value

console.log(Array.prototype.map([1,2,3,4,5]));