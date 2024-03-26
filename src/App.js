import { useState } from "react";

//Style for reset button
let style = {
  test: {
    marginTop: "15px"
  }
}

//Creating each square in the board grid
//onSquareClick sends out X or O depending on previous click value
function Square( {value, onSquareClick}) {
  return <button onClick={onSquareClick} className="square">{value}</button>
}

//Main React Component for TicTacToe
export default function Board() {
//Squares is an array keeping track of each squares value. Index is null unless a square is clicked
  const [squares, setSquares] = useState(Array(9).fill(null));
//TestO is for changing X to O and vice versa so the game can be played by 2 players.
  const [testO, setO] = useState(null)

  //Click function for each square click
  //Sets value to either X or O depending on the last clicked value
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
  
  //Used for when the reset button is clicked
  //Takes an instance of the squares array that is a soft copy using the slice() method
  //Empty array to push all values of Squares array back to null 
  //Uses setSquares state to then reset all values after values are all null
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

  //Component HTML for returning react component.
  //Value prop is either X, O, or Null
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
