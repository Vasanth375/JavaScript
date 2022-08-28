/*
.hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or 
false if the property is found or not. */

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
  }
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));