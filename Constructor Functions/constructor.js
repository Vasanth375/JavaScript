// constructor functions are used to design a construct a new object it's like init method in python
// this is a keyword by default it's pointing to the object and it's assigned properties
function Book(bookID, bookName){
    this.bookName = bookName;
    this.bookID = bookID;
}

// new keyword used to create the object
let book = new Book(1, 'CTCI');
console.log(book.bookName); // we can access the properties like this

// prototype is a property which points to an object whose properties are automatically inherited by all objects with that constructor
// this is like static function in a class in c++ every object created for that class can access this data, simply this is a common data for all objects
Book.prototype.id = function(){
    console.log(this.bookID);
}
book.id();

let book2 = new Book(2, 'JS Notes for Professionals');
book2.id()

// this returns the pointing the function
console.log(book.constructor);

// way to find a object is created by using that constructor or not returns true if created or retuns False 
console.log(book instanceof Book);
console.log(book2 instanceof Book);