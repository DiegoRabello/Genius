import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

export function Play() {
   const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);

  const handlePlayClick = () => {
    navigate("/game")
    setGameStarted(true);
    console.log('play gameStarted', gameStarted)

  };

  return (
    <div className={styles.play}>
      <h1>Genius</h1>
      <button onClick={handlePlayClick}> Play </button>
    </div>
  );
}
