export function bishopMoveHints(position, boardArray, setHints, appearHints, figureObject) {
    let isBlocked = false;
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    if(figureObject.avaliableMoves !== undefined){
        isBlocked = true;
    }

    if(isBlocked === false){
        boardArray.forEach(elem => {
            const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            const clearObject = {type: 'toClean'};
            for(let i = 0; i <= 7; i++){
                const moveRightDown = elem.position.y === position.y+i && elem.position.x === position.x+i;
                const moveRightUp = elem.position.y === position.y-i && elem.position.x === position.x+i;
                const moveLeftDown = elem.position.y === position.y+i && elem.position.x === position.x-i;
                const moveLeftUp = elem.position.y === position.y-i && elem.position.x === position.x-i;

                const moveDiagonal = moveLeftDown || moveLeftUp || moveRightUp || moveRightDown; 
                
                if(elem.whatPlaced === undefined && moveDiagonal){
                        elem.setDot = dotObject;
                }
                
                if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color !== figureObject.color && elem.whatPlaced.id !== 'king'){
                        elem.setDot = circleObject;
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === figureObject.color){
                        elem.setDot = clearObject;
                }
            }    
            setHints(!appearHints)
        })    
    }else if(isBlocked === true){
        for(let elem of boardArray){
            const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            const clearObject = {type: 'toClean'};

            for(let i = 0; i <= 7; i++){
                const moveRightDown = elem.position.y === position.y+i && elem.position.x === position.x+i;
                const moveRightUp = elem.position.y === position.y-i && elem.position.x === position.x+i;
                const moveLeftDown = elem.position.y === position.y+i && elem.position.x === position.x-i;
                const moveLeftUp = elem.position.y === position.y-i && elem.position.x === position.x-i;

                if(figureObject.avaliableMoves === 'right down' || figureObject.avaliableMoves === 'left up'){
                    if(elem.whatPlaced === undefined && (moveRightDown || moveLeftUp)){
                        elem.setDot = dotObject;
                    }
                
                    if(elem.whatPlaced !== undefined && (moveRightDown || moveLeftUp) && elem.whatPlaced.color !== figureObject.color && elem.whatPlaced.id !== 'king'){
                            elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && (moveRightDown || moveLeftUp) && elem.whatPlaced.color === figureObject.color){
                        elem.setDot = clearObject;
                    }    
                }else if(figureObject.avaliableMoves === 'left down' || figureObject.avaliableMoves === 'right up'){
                    if(elem.whatPlaced === undefined && (moveRightUp || moveLeftDown)){
                        elem.setDot = dotObject;
                    }
                
                    if(elem.whatPlaced !== undefined && (moveRightUp || moveLeftDown) && elem.whatPlaced.color !== figureObject.color && elem.whatPlaced.id !== 'king'){
                            elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && (moveRightUp || moveLeftDown) && elem.whatPlaced.color === figureObject.color){
                        elem.setDot = clearObject;
                    }
                }
            }
        }
        setHints(!appearHints);
    }
    
    // cleaning unnesesary cells for hints
    for(let elem of boardArray){
        if(elem.setDot !== undefined && elem.setDot.type === 'circle'){
            clearUnnessesaryCells(elem, position);
        }else if(elem.setDot !== undefined && elem.setDot.type === 'toClean'){
            clearUnnessesaryCells(elem, position);
        }
    }

    function clearUnnessesaryCells(elem, position){
        if(elem.position.x > position.x && elem.position.y > position.y){
            for(let u of boardArray){
                if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                    u.setDot = undefined;
                } 
            }
        }else if(elem.position.x < position.x && elem.position.y < position.y){
            for(let u of boardArray){
                if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                    u.setDot = undefined;
                } 
            }
        }else if(elem.position.x > position.x && elem.position.y < position.y){
            for(let u of boardArray){
                if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                    u.setDot = undefined;
                } 
            }
        }else if(elem.position.x < position.x && elem.position.y > position.y){
            for(let u of boardArray){
                if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                    u.setDot = undefined;
                } 
            }
        }
    }
}