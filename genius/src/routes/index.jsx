import { Routes, Route } from "react-router-dom";

import { Play } from "../pages/Play";
import { Game } from "../pages/Game";
import { TryAgain } from "../pages/TryAgain";
import '../styles/global.css'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="/game" element={<Game />} />
      <Route path="/tryagain" element={<TryAgain />} />
    </Routes>
  );
};
