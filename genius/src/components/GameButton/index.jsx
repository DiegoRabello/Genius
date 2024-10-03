import "./styles.css";
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const GameButton = forwardRef(({ number, text, onClick }, ref) => {
  return (
    <button
      className="game-button"
      id={number}
      onClick={onClick}
      ref={ref}
    >
      {text}
    </button>
  );
});

GameButton.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

GameButton.displayName = 'GameButton';
