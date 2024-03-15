import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Players";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinatios";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const fristSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];

    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      fristSquareSymbol &&
      fristSquareSymbol === secondSquareSymbol &&
      fristSquareSymbol === thirdSquareSymbol
    ) {
      winner = fristSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

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
          {(winner || hasDraw) && <GameOver winner={winner} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
