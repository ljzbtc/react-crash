import React from 'react';

const Piece = ({ color, opacity = 1 }) => {
  const style = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: color,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    opacity: opacity,
  };

  return <div style={style} />;
};

export default Piece;