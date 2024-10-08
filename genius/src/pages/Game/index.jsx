import { GameButton } from "../../components/GameButton/index";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./game.css";
import { Player } from "../../components/Player";
import { Footer } from "../../components/Footer";

export function Game() {
  const location = useLocation();

  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  const [stylePlayer1, setStylePlayer1] = useState("ativo");
  const [stylePlayer2, setStylePlayer2] = useState("inativo");
  const navigate = useNavigate();
  const [sequence, setSequence] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [userSequenceP1, setUserSequenceP1] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const buttonRefs = useRef({});

  useEffect(() => {
    const nameFromState = location.state?.playerName;

    if (nameFromState) {
      setPlayerName1(nameFromState);
      setPlayerName2(nameFromState);
    } else {
      // Se não estiver no estado da rota, tentar obter do localStorage
      if (playerName1) {
        const nameFromStorage = localStorage.getItem("playerName1");
        if (nameFromStorage) {
          setPlayerName1(nameFromStorage);
        }
      }
      if (playerName2) {
        const nameFromStorage2 = localStorage.getItem("playerName2");
        if (nameFromStorage2) {
          setPlayerName2(nameFromStorage2);
        }
      } else {
        setPlayerName1("Player 1");
        setPlayerName2("Player 2");
      }
    }

    if (gameStarted && !gameOver) {
      startNewRound();
    }
  }, [level, gameStarted, location, playerName1, playerName2]);

  function startGame() {
    setGameStarted(true);
    setLevel(1);
    setSequence([getRandomColor()]);
    setGameOver(false);
  }

  function startNewRound() {
    setIsShowingSequence(true);
    setUserSequenceP1([]);

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
      const newUserSequence = [...userSequenceP1, color];
      setUserSequenceP1(newUserSequence);

      // Focar o botão
      buttonRefs.current[color].focus();

      // Remover o foco do botão após 300ms
      setTimeout(() => {
        buttonRefs.current[color].blur();
      }, 300);

      if (color !== sequence[currentIndex]) {
        setGameOver(true);

        if (stylePlayer1 === "ativo") {
          alert(`Game Over ${playerName1}`);
          navigate("/tryagain");
        } else {
          alert(`Game Over ${playerName2}`);
          navigate("/tryagain");
        }

        localStorage.setItem("maxScore", level);
        return;
      }

      if (currentIndex === sequence.length - 1) {
        // Jogador completou a sequência corretamente
        setLevel((prevLevel) => prevLevel + 1);
        setSequence((prevSequence) => [...prevSequence, getRandomColor()]);
        if (currentIndex % 2 !== 0) {
          setStylePlayer1("ativo");
          setStylePlayer2("inativo");
        } else {
          setStylePlayer1("inativo");
          setStylePlayer2("ativo");
        }
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  }

  function getRandomColor() {
    const colors = ["Green", "Blue", "Yellow", "Red"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="container">
      <div className="game-info">
        <h1>Genius</h1>
        <h3>Level: {level}</h3>
        {playerName1 !== "Player 1" && playerName2 !== "Player 2" ? (
          <div className="players">
            <div className="player1">
              <Player playerStyle={stylePlayer1} name={playerName1} />
            </div>
            {!gameStarted && (
              <button className="play" onClick={startGame}>
                Começar
              </button>
            )}
            <div className="player2">
              <Player playerStyle={stylePlayer2} name={playerName2} />
            </div>
          </div>
        ) : (
          !gameStarted && (
            <button className="play" onClick={startGame}>
              Começar
            </button>
          )
        )}
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
        <div className="bola"></div>
      </div>
      
    </div>
  );
}
