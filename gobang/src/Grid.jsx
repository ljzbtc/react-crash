import React from 'react';

const Grid = ({ onClick, onMouseEnter, onMouseLeave, children, row, col }) => {
  const style = {
    width: '30px',
    height: '30px',
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
  };

  const horizontalLine = {
    position: 'absolute',
    left: col === 0 ? '50%' : 0,
    right: col === 18 ? '50%' : 0,
    top: '50%',
    height: '1px',
    backgroundColor: '#000',
    transform: 'translateY(-50%)',
    display: row === 19 ? 'none' : 'block',
  };

  const verticalLine = {
    position: 'absolute',
    top: row === 0 ? '50%' : 0,
    bottom: row === 18 ? '50%' : 0,
    left: '50%',
    width: '1px',
    backgroundColor: '#000',
    transform: 'translateX(-50%)',
    display: col === 19 ? 'none' : 'block',
  };

  const pieceStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  return (
    <div 
      style={style} 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={horizontalLine} />
      <div style={verticalLine} />
      <div style={pieceStyle}>
        {children}
      </div>
    </div>
  );
};

export default Grid;