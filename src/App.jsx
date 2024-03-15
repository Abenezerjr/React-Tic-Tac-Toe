import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Players";
import { useState } from "react";
import Log from "./components/Log";

function drivetActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = drivetActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = drivetActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
