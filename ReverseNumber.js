
// declaring the arr as global
let arr = [];
function countdown(n){
    // checking the if the n is less than 0 returns array
    if(n<=0){
        return [];
    }
    // if n goes underneath 1 return the n value
    else if(n < 1 ){
      return n;
    }
    else{
        arr.push(n);
        let k = countdown(n-1)
        return arr;
    }
  }

console.log(countdown(9))
// let myArray = [1,2,3,4,6,7,8]
// for (let index = myArray.length-1; index >=0; index--) {
//       console.log(myArray[index])
// }