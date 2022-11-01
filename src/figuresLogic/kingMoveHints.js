export function kingMoveHints(position, boardArray, setHints, appearHints, props){
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
            && !(elem.position.x === position.x && elem.position.y === position.y)){
            elem.setDot = elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
        }else if(elem.whatPlaced !== undefined 
            && (elem.position.x === position.x+1 
                || elem.position.x === position.x-1
                || elem.position.x === position.x)
            && (elem.position.y === position.y+1 
                || elem.position.y === position.y-1
                || elem.position.y === position.y)
            && !(elem.position.x === position.x && elem.position.y === position.y)
            && elem.whatPlaced.color !== props.color){
            elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
        }
    }
    setHints(!appearHints)
}