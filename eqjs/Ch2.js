// Looping a triangle //
var pound = "#";
for (var count = 0; count < 7; count++){
console.log(pound);
  pound += "#";
}

// FIZZBUZZ //
for (var i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0){
    console.log("Fizz");
  }
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(i)
  }
}

// CHESSBOARD //
var board = "";
function makeChessBoard(height, width){
  
for (var i = 0; i < height; i++){
    for (var j = 0; j < width; j++)
      if ((i + j) % 2 === 0){
        board += " ";
      }
      else {
        board += "#";
      }
  board += "\n";
  }
  console.log(board.slice(0, board.length-1));
}
makeChessBoard(8, 8);