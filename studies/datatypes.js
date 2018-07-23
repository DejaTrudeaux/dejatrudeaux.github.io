/** DATA TYPES:
 * In Javascript, there are different kinds of values that we need to 
 * interpret. They are all unique, and they help us categorize data. Data types 
 * allow the Javascript interpreter work with different types of data.
 * The different types include:
 * 0. Numbers
 * 1. Strings
 * 2. Booleans
 * 3. Arrays
 * 4. Objects
 * 5. Functions
 * 6. undefined
 * 7. null
 * 8. NaN
 * 9. Infinity and -Infinity
 */
 
 // 0. Numbers //
 var myAreaCode = 504;
 
 // 1. Strings //
 var myCity = "New Orleans";
 
 // 2. Booleans //
 // Booleans values are either true or false
 var bigEasy = true;
 
 // 3. Arrays //
 // NOTE: Arrays are zero-indexed lists with any number of elements
 var myArr = [0, 1, 2, 3, 4]
 
 // 4. Objects //
 /** NOTE: Objects are collections of key-value pairs. The keys must have some 
  * relationship to their respective values. 
  */
 var myObj = {nameFirst: "Deja", nameLast: "Trudeaux", pet: "Papier Mache"}
 
 // 5. Functions //
 /** NOTE: Functions are logic data which allow us to encapsulate a block of code by
  * creating it and then executing it whenever we want. When declaring a function, we
  * include parameters. When we call the function later, we insert arguments
  */
  function sum(a, b){
      console.log(a + b)
  }
  sum (8, 3); // prints => 11
  
 // 6. Undefined //
 /** NOTE: This value means that a variable has been declared but not assigned.
  */
  var whoKnows;
  console.log(whoKnows); // prints => undefined
 
 // 7. Null //
 /** NOTE: This is a value used by a programmer to represent the absense of value. Null
  * is not a result of anything, it is a tool for a programmer.
  */
  var x = 7;
  if (x === null){
    console.log("Nothing to see here");
  }
  else {
    console.log("We got a number!");
  } // prints => "We got a number!" because x = 7
  
 // 8. NaN //
 /** This is a value that means, "not a number." It appears if you try to do arithmetic 
  * on a non-number. Or you can use it to find out if something is a number or not
  */
  console.log(Math.floor("hey y'all")); // prints => NaN because you can't round down
  //on a string!

 // 9. Infinity and -Infinity //
 /** Infinity is a value to represent infinity, the highest number possible. All other
  * numbers are smaller than it, and it multiplied by any number equals infinity. Any 
  * number divided by infinity equals zero.
  */
  console.log(8*Infinity); // prints => infinity
  console.log(1/Infinity); // prints => 0
  
 
  /** Negative infinity is the negative value of infinity. It behaves like so:
   */
   console.log(-Infinity*Infinity); // prints = -Infinity
   console.log(-Infinity*8); // prints => -Infinity
   console.log(-Infinity*-Infinity); // prints => Infinity
   console.log(-Infinity*-9); // prints => Infinity
   console.log(9/-Infinity); // prints => -0
   console.log(-9/-Infinity); // prints => +0
   console.log(0*-Infinity); // prints => NaN
   console.log(NaN*-Infinity); // prints => Nan
   console.log(-Infinity/-3); // prints => Infinity
   console.log(-Infinity/-Infinity); // prints => NaN
   console.log(-Infinity/6); // prints => -Infinity
   console.log(-Infinity/Infinity); // prints => NaN
   
 
 /** PRIMITIVE AND COMPLEX DATA TYPES
  * Primitive (simple) data types include strings, numbers, booleans, undefined, null, 
  * and NaN. These values are simple data types because they have a fixed value. 
  * They are immutable, meaning they can't be changed. If they were changed, they would 
  * no longer be the same value! They do not hold other values, and operating on 
  * primitive data types returns new values!
  * Complex data types include arrays, objects, and functions. The reason they are 
  * complex is because they hold other values and are therefore indefinite in size.
  */
  
  // Simple data type //
  var age = 28;
  var years = 9;
  console.log(age + years); // returns => 37, a new primitive value
  
  // Complex data type //
  function findRemainder(a, b){
      if (a > b){
          console.log(a%b);
      }
      else {
          console.log("B is larger than A")
      }
  }
  findRemainder (9,7); // prints => 2; A function holds other values and by calling a
  //function, we can put different values in as arguments, therefore a function is
  //indefinite in size.
  
  

/**Copy by Value vs Copy by Reference
 * Primitive data types are copied by value while complex data types are copied by 
 * reference. What this means is that when a primitive data value is saved and passed
 * into a new variable, a copy of the actual value is what is saved to that variable
 * and manipulating one variable will leave the other unchanged.
 * Example:
 */
 var a = 12;
 var b = a;
 console.log(b); // prints => 12. Now if we change b, a remains 12 or vice versa.
 
var b = 60;
console.log(a); // prints => 12.
console.log(b); // prints => 60. A and B are no longer same and the connection 
//between them is broken!

/**Complex data types are copied by reference. This means that when a complex variable
 * is assigned the value of another variable, the copy contains an address to the 
 * value instead of an exact copy of the value. This means that when either variable 
 * is modified, so is the other because they point to the same address.
 */
 var y = [1, 2, 3, 4, 5];
 var z = y;
 console.log(z); // prints [1, 2, 3, 4, 5]
 y.push(6, 7, 8);
 console.log(y); // prints [1, 2, 3, 4, 5, 6, 7, 8]
 console.log(z); // prints [1, 2, 3, 4, 5, 6, 7, 8]