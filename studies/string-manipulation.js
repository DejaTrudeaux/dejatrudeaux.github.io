/**Strings can be manipulated in a couple ways:
 * 0. Using + or concatenation
 * 1. With built-in string methods and properties such as slice, split, and replace
 */
 
// 0. Using concatenation (+) //
/** NOTE: You can use the + sign to put multiple strings together and make a new
 * string. Don't forget to add a space!
 */
 var myStr = "hello";
 var aStr = "WORLD";
 console.log(myStr + " " + aStr); // prints => 'hello WORLD'
  
// NOTE: You can access characters in a string using their indices. For example:
 console.log(myStr[1]); // returns => "e", the second letter in the string
   
// 1. Using other string methods //
/** NOTE: There are many other methods we can use to format text from changing case,
 * replacing parts of a string, to eliminating characters. Here are some examples:
 */ 
// .toUpperCase() and .toLowerCase() are used to change the case of a string
 console.log(myStr.toUpperCase()); // prints => 'HELLO'
 console.log(aStr.toLowerCase()); // prints => 'world'
   
/** .slice() can be used to manipulate only certain letters in a string.
 * The first number points to the index of the letter we want to slice from the 
 * string, and the second letter is the index we want to stop BEFORE.
 */
 console.log(aStr.slice(1, 3)); // prints => "OR"
 console.log(myStr.slice(0, 1).toUpperCase() + myStr.slice(1)); // prints => "Hello"
   
// .replace() is used for replacing parts of a string 
 var mySen = "the earth is flat";
 var newSen = mySen.replace("flat", "round");
 console.log(newSen); // prints => "the earth is round"
    
/** .split() is used to split a string by a separator (in this example the spaces
 * between words) into an array
 */
 console.log(newSen.split(" ")); // prints => ["the", "earth", "is", "round"] 