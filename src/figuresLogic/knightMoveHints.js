export function knightMoveHints(position, boardArray, setHints, appearHints, props){
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    for(let elem of boardArray){
        if((elem.position.x === position.x+2 && elem.position.y === position.y+1) 
            || (elem.position.x === position.x+1 && elem.position.y === position.y+2)
            || (elem.position.x === position.x-2 && elem.position.y === position.y-1)
            || (elem.position.x === position.x+2 && elem.position.y === position.y-1)
            || (elem.position.x === position.x-2 && elem.position.y === position.y+1)
            || (elem.position.x === position.x-1 && elem.position.y === position.y-2)
            || (elem.position.x === position.x-1 && elem.position.y === position.y+2)
            || (elem.position.x === position.x+1 && elem.position.y === position.y-2)){
                if(elem.whatPlaced === undefined){
                    elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
                }else if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== props.color && elem.whatPlaced.id !== 'king'){
                    elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                }
            }
    }
    setHints(!appearHints);
}