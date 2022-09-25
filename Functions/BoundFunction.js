/**Read this concept in some other time .bind() method */

this.x = 5;     // this refers to global object 
console.log(this.x);
const modules= {
    x:8,
    getX(){ return modules.x; }
};

console.log(modules.getX())