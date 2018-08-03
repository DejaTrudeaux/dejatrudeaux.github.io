// range function //
//Write a range function that takes two arguments, start and end, 
//and returns an array containing all the numbers from start up to
//and including) end.

var range = function(start, end){
  var myArr = [];
  for (var i = start; i <= end; i++){
    myArr.push(i);
  }
  return myArr;
};
console.log(range(1, 10));

//sum function //
//Next, write a sum function that takes an array of numbers and returns
//the sum of these numbers. Run the example program and see whether it 
//does indeed return 55.

var sum = function(array){
  var sumOfArray = 0;
  for (var i = 0; i < array.length; i++){
    sumOfArray = sumOfArray += array[i];
  }
  return sumOfArray;
};
console.log(sum(range(1, 10)));

// bonus range function //
var range2 = function(start, end, step){
  let myArr = [];
  if (start < end && step > 0){
    for (var i = start; i <= end; i += step){
     myArr.push(i);
    }
    return myArr;
  }
  else if (end < start && step > 0){
    return range(start, end, (step*-1));  
    }
  else if (start < end && step < 0){
    return range(start, end, (step*-1));
  }
  else {
    for (var i = start; i >= end; i += step){
    myArr.push(i);
  }
  return myArr;
  }
};
console.log(sum(range2(1, 10, -2)));

// reverse array //
//For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
//The first, reverseArray, takes an array as argument and produces a new array 
//that has the same elements in the inverse order. 

var myArray = [1, 2, 3, 4, 5];
var reverseArray = function(array){
  var backwardsArray = [];
  for (var i = array.length - 1; i >= 0; i--){
    backwardsArray.push(array[i]);
  }
  return backwardsArray;
};
console.log(reverseArray(myArray));

//The second, reverseArrayInPlace, does what the reverse method does: it modifies 
//the array given as argument by reversing its elements. 

var reverseArrayInPlace = function(array){
    for (var i = 0; i < Math.floor(myArray.length / 2); i++){
      array[i] = array.length - [i];
    }
    for (var x = myArray.length - 1; x > Math.floor(myArray.length / 2); x--){
      array[x] = array.length - [x];
    }
  return array;
};
console.log(reverseArrayInPlace(myArray));

//Write a function arrayToList that builds up a list structure like the one shown when 
// given [1, 2, 3] as argument. Also write a listToArray function that produces an array
//from a list. Then add a helper function prepend, which takes an element and a list and 
//creates a new list that adds the element to the front of the input list, and nth, which 
//takes a list and a number and returns the element at the given position in the list 
//(with zero referring to the first element) or undefined when there is no such element.

//If you haven’t already, also write a recursive version of nth.
myArray = [1, 2]
var arrayToList = function(array){
  var list = {};
  for (var i = array.length - 1; i >= 0; i--){
   return list = {value: i, rest: list};
  }
}
console.log(arrayToList(myArray));

var listToArray = function(list){
  newArray = '';
  for (let node = list; node; node = node.rest){
    newArray += node;
  }
  return newArray;
}

var list = {
  rest: [object Object] { ... },
  value: 2
}
console.log(listToArray(list));
// NEEDS LOTS OF WORK SO CONFUSED 



// deep comparison //
//Write a function deepEqual that takes two values and returns true only if they 
//are the same value or are objects with the same properties, where the values of the 
//properties are equal when compared with a recursive call to deepEqual.
var a = {1: 'a', 2: 'b'}
var b = {1: 'a', 2: 'b'}
var deepEqual = function(a, b){
  aKeys = '';
  bKeys = '';
  if (typeof a === 'string' && typeof b === 'string'){
    if (a === b){
        return true;
    }  
  }  
  else if (typeof a === 'object' && a !== null){
    if (typeof b === 'object' && b !== null){
      aKeys = Object.keys(a);
      bKeys = Object.keys(b);
    }
  }
  return false;
}
console.log(deepEqual(a, b))
// NEEDS WORK!