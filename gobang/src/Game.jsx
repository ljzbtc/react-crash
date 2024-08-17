import { useState } from 'react';
import Table from './Table';
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(19).fill().map(() => Array(19).fill(null)));
  const [isBlackTurn, setIsBlackTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState([]);

  const handleCellClick = (row, col) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map(r => [...r]);
    const currentPlayer = isBlackTurn ? 'black' : 'white';
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const newMove = {
      player: currentPlayer,
      position: `${String.fromCharCode(65 + col)}${row + 1}`,
      moveNumber: moves.length + 1
    };
    setMoves([...moves, newMove]);

    if (checkWinner(newBoard, row, col)) {
      setWinner(isBlackTurn ? 'Black' : 'White');
    } else {
      setIsBlackTurn(!isBlackTurn);
    }
  };

  const checkWinner = (board, row, col) => {
    const directions = [
      [1, 0], [0, 1], [1, 1], [1, -1]
    ];
    const color = board[row][col];

    for (let [dx, dy] of directions) {
      let count = 1;
      for (let i = 1; i < 5; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;
        if (newRow < 0 || newRow >= 19 || newCol < 0 || newCol >= 19 || board[newRow][newCol] !== color) break;
        count++;
      }
      for (let i = 1; i < 5; i++) {
        const newRow = row - i * dx;
        const newCol = col - i * dy;
        if (newRow < 0 || newRow >= 19 || newCol < 0 || newCol >= 19 || board[newRow][newCol] !== color) break;
        count++;
      }
      if (count >= 5) return true;
    }
    return false;
  };

  const resetGame = () => {
    setBoard(Array(19).fill().map(() => Array(19).fill(null)));
    setIsBlackTurn(true);
    setWinner(null);
    setMoves([]);
  };
  const getStatusClass = () => {
    if (winner) return 'game-status game-status-winner';
    return isBlackTurn ? 'game-status game-status-black' : 'game-status game-status-white';
  };

  const getStatusIconClass = () => {
    if (winner) return 'status-icon status-icon-winner';
    return isBlackTurn ? 'status-icon status-icon-black' : 'status-icon status-icon-white';
  };

  return (
    <div className="game-container">
       <h1 className="game-title">Gobang</h1>
      <div className={getStatusClass()}>
        <span className={getStatusIconClass()}></span>
        {winner ? `${winner} wins!` : `Current Turn: ${isBlackTurn ? 'Black' : 'White'}`}
      </div>
      <div className="game-board">
        <Table
          board={board}
          onCellClick={handleCellClick}
          currentPlayer={isBlackTurn ? 'black' : 'white'}
          gameOver={!!winner}
        />
        <div className="move-history">
          <h3>Move History</h3>
          <ul className="move-list">
            {moves.map((move, index) => (
              <li key={index} className="move-item">
                {move.moveNumber}. {move.player.charAt(0).toUpperCase() + move.player.slice(1)} - {move.position}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Game;