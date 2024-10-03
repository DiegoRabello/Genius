import { GameButton } from "../../components/GameButton";
import { useState } from "react";
import "./game.css";
export function Game() {
  const [sequence,setSequence] = useState(['Green','Blue','Yellow','Red']);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  
  function showSequence(){
    let i = 0;
    const interval = setInterval(() => {
      if(i >= sequence.length) {
        
      }
    },1000)
  }


  return (
    <div className="container">
      <div className="game-info">
        <h1>Genius</h1>
        <h3>Level :</h3>
      </div>
      <div className="game-container">
        <GameButton id="Number-0" number={"Number-0"} text={"Red"} />
        <GameButton id="Number-1" number={"Number-1"} text={"Green"} />
        <GameButton id="Number-2" number={"Number-2"} text={"Blue"} />
        <GameButton id="Number-3" number={"Number-3"} text={"Yellow"} />
      </div>
    </div>
  );
}
