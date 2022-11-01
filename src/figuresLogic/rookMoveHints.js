export function rookMoveHints(position, boardArray, setHints, appearHints, props){
    
    for(let elem of boardArray){
        elem.setDot = undefined;
    }

    for(let elem of boardArray){
        const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
        const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
        const clearObject = {type: 'toClean'};
        for(let i = 0; i <= 7; i++){
            const moveHoristontalVertical = 
            ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
            || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)

            if(elem.whatPlaced === undefined && moveHoristontalVertical){
                elem.setDot = dotObject;
            }
            
            if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== props.color){
                elem.setDot = circleObject;
            }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === props.color){
                elem.setDot = clearObject;
            }
        }    
        setHints(!appearHints)
    }

    for(let elem of boardArray){
        if(elem.setDot !== undefined && elem.setDot.type === 'circle'){
            clearUnnessesaryCells(elem, position);
        }else if(elem.setDot !== undefined && elem.setDot.type === 'toClean'){
            clearUnnessesaryCells(elem, position);
        }
    }

    function clearUnnessesaryCells(elem, position){
        if((elem.position.x === position.x && (elem.position.y < position.y))
            || (elem.position.y === position.y && (elem.position.x < position.x))){
                for(let u of boardArray){
                    if(( u.position.x < elem.position.x && u.position.y === elem.position.y) 
                        || ( u.position.y < elem.position.y && u.position.x === elem.position.x)){
                        u.setDot = undefined;
                    }
                }
            }else if((elem.position.x === position.x && (elem.position.y > position.y))
            || (elem.position.y === position.y && (elem.position.x > position.x))){
                for(let u of boardArray){
                    if(( u.position.x > elem.position.x && u.position.y === elem.position.y) 
                        || ( u.position.y > elem.position.y && u.position.x === elem.position.x)){
                        u.setDot = undefined;
                    }
                }
            }
    }
}