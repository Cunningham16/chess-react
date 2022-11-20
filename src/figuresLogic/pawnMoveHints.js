export function pawnMoveHints(position, boardArray, setHints, appearHints, figureObject){
    let isBlocked = false;
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    if(figureObject.avaliableMoves !== undefined){
        isBlocked = true;
    }

    if(isBlocked === false){
        for(let elem of boardArray){
            const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
    
            let pawnMoveBlack = elem.whatPlaced === undefined && figureObject.color === 'dark' && elem.position.x === position.x;
            let pawnMoveWhite = elem.whatPlaced === undefined && figureObject.color === 'light' && elem.position.x === position.x;
    
            let pawnAttackBlack = elem.whatPlaced !== undefined 
                                    && figureObject.color === 'dark' 
                                    && elem.whatPlaced.color !== 'dark'
                                    && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                    && elem.position.y === position.y+1;
    
            
            let pawnAttackWhite = elem.whatPlaced !== undefined 
                                    && figureObject.color === 'light' 
                                    && elem.whatPlaced.color !== 'light'
                                    && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                    && elem.position.y === position.y-1;
    
    
            const pawnFirstMoveBlack = pawnMoveBlack && (elem.position.y === position.y+1 || elem.position.y === position.y+2) && position.y === 1;
            const pawnFirstMoveWhite = pawnMoveWhite && (elem.position.y === position.y-1 || elem.position.y === position.y-2) && position.y === 6;
            const pawnDefaultMoveBlack = pawnMoveBlack && elem.position.y === position.y+1 && position.y !== 1;
            const pawnDefaultMoveWhite = pawnMoveWhite && elem.position.y === position.y-1 && position.y !== 6;
    
            if(pawnFirstMoveBlack || pawnFirstMoveWhite || pawnDefaultMoveBlack || pawnDefaultMoveWhite){
                elem.setDot = dotObject;
            }else if((pawnAttackWhite || pawnAttackBlack) && elem.whatPlaced.id !== 'king'){
                elem.setDot = circleObject;
            }            
        }
    }else if(isBlocked === true){
        for(let elem of boardArray){
            const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            let pawnMoveBlack = elem.whatPlaced === undefined && figureObject.color === 'dark' && elem.position.x === position.x;
            let pawnMoveWhite = elem.whatPlaced === undefined && figureObject.color === 'light' && elem.position.x === position.x;
            const pawnFirstMoveBlack = pawnMoveBlack && (elem.position.y === position.y+1 || elem.position.y === position.y+2) && position.y === 1;
            const pawnFirstMoveWhite = pawnMoveWhite && (elem.position.y === position.y-1 || elem.position.y === position.y-2) && position.y === 6;
            const pawnDefaultMoveBlack = pawnMoveBlack && elem.position.y === position.y+1 && position.y !== 1;
            const pawnDefaultMoveWhite = pawnMoveWhite && elem.position.y === position.y-1 && position.y !== 6;

            if(figureObject.avaliableMoves === 'down' || figureObject.avaliableMoves === 'up'){    
                if(pawnFirstMoveBlack || pawnFirstMoveWhite || pawnDefaultMoveBlack || pawnDefaultMoveWhite){
                    elem.setDot = dotObject;
                }
            }else if(figureObject.avaliableMoves === 'right down' || figureObject.avaliableMoves === 'left up'){
                let pawnAttackBlack = elem.whatPlaced !== undefined 
                                        && figureObject.color === 'dark' 
                                        && elem.whatPlaced.color !== 'dark'
                                        && elem.position.x === position.x+1
                                        && elem.position.y === position.y+1;
        
                
                let pawnAttackWhite = elem.whatPlaced !== undefined 
                                        && figureObject.color === 'light' 
                                        && elem.whatPlaced.color !== 'light'
                                        && elem.position.x === position.x+1
                                        && elem.position.y === position.y-1;
    
                if((pawnAttackWhite || pawnAttackBlack) && elem.whatPlaced.id !== 'king'){
                    elem.setDot = circleObject;
                } 
            }else if(figureObject.avaliableMoves === 'left down' || figureObject.avaliableMoves === 'right up'){
                let pawnAttackBlack = elem.whatPlaced !== undefined 
                                        && figureObject.color === 'dark' 
                                        && elem.whatPlaced.color !== 'dark'
                                        && elem.position.x === position.x-1
                                        && elem.position.y === position.y+1;
        
                
                let pawnAttackWhite = elem.whatPlaced !== undefined 
                                        && figureObject.color === 'light' 
                                        && elem.whatPlaced.color !== 'light'
                                        && elem.position.x === position.x-1
                                        && elem.position.y === position.y-1;
    
                if((pawnAttackWhite || pawnAttackBlack) && elem.whatPlaced.id !== 'king'){
                    elem.setDot = circleObject;
                } 
            }
        }
    }
    
    setHints(!appearHints)
}