import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
export function Play() {
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/game");
    setGameStarted(true);
  };

  return (
    <div className={styles.play}>
      <button onClick={handlePlayClick}> Play </button>
    </div>
  );
}
