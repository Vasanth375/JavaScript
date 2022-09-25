let obj = {a : 1, b : 2 , c : 3, d : 4};

// using freeze method of object constructor freezing the obj means we can't modify the object once freezed
Object.freeze(obj)
obj.a = 3
console.log(obj);    // not effected on the obj

// using spread operator(...) we can copy the entire object and we can also have right to modify the content
const {...cloneOne} = obj;
cloneOne.a = 4;
console.log(cloneOne)


// deep object cloning: complete copy of the object (inside the properties with values also)
// we can do this using JSON(Javascript Object Notation)
// JSON.parse() -> object
// Above method Converts a JavaScript Object Notation (JSON) string into an object.

// JSON.stringify() -> JSON format
// converts JS value to JSON value
let JSONcopy = JSON.parse(JSON.stringify(obj));
console.log(JSONcopy)

// we can assign more properties to the existing object
Object.assign(JSONcopy, {e : 5, f : 6})
console.log(JSONcopy)
var j = {};
Object.defineProperty(j,'g', {
    writable: false,
    value:7 
});
console.log(j)
// learn from 13.6