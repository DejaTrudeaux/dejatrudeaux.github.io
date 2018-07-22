/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables. Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type. Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 * 1. To create a variable we use the keyword, var, followed by a name (id or 
 * alias) 
 * for our variable.
 * 2. There are 2 phases of using variables: declaration and initialization (or
 * assignment).
 */ 

// 1. declaration //
var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have 
 * NOT initialized it to anything.
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Deja';
console.log(myName); // prints => Deja

// 3. re-assignment //
myName = 'Papier Mache';
console.log(myName); // prints => Papier Mache

/**NOTE: We can assign and re-assign anything to a variable - we cannot do this 
 * with constants
 */
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/** NOTE: When a variable is declared but not initialized, it is given the 
 * default value, undefined.
 */
var aName;
console.log(aName); // prints => undefined

/** NOTE: Only the declaration, NOT the assignment of variables, will be hoisted to
 * the top of its block. So for example:
 */
herName += "Drew";
var herName = "Nancy";
console.log(herName); // prints => 'Nancy' because only the declaration is hoisted,
// not the assignment.

/**
 * LET:
 * 
 * 4. The let keyword is like the var keyword in that let can be unassigned and
 * reassigned to any value, and doesn't have to be initialized at declaration.
 * 5. let is a block-scoped variable, meaning it is scoped to if-statements, 
 * loops, and functions. This means that it is bound to the scope it is 
 * contained in and cannot be accessed outside of it.
 * 6. let variables are NOT hoisted to the top of their block, meaning they 
 * cannot be accessed until they are declared within their block.
 */

// 4. declaration, initialization, and potential for reassignment //
let myArr;


/** NOTE This is the same result as if a var keyword was used because we can declare
 * a let variable without initializing it.
 */
console.log(myArr); // prints => undefined

let aString = "hello";
aString = "hi";
console.log(aString); // prints => "hi" because the let has been reassigned

// 5. block scope of a let variable //
/**NOTE Because y is not defined in the global scope, the console.log function
 * must be contained in the same block as the y declaration. It is scoped only 
 * to that if-block
 */
let x = 8;
if (x === 8){
    let y = 7;
    console.log(y); // prints 7 => because the log statement is inside the block
    }
    console.log(x); // prints => 8, because x is defined outside of the if-block

// 6. let variables and hoisting //
/** NOTE if we declared let myString AFTER our console.log function, we would
 * receive an error message because lets are NOT hoisted to the top of their 
 * scope. A let variable must be declared before we try to do anything with it!
 */
let myString = "hello";
console.log(myString); // prints => "hello"


/** CONST: 
 * 7. A const variable MUST be assigned at declaration, and cannot be unassigned
 * and reassigned.
 * 8. const is another block-scoped variable like let, meaning it is scoped to 
 * if-else statements, loops, and functions. This means that they are bound to 
 * the scope they are contained in and cannot be accessed outside of it.
 * 9. It is NOT hoisted to the top of its block, meaning it cannot be accessed 
 * until it is declared within its block.
 */
 
// 7. const variable assignment //
/**NOTE a const variable must be assigned at declaration, and can't be reassigned 
 * or else you receive a syntax error message in both cases
 */ 
const hat = "bowler";

// 8. accessing const variables in their block scopes //
const myAge = 8;
if (myAge === 8){
    console.log(myAge);
} // prints => 8 because the loop can access the const myAge in the global scope

/** NOTE In fact, you must establish a constant before you try to return it, log it to
 * the console, or do anything to it, or else you will receive an error because const 
 * variables are not hoisted to the top of their scope!
 * Example:
 * if (yourAge === 24){
    const yourAge = 24;
    console.log(yourAge); this would receive an error message
    }
 */