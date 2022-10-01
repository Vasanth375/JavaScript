// function that is passed many arguments
// function lotsOfArguments(){
//     for(var i=0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// lotsOfArguments(1,2,3,4)

const logArguments = (...args) => {return args}
const list = [1, 2, 3]
console.log(logArguments('a', 'b', 'c', list))
