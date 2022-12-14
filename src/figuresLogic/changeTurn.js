export function changeTurn(position, setTurn, boardArray, setBoardArray){
    const boardContainer = document.querySelector('.board-game');

    for(let elem of boardArray){
        if(elem.position === position && elem.whatPlaced !== undefined){
            let color = elem.whatPlaced.color;
            if(color === 'white'){
                setTurn('black')
                boardContainer.style.flexDirection = 'column-reverse';
            }else if(color === 'black'){
                setTurn('white')
                boardContainer.style.flexDirection = 'column';
            }
        }    
    }
}