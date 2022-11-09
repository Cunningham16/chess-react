export function castlingHints(boardArray, setHints, appearHints, turn){
    for(let elem of boardArray){
        if(elem.whatPlaced !== undefined && elem.whatPlaced.id === 'king'){
            hintsToMove(elem, elem.position, turn);
        }
    }

    function hintsToMove(kingPos, position, turn){ 
        for(let elem of boardArray){
            if(kingPos.position.x === elem.position.x-3
            && kingPos.position.y === elem.position.y 
            && elem.whatPlaced !== undefined 
            && elem.whatPlaced.id === 'rook' 
            && elem.whatPlaced.color === kingPos.whatPlaced.color){
                for(let elem1 of boardArray){
                    if(kingPos.position.x === elem1.position.x-2 
                    && elem1.whatPlaced === undefined
                    && kingPos.position.y === elem1.position.y
                    && kingPos.whatPlaced.color === turn){
                        elem1.setDot = {position: elem1.position,
                                        id: 'dot', 
                                        kingPosition: position,
                                        rookPosition: elem.position,
                                        type: 'castling'};
                    }
                }
            }
            
            if(kingPos.position.x === elem.position.x+4
                && kingPos.position.y === elem.position.y
                && elem.whatPlaced !== undefined 
                && elem.whatPlaced.id === 'rook' 
                && elem.whatPlaced.color === kingPos.whatPlaced.color){
                for(let elem1 of boardArray){
                    if(kingPos.position.x === elem1.position.x+2 
                    && elem1.whatPlaced === undefined
                    && kingPos.position.y === elem1.position.y
                    && kingPos.whatPlaced.color === turn){
                        elem1.setDot = {position: elem1.position,
                                        id: 'dot', 
                                        kingPosition: position,
                                        rookPosition: elem.position,
                                        type: 'castling'};
                    }
                }
            }    
        }
    }
    setHints(!appearHints);
}