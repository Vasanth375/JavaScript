// by using the bind function we can access an function in an object from another object
const poiu = {
    a: 1,
    b:2,
    c:function(){
        return this.a + this.b;
    }
};
const asdfg={
    a:2,
    b:4,
    c:7
};

let k = poiu.c.bind(asdfg)  // we can perform any operation from one objects data to anothers objects data
console.log(k())