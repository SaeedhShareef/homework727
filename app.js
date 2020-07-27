// start Debugging
// start Javascript Console
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a)

let sumAB = a + b;
console.log(sumAB);
// end Javascript Console
// start understanding differences between FCC and Browser console.log 
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output)
// Run the tests to see the difference between the two consoles.
console.clear()
// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
// end understanding differences between FCC and Browser console.log
// start typeof
let seven = 7;
let three = "3";
// console.log(seven + three);
// Only change code below this line
console.log(typeof seven)

console.log(typeof three)
// end typeof
// start typos
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
// end typos
// start catching parenthesis and brackets
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
// end catching parenthesis and brackets
// start mixed usage of single and double quotes
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
// end mixed usage of double quotes
// start assignment operator
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
// end assignment operator
// start Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);
//   end Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
// start Debugging: Catch Arguments Passed in the Wrong Order When Calling a FunctionPassed
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);
// end Debugging: Catch Arguments Passed in the Wrong Order When Calling a FunctionPassed  
// start Debugging: Catch Off By One Errors When Using IndexingPassed
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len ; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();
//   end Debugging: Catch Off By One Errors When Using IndexingPassed
// start Debugging: Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
//   end Debugging: Use Caution When Reinitializing Variables Inside a Loop
// start Debugging: Prevent Infinite Loops with a Valid Terminal ConditionPassed
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }
//   end Debugging: Prevent Infinite Loops with a Valid Terminal ConditionPassed
  