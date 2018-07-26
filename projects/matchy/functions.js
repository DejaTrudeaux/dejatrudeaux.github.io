/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for (var i = 0; i < animals.length; i++){
    var lcName = name.toLowerCase();
    var lcAnimals = animals[i].name.toLowerCase();
        if (lcName === lcAnimals){
            return animals[i];
        }    
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if (name === animals[i].name){
           return animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
     if (animals[i].name === name){
         return animals.splice([i], 1);
        }   
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
//if the animal has a name with a length > 0 AND species has a length greater than zero    
if (animal.name.length > 0 && animal.species.length > 0){
// if the animal name does not match an animal in the array's name (loop through the array)
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === animal.name){
            return;
        }
    }animals.push(animal);
}
// add animal to the animals array  
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
