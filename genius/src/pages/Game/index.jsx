import { GameButton } from "../../components/GameButton";
import { useState } from "react";
import "./game.css";
export function Game(gameStarted) {
  console.log(gameStarted);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  

  function handleClick() {

  }

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
}
