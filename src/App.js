import { useState } from "react";
import Board from "./components/Board";
import { BoardContext } from './context';

const arrayFigures = [
  {position: 9, color: 'dark', id: 'pawn'},
  {position: 10, color: 'dark', id: 'pawn'},
  {position: 11, color: 'dark', id: 'pawn'},
  {position: 12, color: 'dark', id: 'pawn'},
  {position: 13, color: 'dark', id: 'pawn'},
  {position: 14, color: 'dark', id: 'pawn'},
  {position: 15, color: 'dark', id: 'pawn'},
  {position: 16, color: 'dark', id: 'pawn'},

  {position: 49, color: 'light', id: 'pawn'},
  {position: 50, color: 'light', id: 'pawn'},
  {position: 51, color: 'light', id: 'pawn'},
  {position: 52, color: 'light', id: 'pawn'},
  {position: 53, color: 'light', id: 'pawn'},
  {position: 54, color: 'light', id: 'pawn'},
  {position: 55, color: 'light', id: 'pawn'},
  {position: 56, color: 'light', id: 'pawn'},
]

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

  function setFigure(i){
      for(let pos of arrayFigures){
          if(i === pos.position){
              return pos;
          }
      }
  }

  for(let i = 1; i < 65; i++){
    array[i-1] = {
      whatPlaced: setFigure(i),
      id: i,
      color: setColor(i-1),
      setDot: undefined,
    }
  }
  return array;
}

function App() {
  const [boardArray, setBoardArray] = useState(createBoard())
  const [appearHints, setHints] = useState();

  return (
    <BoardContext.Provider value={{
      boardArray,
      setBoardArray,
      appearHints, 
      setHints,
    }}>
      <div className="App">
          <Board />
      </div>
    </BoardContext.Provider>
  );
}

export default App;
