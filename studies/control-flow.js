/** CONTROL FLOW:
 * "Control flow" is what we say when we're talking about the order in which a program 
 * executes different parts of code. A program would run each line consecutively down a 
 * page if there weren't structures in place that allow us to control what things 
 * happen, and when. Here, we will discuss conditional statements.
 */ 
 
// if statements //
// NOTE: We can use an if statement to execute code if a statement is true, like so:
var hour = 22;
if (hour >= 22){
    console.log("I'm going to bed."); // prints => "I'm going to bed"
}
 
// if-else statements //
// NOTE: If there are two conditions, we must use an if-else statement:
var time = 4;
if (time >= 6 && time <= 9){
    console.log("I'm in class right now."); 
}
else {
    console.log("I'm busy studying!"); // prints => "I'm busy studying!"
}
 
// else-if //
/** NOTE: If you have more than two different options, you must chain "else if" behind
 * your if, and end with else. This is how we do it:
 */ 
var feeling = "happy";
if (feeling === "sad"){
    console.log("Why so glum, chum?");
}
else if (feeling === "angry"){
    console.log("Beware the wrath of Swamp Thing");
}
else if (feeling === "afraid"){
    console.log("You are not alone, I am here with you.");
}
else {
    console.log("I'm happy, feeling glad!"); // prints => "I'm happy, feeling glad!"
}

// switch statements //
/** NOTE: Switch statements can be used in place of if-statements to control the flow
 * of our code. They are faster to type, so you may want to use this in place of 
 * if-else statements in some instances where oyu have more to input. They are
 * evaluated based on cases. Here's the above statement changed into a switch statement.
 * We have previously established the feeling variable as happy.
 * Remember that the last statement must read "default"!
 */
switch (feeling){
    case "sad":
        console.log("Why so glum, chum?");
        break;
    case "angry":
        console.log("Beware the wrath of Swamp Thing");
        break;
    case "afraid":
        console.log("You are not alone, I am here with you.");
        break;
    default:
        console.log("I'm happy, feeling glad!");
}    