// Get minimum value //
var min = function(a, b){
  if (a < b){
    return a;
  }
  else if (b < a){
    return b;
  }
  else {
    return;
  }
};

// create a recursive function //
var isEven = function(n){
  if (n < 0){
    return isEven(n * -1);
  }
  if (n === 0){
    return true;
  }
  else if (n === 1){
    return false;
  }
  else {
    return (isEven(n-2));
  }
};

// Bean Counting
var countBs = function(string){
  var counter = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] === "B"){
      counter++;
    }
  }
  return counter;
};

var countChar = function(string, char){ 
  var counter = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] === char){
      counter++;
    }
  }
  return counter;
};