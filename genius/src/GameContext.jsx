import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <GameContext.Provider value={{ gameStarted, setGameStarted }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
