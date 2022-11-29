export function castlingHints(boardArray, setHints, appearHints, turn){
    
    for(let elem of boardArray){
        if(elem.whatPlaced !== undefined && elem.whatPlaced.id === 'king'){
            hintsToMove(elem, elem.position, turn);
        }
    }

    function hintsToMove(kingPos, position, turn){ 
        for(let elem of boardArray){
            let findPositionShorterRook = kingPos.position.x === elem.position.x-3 && kingPos.position.y === elem.position.y && elem.whatPlaced !== undefined ;
            let findShorterRook = findPositionShorterRook && elem.whatPlaced.id === 'rook' && elem.whatPlaced.color === kingPos.whatPlaced.color;

            if(findShorterRook){
                for(let elem1 of boardArray){
                    let findPositionCastling = kingPos.position.x === elem1.position.x-2 && elem1.whatPlaced === undefined && kingPos.position.y === elem1.position.y;

                    if(findPositionCastling && kingPos.whatPlaced.color === turn){
                        if(turn === 'white'){
                            verifyCastlingShortWhite(kingPos, elem1, elem.position, position, boardArray);
                        }else if(turn === 'black'){
                            verifyCastlingShortBlack(kingPos, elem1, elem.position, position, boardArray);
                        }
                    }
                }
            }
            
            const findPositionLongerRook = kingPos.position.x === elem.position.x+4 && kingPos.position.y === elem.position.y && elem.whatPlaced !== undefined;
            const findLongerRook = findPositionLongerRook && elem.whatPlaced.id === 'rook' && elem.whatPlaced.color === kingPos.whatPlaced.color;
            
            if(findLongerRook){
                for(let elem1 of boardArray){
                    let findPositionCastling = kingPos.position.x === elem1.position.x+2 && elem1.whatPlaced === undefined && kingPos.position.y === elem1.position.y;

                    if(findPositionCastling && kingPos.whatPlaced.color === turn){
                        if(turn === 'white'){
                            verifyCastlingLongWhite(kingPos, elem1, elem.position, position, boardArray);
                        }else if(turn === 'black'){
                            verifyCastlingLongBlack(kingPos, elem1, elem.position, position, boardArray);
                        }
                    }
                }
            }    
        }
    }

    setHints(!appearHints);
}

function verifyCastlingShortWhite(kingPos, placeDot, rookPos, position, boardArray){
    let isBlocked = false;
    for(let elem of boardArray){
        for(let i = 1; i < 3; i++){
            if(kingPos.position.x === elem.position.x-i && kingPos.position.y === elem.position.y && !(elem.whatPlaced === undefined && elem.hasAvaliableAttackKing === false)){
                isBlocked = true;
            }
        }
    }

    if(isBlocked === false){
        placeDot.setDot = {position: placeDot.position,
            id: 'dot', 
            kingPosition: position,
            rookPosition: rookPos,
            type: 'castling'};
    }
}

function verifyCastlingLongWhite(kingPos, placeDot, rookPos, position, boardArray){
    let isBlocked = false;
    for(let elem of boardArray){
        for(let i = 1; i < 4; i++){
            if(kingPos.position.x === elem.position.x+i && kingPos.position.y === elem.position.y && !(elem.whatPlaced === undefined && elem.hasAvaliableAttackKing === false)){
                isBlocked = true;
            }
        }
    }

    if(isBlocked === false){
        placeDot.setDot = {position: placeDot.position,
            id: 'dot', 
            kingPosition: position,
            rookPosition: rookPos,
            type: 'castling'};
    }
}

function verifyCastlingShortBlack(kingPos, placeDot, rookPos, position, boardArray){
    let isBlocked = false;
    for(let elem of boardArray){
        for(let i = 1; i < 3; i++){
            if(kingPos.position.x === elem.position.x-i && kingPos.position.y === elem.position.y && !(elem.whatPlaced === undefined && elem.hasAvaliableAttackKing === false)){
                isBlocked = true;
            }
        }
    }

    if(isBlocked === false){
        placeDot.setDot = {position: placeDot.position,
            id: 'dot', 
            kingPosition: position,
            rookPosition: rookPos,
            type: 'castling'};
    }
}

function verifyCastlingLongBlack(kingPos, placeDot, rookPos, position, boardArray){
    let isBlocked = false;
    for(let elem of boardArray){
        for(let i = 1; i < 3; i++){
            if(kingPos.position.x === elem.position.x+i && kingPos.position.y === elem.position.y && !(elem.whatPlaced === undefined && elem.hasAvaliableAttackKing === false)){
                isBlocked = true;
            }
        }
    }

    if(isBlocked === false){
        placeDot.setDot = {position: placeDot.position,
            id: 'dot', 
            kingPosition: position,
            rookPosition: rookPos,
            type: 'castling'};
    }
}