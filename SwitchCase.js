/**
 * If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements 
 * which define various possible values. Statements are executed from the first matched case value until a break is encountered.
 * case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, 
 * the next statement will be executed.
 */


function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case 1:
        answer = 'alpha';
        break;
      
      case 2:
        answer = 'beta';
        break;
      
      case 3:
        answer = 'gamma';
        break;
      
      case 4:
        answer = 'delta';
        break;
      
      default:
        answer = 'Default';
        break;
  
    }  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));
  console.log(caseInSwitch(0));