import { useState } from 'react';
import Grid from './Grid';
import Piece from './Piece';

const Table = ({ board, onCellClick, currentPlayer, gameOver }) => {
  const [hoverPosition, setHoverPosition] = useState(null);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  };

  const tableStyle = {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(19, 30px)',
    gridTemplateRows: 'repeat(19, 30px)',
    backgroundColor: '#DEB887',
    border: '1px solid #000',
    position: 'relative',
  };

  return (
    <div style={containerStyle}>
      <div style={tableStyle}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <Grid
              key={`${i}-${j}`}
              onClick={() => onCellClick(i, j)}
              onMouseEnter={() => !gameOver && setHoverPosition({ row: i, col: j })}
              onMouseLeave={() => setHoverPosition(null)}
              row={i}
              col={j}
            >
              {cell && <Piece color={cell} />}
              {!cell && hoverPosition && hoverPosition.row === i && hoverPosition.col === j && !gameOver &&
                <Piece color={currentPlayer} opacity={0.5} />
              }
            </Grid>
          ))
        )}
      </div>
    </div>
  );
};

export default Table;