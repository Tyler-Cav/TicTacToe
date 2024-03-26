import { useState } from "react";

let style = {
  test: {
    marginTop: "15px"
  }
}
function Square( {value, onSquareClick}) {
  return <button onClick={onSquareClick} className="square">{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [testO, setO] = useState(null)

  function handleClick(i) {
    const nextSquares = squares.slice();
    if ( testO === null || "O" && squares[i] === null) {
    nextSquares[i] = "X";
    setSquares(nextSquares);
    setO("X")
    }
    if (testO === "X" && squares[i] === null) {
      nextSquares[i] = "O";
      setSquares(nextSquares);
      setO("O")
    }
    console.log(nextSquares)
  }
  
  function reset() {
    let resetSquares = squares.slice()
    let freshReset = []
    for (let i = 0; i < squares.length; i++) {
      resetSquares[i] = null
      freshReset.push(resetSquares[i])
    }
    setSquares(freshReset)
    console.log(freshReset)
  }

  return (
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    <button style={style.test} onClick={() => reset(squares, setSquares) }>Reset</button>
  </>
  );
}
