const qwerty={
    firstName: "Vasanth",
    lastName:"sai",
    fullName:function(){
        // here this keyword is used to represent the object 
        return this.firstName + " " + this.lastName;
    },
    print: function(){
        console.log(this.firstName, this.lastName)
        // In default it returns undefined
    }
    /**this keyword performs different operation in different scenarios
     * In a object , this points to object created
     * In global, this refers to global object
     * In a function, in strict mode this is undefined
     * In an event, this refers to the element that received the event
     * Methods like call(), apply(), bind() can refer to any object
     */
};
console.log(qwerty.fullName())
console.log(qwerty.print())