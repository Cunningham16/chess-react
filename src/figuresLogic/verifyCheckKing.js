//this code is not optimized, optimize this later (for myself)
export function verifyCheckKing(boardArray, color, setBoardArray){
    for(let elem of boardArray){
        if(elem.hasAvaliableMove !== false){
            elem.hasAvaliableMove = false;
        }
    }

    if(color === 'light'){
        setBoardArray(boardArray.reverse())
    }

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

    for(let elem of boardArray){
        if(elem.whatPlaced !== undefined 
            && elem.whatPlaced.id === 'king' 
            && elem.whatPlaced.color !== color 
            && (elem.hasAvaliableMove === true || elem.hasAvaliableMove === 'toClean')){
                console.log('Check!');
        }
    }
    

    function forPawn(position, color){
        for(let elem of boardArray){
            let pawnAttackBlack = color === 'dark' 
                                && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                && elem.position.y === position.y+1;

        
            let pawnAttackWhite = color === 'light' 
                                && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                && elem.position.y === position.y-1;

            if(pawnAttackWhite || pawnAttackBlack){
                elem.hasAvaliableMove = true;
            }
        }
    }

    function forRook(position, color){
        for(let elem of boardArray){
            for(let i = 0; i <= 7; i++){
                const moveHoristontalVertical = 
                ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)
    
                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.hasAvaliableMove = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                    elem.hasAvaliableMove = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === color){
                    elem.hasAvaliableMove = 'toClean';
                }
            }    
        }
    
        for(let elem of boardArray){
            if(elem.hasAvaliableMove !== false && elem.hasAvaliableMove === 'toClean'){
                clearUnnessesaryCells(elem, position);
            }
        }
    
        function clearUnnessesaryCells(elem, position){
            if((elem.position.x === position.x && (elem.position.y < position.y))
                || (elem.position.y === position.y && (elem.position.x < position.x))){
                    for(let u of boardArray){
                        if(( u.position.x < elem.position.x && u.position.y === elem.position.y) 
                            || ( u.position.y < elem.position.y && u.position.x === elem.position.x)){
                                u.hasAvaliableMove = false;
                        }
                    }
                }else if((elem.position.x === position.x && (elem.position.y > position.y))
                || (elem.position.y === position.y && (elem.position.x > position.x))){
                    for(let u of boardArray){
                        if(( u.position.x > elem.position.x && u.position.y === elem.position.y) 
                            || ( u.position.y > elem.position.y && u.position.x === elem.position.x)){
                                u.hasAvaliableMove = false;
                        }
                    }
                }
        }
    }

    function forBishop(position, color){
        boardArray.forEach(elem => {
            for(let i = 0; i <= 7; i++){
                if(elem.whatPlaced === undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)){
                        elem.hasAvaliableMove = true;
                }
                if(elem.whatPlaced !== undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)
                    && elem.whatPlaced.color !== color){
                        elem.hasAvaliableMove = 'toClean';
                }else if(elem.whatPlaced !== undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)
                    && elem.whatPlaced.color === color){
                        elem.hasAvaliableMove = 'toClean';
                }
            }    
        })

        for(let elem of boardArray){
            if(elem.hasAvaliableMove !== false && elem.hasAvaliableMove === 'toClean'){
                clearUnnessesaryCells(elem, position);
            }
        }
        
        function clearUnnessesaryCells(elem, position){
            if(elem.position.x > position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x > position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }
        }
    }

    function forQueen(position, color){
        boardArray.forEach((elem) => {    
            for(let i = 0; i <= 7; i++){
                const moveHoristontalVertical = ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)
    
                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.hasAvaliableMove = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                    elem.hasAvaliableMove = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === color){
                    elem.hasAvaliableMove = 'toClean';
                }
    
                const moveDiagonal = (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                                    && (elem.position.x === position.x-i || elem.position.x === position.x+i);
                
                if(elem.whatPlaced === undefined && moveDiagonal){
                    elem.hasAvaliableMove = true;
                }
                
                if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color !== color){
                    elem.hasAvaliableMove = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === color){
                    elem.hasAvaliableMove = 'toClean';
                }
            }    
        })
    
        for(let elem of boardArray){
            if(elem.hasAvaliableMove !== false && elem.hasAvaliableMove === 'toClean'){
                clearUnnessesaryCells(elem, position);
            }
        }
    
    
        function clearUnnessesaryCells(elem, position){
            if(elem.position.x > position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x > position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(position.x > elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && position.y === u.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(position.x < elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && position.y === u.position.y){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(position.y > elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y < elem.position.y && position.x === u.position.x){
                        u.hasAvaliableMove = false;
                    } 
                }
            }else if(position.y < elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y > elem.position.y && position.x === u.position.x){
                        u.hasAvaliableMove = false;
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
                        elem.hasAvaliableMove = true;
                    }else if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color && elem.whatPlaced.id !== 'king'){
                        elem.hasAvaliableMove = true;
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
                elem.hasAvaliableMove = true;
            }
        }
    }

    if(color === 'light'){
        setBoardArray(boardArray.reverse())
    }
}