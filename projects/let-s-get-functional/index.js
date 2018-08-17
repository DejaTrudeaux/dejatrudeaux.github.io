// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-dejatrudeaux');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

// find the number of male customers using the filter function
var maleCount = function(array) {
     let maleArr = [];
    _.filter(customers, function(element, index, array){
        if (element.gender === 'male'){
            maleArr.push(element.gender);
        }
    });
    return maleArr.length;
};

// find the number of female customers using reduce
var femaleCount = function(array){
    let femaleCus = [];
    _.reduce(array, function(seed, element, index){
        if (element.gender === 'female'){
            femaleCus.push(element.gender);}}, 0); 
    return femaleCus.length;        
};

// find the oldest customer's name (return a string)
var oldestCustomer = function(array){
  var oldestAge = array[0].age;
  var oldestName = array[0].name;
  for (var i = 1; i < array.length; i++){
    if (array[i].age > oldestAge){
      oldestAge = array[i].age;
      oldestName = array[i].name;
    }
  }
  return oldestName;
};

// find the youngest customer's name (return a string)
var youngestCustomer = function(array){
  var youngestAge = array[0].age;
  var youngestName = array[0].name;
  for (var i = 1; i < array.length; i++){
    if (array[i].age < youngestAge){
      youngestAge = array[i].age;
      youngestName = array[i].name;
    }
  }
  return youngestName;
};

// find the average balance of all customers
var averageBalance = function(array){
  var bal = 0;
    for (var i = 0; i < array.length; i++){
      let num = array[i].balance.replace(",", "");
      num = num.slice(1);
     bal += parseFloat(num);
    }
  bal = bal/array.length;
  return bal;
};

//Find how many customer's names begin with a given letter
var firstLetterCount = function(array, letter){
  var myArray = [];
  for (var i = 0; i < array.length; i++){
    if (array[i].name[0].toLowerCase() === letter.toLowerCase()){
      myArray.push(array[i]);
    }
  }
  return myArray.length;
};

// Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
    var friendsArr;
    var count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i].name.toLowerCase() === customer.toLowerCase()){
            friendsArr = array[i].friends;
        }
    }
    for (let i = 0; i < friendsArr.length; i++){
        if (friendsArr[i].name[0].toLowerCase() === letter.toLowerCase()){
            count++;
        }
    }
    return count;
};

//Find the customers' names that have a given customer's name in their friends list
var friendsCount = function(array, friend){
  let allFriends = [];
  _.each(array, function(e, ind, a){
       for (let i = 0; i < e.friends.length; i++){
         if (e.friends[i].name === friend){
            allFriends.push(e.name);
         }
       }
    });
  console.log(allFriends);
  return allFriends;
};

// Find the three most common tags among all customers' associated tags
var topThreeTags = function(array){
  let smushArray = [];
  let tagsArray = _.pluck(customers, 'tags');
  for (let i = 0; i < tagsArray.length; i++){
    for (let x = 0; x < tagsArray[i].length; x++){
     smushArray.push(tagsArray[i][x]);
      
    }
  }
  let compileObj = {};
  _.each(smushArray, function(element, index, array){
    return compileObj[element] = 0;
  });
  _.filter(smushArray, function(element, index, array){
    return compileObj[element]++;
  });
  while (Object.keys(compileObj).length > 3){
    for (var key in compileObj){
      compileObj[key]--;
      if (compileObj[key] < 1){
        delete compileObj[key];
      }
    }
  }
  return Object.keys(compileObj);
};

var genderCount = function(array){
  var genderObj = {'male': 0, 'female': 0, 'transgender': 0};
  _.reduce(customers, function(seed, element, index){
    if (element.gender === 'male'){
      genderObj.male ++;
    }
    if (element.gender === 'female'){
      genderObj.female ++;
    }
    if (element.gender === 'transgender'){
      genderObj.transgender ++;
    }
  }, 0);
  return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
