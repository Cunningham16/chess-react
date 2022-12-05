const arrayFigures = [
  {position: 49, color: 'black', id: 'pawn'},
  {position: 50, color: 'black', id: 'pawn'},
  {position: 51, color: 'black', id: 'pawn'},
  {position: 52, color: 'black', id: 'pawn'},
  {position: 53, color: 'black', id: 'pawn'},
  {position: 54, color: 'black', id: 'pawn'},
  {position: 55, color: 'black', id: 'pawn'},
  {position: 56, color: 'black', id: 'pawn'},

  {position: 9, color: 'white', id: 'pawn'},
  {position: 10, color: 'white', id: 'pawn'},
  {position: 11, color: 'white', id: 'pawn'},
  {position: 12, color: 'white', id: 'pawn'},
  {position: 13, color: 'white', id: 'pawn'},
  {position: 14, color: 'white', id: 'pawn'},
  {position: 15, color: 'white', id: 'pawn'},
  {position: 16, color: 'white', id: 'pawn'},

  {position: 59, color: 'black', id: 'bishop'},
  {position: 62, color: 'black', id: 'bishop'},

  {position: 3, color: 'white', id: 'bishop'},
  {position: 6, color: 'white', id: 'bishop'},

  {position: 58, color: 'black', id: 'knight'},
  {position: 63, color: 'black', id: 'knight'},

  {position: 2, color: 'white', id: 'knight'},
  {position: 7, color: 'white', id: 'knight'},

  {position: 57, color: 'black', id: 'rook'},
  {position: 64, color: 'black', id: 'rook'},

  {position: 1, color: 'white', id: 'rook'},
  {position: 8, color: 'white', id: 'rook'},

  {position: 61, color: 'black', id: 'queen'},
  {position: 5, color: 'white', id: 'queen'},

  {position: 60, color: 'black', id: 'king'},
  {position: 4, color: 'white', id: 'king'},
]

export function createBoard(){
    let array = [];
  
    function setColor(i){
      if(i < 8 && i % 2 === 0){
        return "black";
      }else if(i < 16 && i > 8 && i % 2 !== 0){
        return "black";
      }else if(i < 24 && i >= 16 && i % 2 === 0){
        return "black";
      }else if(i < 32 && i >= 24 && i % 2 !== 0){
        return "black";
      }else if(i < 40 && i >= 32 && i % 2 === 0){
        return "black";
      }else if(i < 48 && i >= 40 && i % 2 !== 0){
        return "black";
      }else if(i < 56 && i >= 48 && i % 2 === 0){
        return "black";
      }else if(i < 64 && i >= 56 && i % 2 !== 0){
        return "black";
      }else{
        return "white";
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
        hasAvaliableAttackKing: false,
        avaliableMoves: undefined,
      }
    }
    return array.reverse();
  }