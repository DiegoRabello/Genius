import { GameButton } from "../../components/GameButton";
import "./game.css";
export const Game = () => {
  const [level, setLevel] = useState(1);
  let gameOver = false;

  const handleLevel = () => {
    setLevel(level + 1);
  };
  return (
    <div className="container">
      <div className="game-info">
        <h1>Genius</h1>
        <h3>Level :</h3>
      </div>
      <div className="game-container">
        <GameButton number={"Number-0"} text={"Red"} />
        <GameButton number={"Number-1"} text={"Green"} />
        <GameButton number={"Number-2"} text={"Blue"} />
        <GameButton number={"Number-3"} text={"Yellow"} />
      </div>
    </div>
  );
};
