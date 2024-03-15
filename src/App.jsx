import Header from "./components/Header";
import Player from "./components/Players";

function App() {
  return (
    <>
      <Header />;
      <main>
        <div id="game-container">
          Players
          <ol id="players">
            <Player name={"player1"} symbol={"X"} />

            <Player name={"player2"} symbol={"O"} />
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;