import React, { useState } from 'react';
import Board from './Board';
import Confetti from 'react-confetti';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(nextSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="game">
      {winner && <Confetti />}
      <div className="status">
        {winner ? `🎉 Winner: ${winner}!` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Game;