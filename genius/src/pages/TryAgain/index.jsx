import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function TryAgain({level}) {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/");
  };


  return (
    <div>
      <div className={styles.tryAgain}>
        <h1>Game Over</h1>
        <p>Score: {level}</p>
        <button className={styles.tryAgainButton} onClick={handleTryAgain} >Try Again</button>
      </div>
    </div>
  );
};
