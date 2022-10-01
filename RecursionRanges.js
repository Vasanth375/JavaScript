let arr = [];
function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
        return endNum;
    }else{
        arr.push(startNum);
        rangeOfNumbers(startNum+1);
        return arr;
    }
  };  
console.log(rangeOfNumbers(3, 15))