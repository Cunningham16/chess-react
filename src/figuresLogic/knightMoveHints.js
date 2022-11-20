export function knightMoveHints(position, boardArray, setHints, appearHints, figureObject){
    let isBlocked;
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    if(figureObject.avaliableMoves !== undefined){
        isBlocked = true;
    }

    if(isBlocked === false){
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
                    }else if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== figureObject.color && elem.whatPlaced.id !== 'king'){
                        elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                    }
                }
        }
    }
    setHints(!appearHints);
}