/**
 * for..of works on set objects
 * sets will remove duplicates
 */

const number = [1,2,3,4,1,3,4,2, 5, 5];

var uniqueValues = new Set(number);
for(let i of uniqueValues){
    console.log(i)
}
