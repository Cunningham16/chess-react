import { verifyCheckKing } from "./verifyCheckKing";

export function changeTurn(position, setTurn, boardArray, setBoardArray){
    for(let elem of boardArray){
        if(elem.position === position && elem.whatPlaced !== undefined){
            let color = elem.whatPlaced.color;
            if(color === 'light'){
                setTurn('dark')
                verifyCheckKing(boardArray, 'light', setBoardArray)
            }else if(color === 'dark'){
                setTurn('light')
                verifyCheckKing(boardArray, 'dark', setBoardArray)
            }
        }    
    }
}