import { GameButton } from "../../components/GameButton/index";
import { useState, useEffect, useRef } from "react";
import "./game.css";
import { Play } from "../Play";
export function Game() {
  const [sequence, setSequence] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [userSequence, setUserSequence] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const buttonRefs = useRef({});

  useEffect(() => {
    if (gameStarted && !gameOver) {
      startNewRound();
    }
  }, [level, gameStarted]);

  function startGame() {
    setGameStarted(true);
    console.log('gameStarted', gameStarted)
    setLevel(1);
    setSequence([getRandomColor()]);
    setGameOver(false);
  }

  function startNewRound() {
    setIsShowingSequence(true);
    setUserSequence([]);
    setCurrentIndex(0);
    showSequence();
  }

  function showSequence() {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= sequence.length) {
        clearInterval(interval);
        setIsShowingSequence(false);
      } else {
        const color = sequence[i];
        const button = buttonRefs.current[color];
        button.focus();
        setTimeout(() => {
          button.blur();
        }, 500);
        i++;
      }
    }, 1000);
  }

  function handleButtonClick(color) {
    if (!isShowingSequence && !gameOver && gameStarted) {
      const newUserSequence = [...userSequence, color];
      setUserSequence(newUserSequence);

      // Focar o botão
      buttonRefs.current[color].focus();

      // Remover o foco do botão após 300ms
      setTimeout(() => {
        buttonRefs.current[color].blur();
      }, 300);

      if (color !== sequence[currentIndex]) {
        setGameOver(true);
        return;
      }

      if (currentIndex === sequence.length - 1) {
        // Jogador completou a sequência corretamente
        setLevel((prevLevel) => prevLevel + 1);
        setSequence((prevSequence) => [...prevSequence, getRandomColor()]);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  }

  function getRandomColor() {
    const colors = ["Green", "Blue", "Yellow", "Red"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function resetGame() {
    setSequence([]);
    setGameOver(false);
    setLevel(0);
    setCurrentIndex(0);
    setUserSequence([]);
    setGameStarted(false);
  }

  return (
    <div className="container">
      <div className="game-info">
        <h1>Genius</h1>
        <h3>Level: {level}</h3>
        {!gameStarted && <button onClick={startGame}>Play</button>}
        {gameOver && <button onClick={resetGame}>Reiniciar</button>}
      </div>
      <div className="game-container">
        <GameButton
          id="Number-0"
          number={"Number-0"}
          text={"Red"}
          onClick={() => handleButtonClick("Red")}
          ref={(el) => (buttonRefs.current["Red"] = el)}
        />
        <GameButton
          id="Number-1"
          number={"Number-1"}
          text={"Green"}
          onClick={() => handleButtonClick("Green")}
          ref={(el) => (buttonRefs.current["Green"] = el)}
        />
        <GameButton
          id="Number-2"
          number={"Number-2"}
          text={"Blue"}
          onClick={() => handleButtonClick("Blue")}
          ref={(el) => (buttonRefs.current["Blue"] = el)}
        />
        <GameButton
          id="Number-3"
          number={"Number-3"}
          text={"Yellow"}
          onClick={() => handleButtonClick("Yellow")}
          ref={(el) => (buttonRefs.current["Yellow"] = el)}
        />
      </div>
    </div>
  );
}
