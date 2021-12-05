import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

// Function written to test Square
// const test = () => {
//   console.log('clicked square')
// }


//<Square value='X' onClick={() => test()} />

const Game = () => {
  // Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  
  // Tracks value of each square
  const [board, setBoard] = useState([Array(9).fill(null)]);
  // zero-indexed value, indicates how many turns have been taken b4 current turn
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  
  const winner = calculateWinner(board[stepNumber]);
  
  // Create variable that holds 'X' or 'O' depending on whether X is next
  const nextPlay = () => {
   if (xIsNext) {
     return 'X';
   }
   return'O';
  };

  const handleClick = (i) => { // need to fix 
    const placesTaken = board.slice(0, stepNumber + 1);
    const curLoc = placesTaken[stepNumber];
    const locCopy = [...curLoc]; // make copy
    // prevents move from being taken if there's a winner already and/or square is taken
    if (winner || locCopy[i] ) return; 
    locCopy[i] = nextPlay(); 
    setBoard([...placesTaken, locCopy]); // add new clicked square to board
    setStepNumber(placesTaken.length); // add one to stepNumber
    setXisNext(!xIsNext); // set next turn to what it's not currently
  };
  
  // Reset board, no parameters 
  const jumpToStart = () => { // add if statement? i.e. if win...
    setBoard([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);
  };

  const result = (winner) => {
    if (winner) {
      return "Winner: " + winner + "!";
    }

    if (stepNumber === 9 && winner === null) {
        return "Tie Game!";
    } 

    return "Next Player: " + nextPlay(); 
    // winner ? "Winner: " + winner : "Next Player: " + nextPlay()

  };
  

  return (
    <>
    <h1>Tic Tac Toe</h1>
      <Board squares={board[stepNumber]} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
            <button onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result(winner)}</h3>
      </div>
    </>  // why do we need these empty tags? If you don't want to render an actual element
  );
};

export default Game;
