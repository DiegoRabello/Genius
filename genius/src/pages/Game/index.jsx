import { GameButton } from "../../components/GameButton";
import { useState } from "react";
import "./game.css";
export function Game(gameStarted) {
 
  // const [gameOver, setGameOver] = useState(false);

  // const colors = ["red", "green", "blue", "yellow"];
  // let sequence = [];
  // let playerSequence = [];
  // let level = 1;
  // let timeLimit = 3000; // 3 seconds
  // function nextLevel() {
  //   playerSequence = [];
  //   sequence.push(colors[Math.floor(Math.random() * colors.length)]);
  //   showSequence();
  //   timeLimit = Math.max(1000, timeLimit - 200); // Decrease time limit but not below 1 second
  // }
  // function showSequence() {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     const color = sequence[i];
  //     const element = document.querySelector(`.color.${color}`);
  //     element.classList.add("active");
  //     setTimeout(() => element.classList.remove("active"), 500);
  //     i++;
  //     if (i >= sequence.length) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }

  // function checkSequence() {
  //   if (playerSequence.join("") === sequence.join("")) {
  //     setTimeout(nextLevel, 1000);
  //   } else {
  //     alert("Você perdeu! Tente novamente.");
  //     resetGame();
  //   }
  // }
  // function resetGame() {
  //   sequence = [];
  //   playerSequence = [];
  //   level = 1;
  //   timeLimit = 3000;
  //   nextLevel();
  // }

  // const handleLevel = () => {
  //   if (gameStarted && !gameOver) {
  //     for (let i = 1; i < 5; i++) {
  //       setLevel(level + i);
  //     }
  //   }
  // };
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
