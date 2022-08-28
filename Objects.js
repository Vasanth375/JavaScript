
// Javascript object creation
let person ={
    name: 'Vasanth',   // properties of the person object
    pin : 68
};

// accessing the person object
person.name = 'Stark';

console.log(person);
const myDog = {
    // Only change code below this line
    "name": "Snippy",
    "legs": 4,
    "tails": 1,
    "friends": ['kitty', 'pitty']
  
    // Only change code above this line
  };

// Accessing Object Properties with Dot Notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

// deleting a property from myDog
delete myDog.tails;
console.log(myDog)