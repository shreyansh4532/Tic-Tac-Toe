import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquare, activePlayerSymbol}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectField = (ri, ci) => {
        setGameBoard((prevGameBoard) => {
            const updGameBoard = [...prevGameBoard];
            updGameBoard[ri][ci] = activePlayerSymbol;
            return updGameBoard;
        })

        onSelectSquare();
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row, ridx) => (
        <li key={ridx}>
          <ol>
            {row.map((pSymbol, cidx) => (
              <li key={cidx}>
                <button onClick={() => handleSelectField(ridx, cidx)}>{pSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
