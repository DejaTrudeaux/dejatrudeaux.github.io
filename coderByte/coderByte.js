// longest word //
function LongestWord(sen) { 
let senArr = sen.split(' ');
    for (let i = 0; i < senArr.length; i++){
      for (let x = senArr.length - 1; x >= 0; x--)
        if (senArr[i].length > senArr[x].length){
          return senArr[i];
        }
    }         
}

// first factorial //
function FirstFactorial(num) { 
  if (num < 0){
    return -1;
    }
  if (num === 0 || num === 1){
    return 1;
  }
  for (let i = num - 1; i >= 1; i--){
    num = num*i;
  }
  return num;       
}

// first reverse //
function FirstReverse(str) { 
let revArr = [];
let strArr = Array.from(str);
for (var i = strArr.length - 1; i >= 0; i--){
  revArr.push(strArr[i]);
}
  return revArr.join(''); 
}

// letter changes //
function LetterChanges(str) { 
 //replace every letter in the string with the letter following it in the alphabet
  var changedStr = '';
  for (let i = 0; i < str.length; i++){
    let letter = str.charCodeAt(i);
    if (letter >= 65 || letter <= 90){
      letter = letter + 1;
    }
    if (letter >= 97 || letter <= 122){
      letter = letter + 1;
    }
    letter = String.fromCharCode(letter);
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' === letter === 'u'){
      letter = letter.toUpperCase();
    }
    changedStr += letter;
}
return changedStr;
}

// simple adding //
function SimpleAdding(num) { 
let answer = 0;
let counter = 1;
while (counter <= num){
  answer = answer + counter;
  counter++;
}
  return answer;         
}

// letter capitalize //
function LetterCapitalize(str) { 
    var myArr = str.split(' ');
    var capArr = [];
    for (var i = 0; i < myArr.length; i++){
        capArr.push(myArr[i][0].toUpperCase() + myArr[i].slice(1));
    }
  // code goes here  
  return capArr.join(' '); 
         
}

// simple symbols //
function SimpleSymbols(str) { 
  for (var i = 0; i < str.length; i++){
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122){
      if (str[i-1] !== "+" || str[i+1] !== '+'){
        return 'false';
      }
    }
  }
  return 'true'; 
}

// checknums //
function CheckNums(num1,num2) { 
if (num2 === num1){
    return -1;
}
return (num2 > num1 ? 'true' : 'false');
}

// time convert //
function TimeConvert(num) { 
if (num < 60){
    num = '0:' + num;
}
else {
    num = Math.floor(num/60) + ':' + (num % 60);
}
  // code goes here  
  return num; 
}

// alphabet soup //
function AlphabetSoup(str) { 
  let strArr = str.split('');
  return strArr.sort().join(''); 
}