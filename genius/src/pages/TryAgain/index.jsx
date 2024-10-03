import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './styles.module.css'

export function TryAgain() {
  const [maxScore, setMaxScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMaxScore = localStorage.getItem('maxScore');
    if (storedMaxScore) {
      setMaxScore(parseInt(storedMaxScore));
    }
  }, []);

  function handlePlayAgain() {
    navigate('/');
  }

  return (
    <div className={styles["try-again-container"]}>
      <h1>Game Over</h1>
      <h2>Pontuação máxima: {maxScore}</h2>
      <button onClick={handlePlayAgain}>Jogar Novamente</button>
    </div>
  );
}
