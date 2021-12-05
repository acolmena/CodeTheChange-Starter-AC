import React from "react";
import Square from "./Square";

//const squaresArray = [];

// function displaySquares(squares, onClick) {
//   const allSquares =  squares.map(i => 
//     <Square key = {i} value = {squares[i]}  onClick = {() => onClick(i)}/>
//   );
//   return allSquares;
// }

// or in div we can write the map

const Board = ({squares, onClick}) => (
  // make array of square components
  //let squaresArray = [{key: i, value = squares[i],  onClick = {() => onClick(i)}}] 
  //let squaresArray = [];
  
  
  <div className="board"> 
    {squares.map((square, i) => (
    <Square key = {i} value = {square}  onClick = {() => onClick(i)} /> ))}
  </div>
  
);

export default Board;
