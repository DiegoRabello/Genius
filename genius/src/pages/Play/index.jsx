import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useGameContext } from "../../GameContext";

export function Play() {

   const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);


  const handlePlayClick = () => {
    setGameStarted(true);
    navigate("/game")

  };

  return (
    <div className={styles.play}>
      <h1>Genius</h1>
      <button onClick={handlePlayClick}> Play </button>
    </div>
  );
}
