import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Players";
import { useState } from "react";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <Header />;
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialaName={"player1"}
              symbol={"X"}
              isActive={activePlayer === "X"}
            />

            <Player
              initialaName={"player2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
