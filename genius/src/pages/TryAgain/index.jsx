import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from "./styles.module.css";

export function TryAgain() {
  const navigate = useNavigate();
  const location = useLocation();
  const [localMaxScore, setLocalMaxScore] = useState(0);

  useEffect(() => {
    const maxScoreFromGame = location.state?.maxScore || 0;
    const storedMaxScore = localStorage.getItem("maxScore");
    if (storedMaxScore) {
      setLocalMaxScore(Math.max(parseInt(storedMaxScore), maxScoreFromGame));
    } else {
      setLocalMaxScore(maxScoreFromGame);
    }
  }, [location.state]);

  function handlePlayAgain() {
    navigate("/");
  }

  return (
    <div className={styles["try-again-container"]}>
      <h1>Game Over</h1>
      <h2>Pontuação máxima: {localMaxScore}</h2>
      <button onClick={handlePlayAgain}>Jogar Novamente</button>
    </div>
  );
}

TryAgain.propTypes = {
  maxScore: PropTypes.number.isRequired,
};
