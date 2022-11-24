//this code is not optimized, optimize this later (for myself)

export function verifyCheckKing(boardArray, color, setBoardArray){
    for(let elem of boardArray){
        if(elem.hasAvaliableMove !== false){
            elem.hasAvaliableMove = false;
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

    for(let elem of boardArray){
        if(elem.whatPlaced !== undefined
            && elem.hasAvaliableMove === true
            && elem.whatPlaced.color !== color
            && elem.whatPlaced.id === 'king'){
                console.log('Check!');
            }
    }

    function forPawn(position, color){
        for(let elem of boardArray){
            let moveDiagonal = elem.position.x === position.x-1 || elem.position.x === position.x+1;

            let attackPawnBlack = moveDiagonal && elem.position.y === position.y+1;
            let pawnAttackBlack = color === 'dark' && attackPawnBlack;
            
            let attackPawnWhite = moveDiagonal && elem.position.y === position.y-1;
            let pawnAttackWhite = color === 'light' && attackPawnWhite;

            if(pawnAttackWhite || pawnAttackBlack){
                elem.hasAvaliableMove = true;
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
                    elem.hasAvaliableMove = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color){
                    elem.hasAvaliableMove = 'toClean';
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === color){
                    elem.hasAvaliableMove = 'toClean';
                }

                if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color){
                    if(elem.position.y === position.y+i && elem.position.x === position.x){
                        arrayFigures1.push(elem)
                        if(arrayFigures1.length === 2 && color === 'light'){
                            arrayFigures1 = arrayFigures1.reverse();
                        }
                        
                        if(arrayFigures1.length === 2 && arrayFigures1[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }else if(arrayFigures1.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x){
                        arrayFigures2.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures2.length === 2){
                            disableMoveFigure(arrayFigures2, boardArray, color);
                        }
                    }else if(elem.position.y === position.y && elem.position.x === position.x-i){
                        arrayFigures3.push(elem)
                        if(arrayFigures3.length === 2 && color === 'light'){
                            arrayFigures3 = arrayFigures3.reverse();
                        }
                        
                        if(arrayFigures3.length === 2 && arrayFigures3[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }else if(arrayFigures3.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }
                    }else if(elem.position.y === position.y && elem.position.x === position.x+i){
                        arrayFigures4.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures4.length === 2){
                            disableMoveFigure(arrayFigures4, boardArray, color);
                        }
                    }
                }
            }    
        }
    
        for(let elem of boardArray){
            if(elem.hasAvaliableMove !== false && elem.hasAvaliableMove === 'toClean'){
                clearUnnessesaryCells(elem, position);
                elem.hasAvaliableMove = true;
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
        let arrayFigures1 = [];
        let arrayFigures2 = [];
        let arrayFigures3 = [];
        let arrayFigures4 = [];
        boardArray.forEach(elem => {
            for(let i = 0; i <= 7; i++){
                if(elem.whatPlaced === undefined 
                    && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                    && (elem.position.x === position.x-i || elem.position.x === position.x+i)){
                        elem.hasAvaliableMove = true;
                }
                if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== color){
                    if(elem.position.y === position.y-i && elem.position.x === position.x-i){
                        arrayFigures1.push(elem)
                        if(arrayFigures1.length === 2 && color === 'light'){
                            arrayFigures1 = arrayFigures1.reverse();
                        }
                        
                        if(arrayFigures1.length === 2 && arrayFigures1[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }else if(arrayFigures1.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x+i){
                        arrayFigures2.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures2.length === 2){
                            disableMoveFigure(arrayFigures2, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x-i){
                        arrayFigures3.push(elem)
                        if(arrayFigures3.length === 2 && color === 'light'){
                            arrayFigures3 = arrayFigures3.reverse();
                        }
                        
                        if(arrayFigures3.length === 2 && arrayFigures3[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }else if(arrayFigures3.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x+i){
                        arrayFigures4.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures4.length === 2){
                            disableMoveFigure(arrayFigures4, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }
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
                elem.hasAvaliableMove = true;
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
                    elem.hasAvaliableMove = true;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== color){
                    if(elem.position.y === position.y+i && elem.position.x === position.x){
                        arrayFigures1.push(elem)
                        if(arrayFigures1.length === 2 && color === 'light'){
                            arrayFigures1 = arrayFigures1.reverse();
                        }
                        
                        if(arrayFigures1.length === 2 && arrayFigures1[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }else if(arrayFigures1.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures1, boardArray, color);
                        }
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x){
                        arrayFigures2.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures2.length === 2){
                            disableMoveFigure(arrayFigures2, boardArray, color);
                        }
                    }else if(elem.position.y === position.y && elem.position.x === position.x+i){
                        arrayFigures3.push(elem);
                        if(arrayFigures3.length === 2 && color === 'light'){
                            arrayFigures3 = arrayFigures3.reverse();
                        }
                        
                        if(arrayFigures3.length === 2 && arrayFigures3[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }else if(arrayFigures3.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures3, boardArray, color);
                        }
                    }else if(elem.position.y === position.y && elem.position.x === position.x-i){
                        arrayFigures4.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures4.length === 2){
                            disableMoveFigure(arrayFigures4, boardArray, color);
                        }
                    }
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
                    if(elem.position.y === position.y-i && elem.position.x === position.x-i){
                        arrayFigures5.push(elem)
                        if(arrayFigures5.length === 2 && color === 'light'){
                            arrayFigures5 = arrayFigures5.reverse();
                        }
                        
                        if(arrayFigures5.length === 2 && arrayFigures5[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures5, boardArray, color);
                        }else if(arrayFigures5.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures5, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y-i && elem.position.x === position.x+i){
                        arrayFigures6.push(elem)
                        if(arrayFigures6.length === 2 && color === 'light'){
                            arrayFigures6 = arrayFigures6.reverse();
                        }
                        
                        if(arrayFigures6.length === 2 && arrayFigures6[1].whatPlaced.id === 'king' && color === 'light'){
                            disableMoveFigure(arrayFigures6, boardArray, color);
                        }else if(arrayFigures6.length === 2 && elem.whatPlaced.id === 'king' && color === 'dark'){
                            disableMoveFigure(arrayFigures6, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x-i){
                        arrayFigures7.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures7.length === 2){
                            disableMoveFigure(arrayFigures7, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }else if(elem.position.y === position.y+i && elem.position.x === position.x+i){
                        arrayFigures8.push(elem)
                        if(elem.whatPlaced.id === 'king' && arrayFigures8.length === 2){
                            disableMoveFigure(arrayFigures8, boardArray, color);
                        }
                        elem.hasAvaliableMove = 'toClean';
                    }
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === color){
                    elem.hasAvaliableMove = 'toClean';
                }
            }    
        })
    
        for(let elem of boardArray){
            if(elem.hasAvaliableMove !== false && elem.hasAvaliableMove === 'toClean'){
                clearUnnessesaryCells(elem, position);
                elem.hasAvaliableMove = true;
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

    function disableMoveFigure(arrayFigures, boardArray, color){
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

    setBoardArray(boardArray.reverse())
}