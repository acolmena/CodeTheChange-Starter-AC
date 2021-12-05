export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.
  const possibleWins = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // possibleWins.forEach((element) => 
  //   if (squares[element[0]] && squares[element[0]] == squares[element[1]] && squares[element[1]] == squares[element[2]]) {
  //     return squares[element[0]];
  //   }
  // );
  
  // for (const [a, b, c] in possibleWins) {
  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     return squares[a];
  //   }
  // }
  for (let i = 0; i < possibleWins.length; i++) {
    const [a, b, c] = possibleWins[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
