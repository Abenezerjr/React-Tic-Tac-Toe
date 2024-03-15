//to use the game borde frest we need render the 3X3 col and row grid and we initainalz the game bord that game bord have 3 row and 3 col

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {/* // to find the row oft he game we used .map method that see the  initialGameBoard and out the new list of it row
        []
        []
        [] we find this
      */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* // in order to fill the null value or the playesymbol x or o we used
          the map mathod of map method in the row varibele b/c we find 3
          row using map and know get 3 col
          [null,null,null]
           [null,null,null]
            [null,null,null]

            */}
            {row.map((playSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playSymbol !== null}
                >
                  {playSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
