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
  {position: 3, color: 'dark', id: 'bishop'},
  {position: 6, color: 'dark', id: 'bishop'},

  {position: 59, color: 'light', id: 'bishop'},
  {position: 62, color: 'light', id: 'bishop'},

  {position: 2, color: 'dark', id: 'knight'},
  {position: 7, color: 'dark', id: 'knight'},

  {position: 58, color: 'light', id: 'knight'},
  {position: 63, color: 'light', id: 'knight'},

  {position: 1, color: 'dark', id: 'rook'},
  {position: 8, color: 'dark', id: 'rook'},

  {position: 57, color: 'light', id: 'rook'},
  {position: 64, color: 'light', id: 'rook'},
  {position: 4, color: 'dark', id: 'queen'},
  {position: 60, color: 'light', id: 'queen'},

  {position: 5, color: 'dark', id: 'king'},
  {position: 61, color: 'light', id: 'king'},
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

  function setPosition(i){
    let object = {};
    if(i-8 <= 0){
      object.x = i-1;
      object.y = 0;
    }else if(i-16 <= 0 && i-8 > 0){
      object.x = i-9;
      object.y = 1; 
    }else if(i-24 <= 0 && i-16 > 0){
      object.x = i-17;
      object.y = 2; 
    }else if(i-32 <= 0 && i-24 > 0){
      object.x = i-25;
      object.y = 3; 
    }else if(i-40 <= 0 && i-32 > 0){
      object.x = i-33;
      object.y = 4; 
    }else if(i-48 <= 0 && i-40 > 0){
      object.x = i-41;
      object.y = 5; 
    }else if(i-56 <= 0 && i-48 > 0){
      object.x = i-49;
      object.y = 6; 
    }else if(i-56 > 0){
      object.x = i-57;
      object.y = 7; 
    }
    return object;
  }

  function setFigure(i){
    for(let pos of arrayFigures){
        if(i === pos.position){
            return {
              color: pos.color,
              id: pos.id,
            };
        }
    }
  }

  for(let i = 1; i < 65; i++){
    array[i-1] = {
      whatPlaced: setFigure(i),
      position: setPosition(i),
      color: setColor(i-1),
      setDot: undefined,
      hasAvaliableMove: false,
    }
  }
  return array;
}

function App() {
  const [turn, setTurn] = useState('light');
  const [boardArray, setBoardArray] = useState(createBoard())
  const [appearHints, setHints] = useState();

  return (
    <BoardContext.Provider value={{
      boardArray,
      setBoardArray,
      appearHints, 
      setHints,
      turn, 
      setTurn
    }}>
      <div className="App">
          <Board />
      </div>
    </BoardContext.Provider>
  );
}

export default App;
