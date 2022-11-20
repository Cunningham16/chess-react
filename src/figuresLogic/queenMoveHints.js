export function queenMoveHints(position, boardArray, setHints, appearHints, color, figureObject){
    let isBlocked = false;

    for(let elem of boardArray){
        elem.setDot = undefined
    }

    if(figureObject.avaliableMoves !== undefined){
        isBlocked = true;
    }

    for(let elem of boardArray){
        const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
        const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
        const clearObject = {type: 'toClean'};

        if(isBlocked === false){
            for(let i = 0; i <= 7; i++){
                const moveUp = elem.position.y === position.y-i && elem.position.x === position.x;
                const moveDown = elem.position.y === position.y+i && elem.position.x === position.x;
                const moveRight = elem.position.x === position.x+i && elem.position.y === position.y;
                const moveLeft = elem.position.x === position.x-i && elem.position.y === position.y;

                const moveHoristontalVertical = moveDown || moveLeft || moveRight || moveUp;
    
                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.setDot = dotObject;
                }

                const moveToFigureStraight = elem.whatPlaced !== undefined && moveHoristontalVertical;
                
                if(moveToFigureStraight && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                    elem.setDot = circleObject;
                }else if(moveToFigureStraight && elem.whatPlaced.color === color){
                    elem.setDot = clearObject;
                }
                
                const moveRightDown = elem.position.y === position.y+i && elem.position.x === position.x+i;
                const moveRightUp = elem.position.y === position.y-i && elem.position.x === position.x+i;
                const moveLeftDown = elem.position.y === position.y+i && elem.position.x === position.x-i;
                const moveLeftUp = elem.position.y === position.y-i && elem.position.x === position.x-i;

                const moveDiagonal = moveLeftDown || moveLeftUp || moveRightUp || moveRightDown; 
                
                if(elem.whatPlaced === undefined && moveDiagonal){
                        elem.setDot = dotObject;
                }
                
                if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                        elem.setDot = circleObject;
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === color){
                        elem.setDot = clearObject;
                }
            }
        }
        
        if(isBlocked === true){
            for(let i = 0; i <= 7; i++){
                const moveRightDown = elem.position.y === position.y+i && elem.position.x === position.x+i;
                const moveRightUp = elem.position.y === position.y-i && elem.position.x === position.x+i;
                const moveLeftDown = elem.position.y === position.y+i && elem.position.x === position.x-i;
                const moveLeftUp = elem.position.y === position.y-i && elem.position.x === position.x-i;
                const moveUpDown = (elem.position.y === position.y-i && elem.position.x === position.x)
                || (elem.position.y === position.y+i && elem.position.x === position.x);
                const moveRightLeft = (elem.position.x === position.x+i && elem.position.y === position.y) 
                || (elem.position.x === position.x-i && elem.position.y === position.y);

                if(figureObject.avaliableMoves === 'left' || figureObject.avaliableMoves === 'right'){
                    if(elem.whatPlaced === undefined && moveRightLeft){
                        elem.setDot = dotObject;
                    }
            
                    if(elem.whatPlaced !== undefined && moveRightLeft && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                        elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && moveRightLeft && elem.whatPlaced.color === color){
                        elem.setDot = clearObject;
                    }
                }else if(figureObject.avaliableMoves === 'down' || figureObject.avaliableMoves === 'up'){
                    if(elem.whatPlaced === undefined && moveUpDown){
                        elem.setDot = dotObject;
                    }
            
                    if(elem.whatPlaced !== undefined && moveUpDown && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                        elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && moveUpDown && elem.whatPlaced.color === color){
                        elem.setDot = clearObject;
                    }
                }else if(figureObject.avaliableMoves === 'right down' || figureObject.avaliableMoves === 'left up'){
                    if(elem.whatPlaced === undefined && (moveRightDown || moveLeftUp)){
                        elem.setDot = dotObject;
                    }
                
                    if(elem.whatPlaced !== undefined && (moveRightDown || moveLeftUp) && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                            elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && (moveRightDown || moveLeftUp) && elem.whatPlaced.color === color){
                        elem.setDot = clearObject;
                    }    
                }else if(figureObject.avaliableMoves === 'left down' || figureObject.avaliableMoves === 'right up'){
                    if(elem.whatPlaced === undefined && (moveRightUp || moveLeftDown)){
                        elem.setDot = dotObject;
                    }
                
                    if(elem.whatPlaced !== undefined && (moveRightUp || moveLeftDown) && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                            elem.setDot = circleObject;
                    }else if(elem.whatPlaced !== undefined && (moveRightUp || moveLeftDown) && elem.whatPlaced.color === color){
                        elem.setDot = clearObject;
                    }
                }                
            }
        }
                   
        setHints(!appearHints)
    }

    

    for(let elem of boardArray){
        if(elem.setDot !== undefined && elem.setDot.type === 'circle'){
            clearUnnessesaryCells(elem, position);
        }else if(elem.setDot !== undefined && elem.setDot.type === 'toClean'){
            clearUnnessesaryCells(elem, position);
            elem.setDot = undefined;
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
        }else if(position.x > elem.position.x && position.y === elem.position.y){
            for(let u of boardArray){
                if(u.position.x < elem.position.x && position.y === u.position.y){
                    u.setDot = undefined;
                } 
            }
        }else if(position.x < elem.position.x && position.y === elem.position.y){
            for(let u of boardArray){
                if(u.position.x > elem.position.x && position.y === u.position.y){
                    u.setDot = undefined;
                } 
            }
        }else if(position.y > elem.position.y && position.x === elem.position.x){
            for(let u of boardArray){
                if(u.position.y < elem.position.y && position.x === u.position.x){
                    u.setDot = undefined;
                } 
            }
        }else if(position.y < elem.position.y && position.x === elem.position.x){
            for(let u of boardArray){
                if(u.position.y > elem.position.y && position.x === u.position.x){
                    u.setDot = undefined;
                } 
            }
        }
    }
}