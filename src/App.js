import { useState } from "react";
import Board from "./components/Board";
import { BoardContext } from './context';

function createBoard(){
  let array = [];

  function setColor(i){
    if(i < 8 && i % 2 === 0){
      return "dark";
    }else if(i < 16 && i > 8 && i % 2 !== 0){
      return "dark";
    }else if(i < 24 && i >= 16 && i % 2 === 0){
      return "dark";
    }else if(i < 32 && i >= 24 && i % 2 !== 0){
      return "dark";
    }else if(i < 40 && i >= 32 && i % 2 === 0){
      return "dark";
    }else if(i < 48 && i >= 40 && i % 2 !== 0){
      return "dark";
    }else if(i < 56 && i >= 48 && i % 2 === 0){
      return "dark";
    }else if(i < 64 && i >= 56 && i % 2 !== 0){
      return "dark";
    }else{
      return "light";
    }
  }

  for(let i = 1; i < 65; i++){
    array[i-1] = {
      whatPlaced: undefined,
      id: i,
      color: setColor(i-1),
    }
  }
  return array;
}

function App() {
  const [boardArray, setBoardArray] = useState(createBoard())

  return (
    <BoardContext.Provider value={{
      boardArray,
      setBoardArray,
    }}>
      <div className="App">
          <Board />
      </div>
    </BoardContext.Provider>
  );
}

export default App;
