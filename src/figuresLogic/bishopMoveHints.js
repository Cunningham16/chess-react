export function bishopMoveHints(position, boardArray, setHints, appearHints, props) {
    for(let elem of boardArray){
        elem.setDot = undefined;
    }
    
    boardArray.forEach(elem => {
        for(let i = 0; i <= 7; i++){
            if(elem.whatPlaced === undefined 
                && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                && (elem.position.x === position.x-i || elem.position.x === position.x+i)){
                    elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            }
            
            if(elem.whatPlaced !== undefined 
                && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                && (elem.position.x === position.x-i || elem.position.x === position.x+i)
                && elem.whatPlaced.color !== props.color && elem.whatPlaced.id !== 'king'){
                    elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(elem.whatPlaced !== undefined 
                && (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                && (elem.position.x === position.x-i || elem.position.x === position.x+i)
                && (elem.whatPlaced.color === props.color || elem.whatPlaced.id === 'king')){
                    elem.setDot = {type: 'toClean'};
            }
        }    
        setHints(!appearHints)
    })
    
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