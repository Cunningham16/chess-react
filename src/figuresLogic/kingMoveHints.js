export function kingMoveHints(position, boardArray, setHints, appearHints, figureObject){
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    for(let elem of boardArray){
        if(elem.whatPlaced === undefined 
            && (elem.position.x === position.x+1 
                || elem.position.x === position.x-1
                || elem.position.x === position.x)
            && (elem.position.y === position.y+1 
                || elem.position.y === position.y-1
                || elem.position.y === position.y)
            && !(elem.position.x === position.x && elem.position.y === position.y)
            && elem.hasAvaliableMove === false){
            elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
        }else if(elem.whatPlaced !== undefined 
            && (elem.position.x === position.x+1 
                || elem.position.x === position.x-1
                || elem.position.x === position.x)
            && (elem.position.y === position.y+1 
                || elem.position.y === position.y-1
                || elem.position.y === position.y)
            && !(elem.position.x === position.x && elem.position.y === position.y)
            && elem.whatPlaced.color !== figureObject.color
            && elem.hasAvaliableMove === false){
            elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
        }
    }
    setHints(!appearHints)
}