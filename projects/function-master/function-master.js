//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var myArray = [];
    for (var key in object){
        myArray.push(object[key]);
    };
    return myArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var myArr = [];
    for (var key in object){
        if (typeof object[key] === "string"){
            myArr.push(object[key]);
        }
    }
    return myArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return 'array';
    }
    else if (typeof collection === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase()+string.slice(1, string.length);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var newStr = string.split(" ");
  var myArr = [];
  for (var i = 0; i < newStr.length; i++){
    myArr.push(newStr[i][0].toUpperCase()+newStr[i].slice(1));
    }
  return myArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){
   var newArr = [];
   for (var key in object){
      if (key === "noises" && object.noises.length > 0){
        newArr = object[key];
        return newArr.join(" ");
      }
    }

   if (newArr.length === 0) {
        newArr = 'there are no noises';
      return newArr;
     }
  
   }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var myArr = string.split(' ');
    for (var i = 0; i < myArr.length; i++){
        if (myArr[i].toLowerCase() === word.toLowerCase()){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add the name to the object's friends array
    var myArr = object.friends;
    myArr.push(name);
    //and then return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty('friends')){
    var myArr = object.friends;
        for (var i = 0; i < myArr.length; i++){
//return true if name is name of a friend of object        
            if (name === myArr[i]){
            return true;
            }
        }
    }
//false otherwise
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//should take a name and a list of people
function nonFriends(name, array) {
    var friendsArr = [];
    var otherNamesArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i].name === name){
           friendsArr = array[i].friends;
            }
        else {
             otherNamesArray.push(array[i].name);
        }    
    }
    for (var x = 0; x < friendsArr.length; x++){
        for (var y = 0; y < otherNamesArray.length; y++){
            if (friendsArr[x] === otherNamesArray[y]){
                otherNamesArray.splice(y, 1);
            }
        }
    }
//and return a list of all the names that name isn't friends with
return otherNamesArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++){
    if (object.hasOwnProperty(array[i])){
        delete object[array[i]];
    }
    }
  console.log(object);
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}