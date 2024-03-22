import { useState } from "react";

function Square() {
  const [x, setx] = useState(null)

  function handleClick() {
    console.log('clicked')
    if (x !== 'x') {
    setx('x')
    }
    else {
    setx('o')
    }

  }
  return <button onClick={handleClick} className="square">{x}</button>
}

export default function Board() {
  return (
  <>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  
  </>
  );
}
