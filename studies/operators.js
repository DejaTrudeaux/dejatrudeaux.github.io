// OPERATORS //
/** In order to manipulate our data, we must use operators on our values. There
 * are six kinds:
 * 0. Assignment Operators
 * 1. Arithmetic Operators
 * 2. Comparison Operators
 * 3. Logical Operators
 * 4. Unary Operators
 * 5. Ternary Operators
 */
 
// 0. assignment operators //
/** Assignment operators are used to assign values to variables.
 */ 
 // = assigns the value on the left to the variable on the right
 var a = "fizz";
 var b = "buzz";
 var c = 1;
 var d = 2;
  
// += or the addition assignment adds values or concatenates strings
 console.log(a += b); // prints => "fizzbuzz"
 console.log(c += d); // prints => 3;

/** other assignment operators include -=, *=, /=, and %=, which only operate on 
 * numeric values. Trying to use these operators on strings will return NaN!
 */
  console.log(d -= c); // prints => 1
  console.log(a /= c); // prints => NaN
 
 
// 1. Arithmetic Operators //
/** Arithmetic operators are just what you would think. They perform arithmetic on 
 * values. +, -, *, /, and % add, subtract, multiply, divide, and find the remainder
 * of expressions. The + also concatenates.
 */
var y = 2;
var z = 3;
console.log(z % y); // prints => 1, the remainder

z++;
console.log(z); // prints => 4, because we added 1 to z

// 2. comparison operators //
/** Comparison operators are used to compare two values and return a boolean, true or
 * false. There are two types, binary comparison and strict comparison.
 */ 

// binary comparison compares two values with <, >, <=, and >=
console.log(y > z); // prints => false because 2 is less than 3
console.log(9 <= 9); // prints => true because 9 is equal to 9

// strict comparison === and !==
/** This operator tests whether some value is strictly equal to another value. 
 * So if we compare one data type to a different data type, our output will be false.
 * If we want to be less strict about it, we can use == or != which ignores data type.
 * We are not as likely to use the == operator because it may confuse our code and 
 * cause bugs!
 */
 console.log(2 === '2'); // prints false because the number 2 !== the string, '2'
 console.log(2 == '2'); // prints true because this operator is less strict
 
 
// 3. logical operators //
/** Logical operators compare conditions using && (and), || (or), & ! (bang).
 * For &&, both or all conditions must be true for the statement to be true. For ||, at
 * least one condition must be true, and bang flips the truthiness of a value.
 */
var g = 6 > 4;
var h = 9 < 8;
console.log(g && h); // prints false because 9 is more than 8
console.log(g && !h); // prints true because it changes h from false to true, making
//both g and h true
console.log(g || h); // prints true because at least one condition is true, g

// the double bang (!!)
/** this operates on a value and outputs a boolean. If the value is falsey, it will
 * return false (0, null, undefined) and if it is truthy, it will return true (even 
 * negative numbers).
 */ 
console.log(!!null); // prints false because null is falsey
console.log(-3); // prints true because even negative numbers are truthy
 
 
// 4. unary operators //
/** Unary operators are used on single values. Negating a value (-), using the bang
 * (!) to flip truthiness, using typeof to find out type of a value, and logging a 
 * value are all ways we can manipulate single values.
 */ 
console.log(-3); // prints => -3, negates the value
console.log(!true);  // prints => false
console.log(typeof "hello"); // prints => string


// 5. ternary operators //