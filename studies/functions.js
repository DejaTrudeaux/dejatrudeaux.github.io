/** FUNCTIONS: 
 * Functions are used to execute a block of code whenever we want, as many times as
 * we need to without rewriting our code. A function takes in parameters, which are
 * required inputs that will be replaced when we call the function, and they then
 * become arguments.
 */ 
 
 
 // TWO PARTS OF A FUNCTION: //
 // Designing a function //
 /** This means creating a function that we can use by using the function keyword.
  * Then we name the function something useful to describe what it does (using 
  * camelCase) and add parameters in parentheses. We want our parameters to be
  * as vague as possible, because we are going to be plugging values to replace
  * our parameters when we call the function later. Next, we want to add curly brackets.
  * Inside the curly brackets block, we are going to make code for what we want this
  * function to do! This is the syntax for a named function:
  */ 
function addNum(a, b){
    console.log(a * b); // our function will multiply its two parameters, a and b
 }
 
 // Calling a function //
 /** Now that we have designed our function, the only way it does anything is if 
  * we call it. When we call a function, we use the function name, in this case 
  * addNum, and in the parentheses we plug in numbers, which we now call arguments.
  * Executing, invoking, applying, and running are all names for calling a function.
  */
addNum(2, 3); // prints => 6, because 2 * 3 is 6 and our function multiplies
 
 // Functions assigned to variables //
 /** When we want to assign our functions to variables, we do so by declaring a
  * variable with out function name, and then assigning the function to the 
  * variable. So if we want to do so for our above function:
  */
var addSum = function(a, b){
     console.log(a * b);
  };
  
  // The inputs and outputs of functions //
  /** Parameters are what we use to specify what our input values are going to be.
   * We specify output by using return or console.log. Return outputs our result
   * of the function and console.log prints our result to the console.
   */
var myStr = function(x, y){
    console.log(x + " " + y);
};
myStr("Hello", "World"); // prints => "Hello World"

// Functions and Scope //
/** Functions have access to the variables that exist within their parent scopes, but 
 * do not have access to variables within their child scopes.
 */
var x;
function num1(){
  x = 1;
 return function num2(){
    x = 2;
  }
}

console.log(x); // prints => undefined because x is not defined outside of the function

var myFunc = num1();
myFunc();
console.log(x); // prints => 2 because myFunc function returns num2 function, which
// has access to x assigned as 2

num1();
console.log(x); // prints => 1 because num1 only has access to x assigned as 1

// Closures //
/** A closure creates a chain between child and parent scopes by accessing variables
 * within parent scopes.
 */
var c= "a lot";
function aFunc(){
    var a = "Octopii";
    return function bFunc(){
        var b = " rule ";
      return (a + b + c);
    };
} 

var z = aFunc();
console.log(z()); // prints => "Octopii rule a lot"
// The bFunc function has access to its own variables and the variables in its parent
// scope, and the global scope. Creating a close between the 3 scopes links them so
// that we can concatenate a string using variables that exist in separate scopes!
