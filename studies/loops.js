/** LOOPS
 * A loop is a function that allows us to execute a block of code as many times as
 * we want without having to write the code over and over again. The types of loops are:
 * 0. while loops
 * 1. for loops
 * 2. for-in loops
 */
 
 
 
// 0. while loops //
/** While loops are used to loop through data an unknown number of times, or until 
 * a condition is met. For example, if you want to make a prompt box that only goes 
 * away when someone enters an input, you can use a while loop to make the alert pop
 * up while the form is empty. A while loop's running depends on a condition being true.
 * Here is an example:
 */
var count = 0;
while (count < 12){
    console.log(count + " " + "is not a dozen!");
    count++;
} // prints => "0" through "11" and concatenates " is not a dozen!" to each one
// the above loop only runs when the condition, count < 12 is true


// 1. for loops //
/** For loops are used to iterate through a determined number of values in an array
 * or a string. So if we have an array of 100 elements, we don't have to type array[0],
 * array[1], array[2], etc. to the 99 index. Instead, we can create a for loop. 
 * The syntax of a for loop must include an intializing variable, an executing 
 * condition, and an increment expression. Example:
 */
 var myArray = [1, 2, 3, 4, 5];
 for (var i = 0; i < myArray.length; i++){
     console.log(myArray[i]); // prints => 1 then prints 2 then prints 3 ... to 5
 }
 
 /** to loop backwards through an array, start at the last value using .length - 1,
  * use the the zero index as the stop condition when i is greater than or equal
  * to zero, and iterate backwards using i--.
  */
 for (var i = myArray.length - 1; i >= 0; i--){
     console.log(myArray[i]); // prints => 5 then prints 4 then prints 3 ... to 1
 }
 
 // this also works for strings, since characters in strings are also indexed
 var myStr = "abc";
 for (var i = 0; i < myStr.length; i++){
     console.log(myStr[i]); // prints => "a" then "b" then "c"
 }
 
 // 2. for-in loops //
 /** For-in loops are used to loop through objects, which are key-value pairs, and 
  * retrieve either the keys or the values of an object. 
  */
  // this is how we can retrieve the keys:
  var myObj = {firstName: "Deja", lastName: "Trudeaux", age: 28}; 
  for (var key in myObj){
      console.log(key); // prints => "firstName", then "lastName", then "age"
  }
  
  // this is how we can retrieve the values:
  for (var key in myObj){
      console.log(myObj[key]); // prints => "Deja", then "Trudeaux", then 28
  }