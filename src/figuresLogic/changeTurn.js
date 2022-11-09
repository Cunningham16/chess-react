export function changeTurn(position, setTurn, boardArray, turn){
    for(let elem of boardArray){
        if(elem.position === position && elem.whatPlaced !== undefined){
            let color = elem.whatPlaced.color;
            if(color === 'light'){
                setTurn('dark')
            }else if(color === 'dark'){
                setTurn('light')
            }
        }    
    }
}