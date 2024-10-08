import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { Footer } from "../../components/Footer";

export function Play() {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Salvar o nome do jogador no localStorage
    localStorage.setItem("playerName1", playerName1);
    localStorage.setItem("playerName2", playerName2);
    // Navegar para a página do jogo, passando o nome como estado
    navigate("/game", { state: { playerName1, playerName2 } });
  };

  const handleAddMorePlayers = () => {
    setVisible(true);
  };

  return (
    <>
      <main>
        <div className={styles.play}>
          <div className={styles.playText}>
            <div className={styles.divisor}></div>
            <h1>Genius</h1>
            <div className={styles.divider}></div>
          </div>
          <button onClick={handleStartGame}>Iniciar Jogo</button>
          <button onClick={handleAddMorePlayers}>Adicionar mais Players</button>
          {visible && (
            <div className={styles.playersName}>
              <div className={styles.player1}>
                <p>Nome do Jogador 1</p>
                <input
                  type="text"
                  placeholder="Player 1"
                  onChange={(e) => setPlayerName1(e.target.value)}
                  value={playerName1}
                />
              </div>
              <div className={styles.player2}>
                <p>Nome do Jogador 2</p>
                <input
                  type="text"
                  placeholder="Player 2"
                  onChange={(e) => setPlayerName2(e.target.value)}
                  value={playerName2}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
