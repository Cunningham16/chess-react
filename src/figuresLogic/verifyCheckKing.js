//this code is not optimized, optimize this later (for myself)

export function verifyCheckKing(boardArray, color, setBoardArray){
    for(let elem of boardArray){
        if(elem.hasAvaliableAttackKing !== false){
            elem.hasAvaliableAttackKing = false;
        }

        if(elem.whatPlaced !== undefined && elem.whatPlaced.avaliableMoves !== undefined){
            elem.whatPlaced.avaliableMoves = undefined;
        }
    }
    
    setBoardArray(boardArray.reverse())

    for(let elem of boardArray){
        if(elem.whatPlaced !== undefined && elem.whatPlaced.color === color){
            switch (elem.whatPlaced.id) {
                case 'pawn':
                    forPawn(elem.position, color);
                    break;
                case 'rook':
                    forRook(elem.position, color);
                    break;
                case 'queen':
                    forQueen(elem.position, color);
                    break;
                case 'knight':
                    forKnight(elem.position, color);
                    break;
                case 'bishop':
                    forBishop(elem.position, color);
                    break;
                case 'king':
                    forKing(elem.position);
                    break;
            
                default:
                    break;
            }
        }  
    }

    function forPawn(position, color){
        for(let elem of boardArray){
            let moveDiagonal = elem.position.x === position.x-1 || elem.position.x === position.x+1;

            let attackPawnBlack = moveDiagonal && elem.position.y === position.y+1;
            let pawnAttackBlack = color === 'black' && attackPawnBlack;
            
            let attackPawnWhite = moveDiagonal && elem.position.y === position.y-1;
            let pawnAttackWhite = color === 'white' && attackPawnWhite;

            if(pawnAttackWhite || pawnAttackBlack){
                if(elem.whatPlaced !== undefined && elem.whatPlaced.id === 'king' && elem.whatPlaced.color !== color){
                    console.log(elem, position)
                }

                elem.hasAvaliableAttackKing = true;
            }
        }
    }

    function forRook(position, color){
        let arrayFigures1 = [];
        let arrayFigures2 = [];
        let arrayFigures3 = [];
        let arrayFigures4 = [];
        for(let elem of boardArray){
            for(let i = 0; i <= 7; i++){
                const moveHoristontalVertical = 
                ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)
    
                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.hasAvaliableAttackKing = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color){
                    elem.hasAvaliableAttackKing = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === color){
                    elem.hasAvaliableAttackKing = 'toClean';
                }

                if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color){
                    if(elem.position.y === position.y+i && elem.position.x === position.x){
                        let direction = 'down'
                        createAttackingPositionReverse(arrayFigures1, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x){
                        let direction = 'up'
                        createAttackingPositionNormal(arrayFigures2, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y && elem.position.x === position.x-i){
                        let direction = 'left'
                        createAttackingPositionReverse(arrayFigures3, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y && elem.position.x === position.x+i){
                        let direction = 'right'
                        createAttackingPositionNormal(arrayFigures4, elem, color, boardArray, direction)
                    }
                }
            }    
        }
    
        for(let elem of boardArray){
            if(elem.hasAvaliableAttackKing !== false && elem.hasAvaliableAttackKing === 'toClean'){
                if(elem.whatPlaced.id === 'king' && elem.whatPlaced.color !== color){
                    console.log(true)
                }
                clearUnnessesaryCells(elem, position);
                elem.hasAvaliableAttackKing = true;
            }
        }
    
        function clearUnnessesaryCells(elem, position){
            if((elem.position.x === position.x && (elem.position.y < position.y))
                || (elem.position.y === position.y && (elem.position.x < position.x))){
                    for(let u of boardArray){
                        if(( u.position.x < elem.position.x && u.position.y === elem.position.y) 
                            || ( u.position.y < elem.position.y && u.position.x === elem.position.x)){
                                u.hasAvaliableAttackKing = false;
                        }
                    }
                }else if((elem.position.x === position.x && (elem.position.y > position.y))
                || (elem.position.y === position.y && (elem.position.x > position.x))){
                    for(let u of boardArray){
                        if(( u.position.x > elem.position.x && u.position.y === elem.position.y) 
                            || ( u.position.y > elem.position.y && u.position.x === elem.position.x)){
                                u.hasAvaliableAttackKing = false;
                        }
                    }
                }
        }
    }

    function forBishop(position, color){
        let arrayFigures1 = [];
        let arrayFigures2 = [];
        let arrayFigures3 = [];
        let arrayFigures4 = [];
        boardArray.forEach(elem => {
            for(let i = 0; i <= 7; i++){
                if(elem.whatPlaced === undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)){
                        elem.hasAvaliableAttackKing = true;
                }

                if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color){
                    let direction;
                    if(elem.position.y === position.y-i && elem.position.x === position.x-i){
                        direction = 'left up'
                        createAttackingPositionReverse(arrayFigures1, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x+i){
                        direction = 'right up'
                        createAttackingPositionNormal(arrayFigures2, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x-i){
                        direction = 'right down'
                        createAttackingPositionReverse(arrayFigures3, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x+i){
                        direction = 'left down'
                        createAttackingPositionNormal(arrayFigures4, elem, color, boardArray, direction)
                    }
                }else if(elem.whatPlaced !== undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)
                    && elem.whatPlaced.color === color){
                    elem.hasAvaliableAttackKing = 'toClean';
                }
            }    
        })

        for(let elem of boardArray){
            if(elem.hasAvaliableAttackKing !== false && elem.hasAvaliableAttackKing === 'toClean'){
                if(elem.whatPlaced.id === 'king' && elem.whatPlaced.color !== color){
                    console.log(true)
                }
                clearUnnessesaryCells(elem, position);
                elem.hasAvaliableAttackKing = true;
            }
        }
        
        function clearUnnessesaryCells(elem, position){
            if(elem.position.x > position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x > position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }
        }
    }

    function forQueen(position, color){
        let arrayFigures1 = [];
        let arrayFigures2 = [];
        let arrayFigures3 = [];
        let arrayFigures4 = [];
        let arrayFigures5 = [];
        let arrayFigures6 = [];
        let arrayFigures7 = [];
        let arrayFigures8 = [];
        boardArray.forEach((elem) => {    
            for(let i = 0; i <= 7; i++){
                const moveHoristontalVertical = ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)
    
                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.hasAvaliableAttackKing = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color){
                    let direction;
                    if(elem.position.y === position.y+i && elem.position.x === position.x){
                        direction = 'down'
                        createAttackingPositionReverse(arrayFigures1, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x){
                        direction = 'up'
                        createAttackingPositionNormal(arrayFigures2, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y && elem.position.x === position.x+i){
                        direction = 'right'
                        createAttackingPositionReverse(arrayFigures3, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y && elem.position.x === position.x-i){
                        direction = 'left'
                        createAttackingPositionNormal(arrayFigures4, elem, color, boardArray, direction)
                    }
                    elem.hasAvaliableAttackKing = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === color){
                    elem.hasAvaliableAttackKing = 'toClean';
                }
    
                const moveDiagonal = (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                                    && (elem.position.x === position.x-i || elem.position.x === position.x+i);
                
                if(elem.whatPlaced === undefined && moveDiagonal){
                    elem.hasAvaliableAttackKing = true;
                }
                
                if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color !== color){
                    let direction;
                    if(elem.position.y === position.y-i && elem.position.x === position.x-i){
                        direction = 'left down'
                        createAttackingPositionReverse(arrayFigures5, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x+i){
                        direction = 'right down'
                        createAttackingPositionNormal(arrayFigures6, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x-i){
                        direction = 'right up'
                        createAttackingPositionReverse(arrayFigures7, elem, color, boardArray, direction)
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x+i){
                        direction = 'left up'
                        createAttackingPositionNormal(arrayFigures8, elem, color, boardArray, direction)
                    }
                    elem.hasAvaliableAttackKing = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === color){
                    elem.hasAvaliableAttackKing = 'toClean';
                }
            }    
        })
    
        for(let elem of boardArray){
            if(elem.hasAvaliableAttackKing !== false && elem.hasAvaliableAttackKing === 'toClean'){
                if(elem.whatPlaced.id === 'king' && elem.whatPlaced.color !== color){
                    console.log(true)
                }
                clearUnnessesaryCells(elem, position);
                elem.hasAvaliableAttackKing = true;
            }
        }
    
        function clearUnnessesaryCells(elem, position){
            for(let k of boardArray){
                if(k.position === position){
                    k.hasAvaliableAttackKing = false;
                }
            }
            if(elem.position.x > position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x > position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(position.x > elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && position.y === u.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(position.x < elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && position.y === u.position.y){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(position.y > elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y < elem.position.y && position.x === u.position.x){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }else if(position.y < elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y > elem.position.y && position.x === u.position.x){
                        u.hasAvaliableAttackKing = false;
                    } 
                }
            }
        }
    }

    function forKnight(position, color){
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
                        elem.hasAvaliableAttackKing = true;
                    }else if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                        elem.hasAvaliableAttackKing = true;
                    }
                }
        }
    }

    function forKing(position){
        for(let elem of boardArray){
            if((elem.position.x === position.x+1 
                    || elem.position.x === position.x-1
                    || elem.position.x === position.x)
                && (elem.position.y === position.y+1 
                    || elem.position.y === position.y-1
                    || elem.position.y === position.y)
                && !(elem.position.x === position.x && elem.position.y === position.y)){
                elem.hasAvaliableAttackKing = true;
            }
        }
    }

    function disableMoveFigure(arrayFigures, boardArray){
        let direction;
        let king;
        let figure;
    
        king = arrayFigures[1].position;
        figure = arrayFigures[0].position;
    
        if(figure.x > king.x && figure.y > king.y){
            direction = 'right down';
        }else if(figure.x < king.x && figure.y < king.y){
            direction = 'left up';
        }else if(figure.x > king.x && figure.y < king.y){
            direction = 'right up';
        }else if(figure.x < king.x && figure.y > king.y){
            direction = 'left down';
        }else if(king.x > figure.x && king.y === figure.y){
            direction = 'right';
        }else if(king.x < figure.x && king.y === figure.y){
            direction = 'left';
        }else if(king.y > figure.y && king.x === figure.x){
            direction = 'up';
        }else if(king.y < figure.y && king.x === figure.x){
            direction = 'down';
        }
    
        for(let elem of boardArray){
            if(figure === elem.position){
                elem.whatPlaced.avaliableMoves = direction;
            }
        }
    }

    function createAttackingPositionReverse(array, elem, color, boardArray){
        array.push(elem)
        
        if(array.length === 2 && color === 'white'){
            array = array.reverse();
        }
        
        if(array.length === 2 && array[1].whatPlaced.id === 'king' && color === 'white'){
            disableMoveFigure(array, boardArray, color);
        }else if(array.length === 2 && elem.whatPlaced.id === 'king' && color === 'black'){
            disableMoveFigure(array, boardArray, color);
        }
    }

    function createAttackingPositionNormal(array, elem, color, boardArray){
        array.push(elem)

        if(elem.whatPlaced.id === 'king' && array.length === 2){
            disableMoveFigure(array, boardArray, color);
        }           
    }

    setBoardArray(boardArray.reverse())
}

function setCheck(king, position, boardArray){
    
}