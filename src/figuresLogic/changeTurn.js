import { verifyCheckKing } from "./verifyCheckKing";

export function changeTurn(position, setTurn, boardArray, setBoardArray){
    const boardContainer = document.querySelector('.board-game');

    for(let elem of boardArray){
        if(elem.position === position && elem.whatPlaced !== undefined){
            let color = elem.whatPlaced.color;
            if(color === 'light'){
                setTurn('dark')
                verifyCheckKing(boardArray, 'light', setBoardArray)
                boardContainer.style.flexDirection = 'column-reverse';
            }else if(color === 'dark'){
                setTurn('light')
                verifyCheckKing(boardArray, 'dark', setBoardArray);
                boardContainer.style.flexDirection = 'column';
            }
        }    
    }
}