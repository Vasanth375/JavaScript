// declaring the arr as global
let arr = [];
function countdown(n){
    // checking the if the n is less than 0 returns array
    if(n<=0){
        return [];
    }
    else{
        // pushing the value
        arr.push(n);

        // calling the function
        countdown(n-1)
        return arr;
    }
  }
console.log(countdown(10))