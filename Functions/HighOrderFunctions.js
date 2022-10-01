// high order function that returns another function or passed as argument to another function
function CallBackFunction(){
    console.log("Invoked the callback function one-1");
}

function HighOrderFunction(callback){
    callback();
}

HighOrderFunction(CallBackFunction);

// if a function returns another function then the outer most function is high order function
function anotherHighOrder(){

    return function callbackTwo(){
        console.log("Another callback function");
    }
}

anotherHighOrder()();
