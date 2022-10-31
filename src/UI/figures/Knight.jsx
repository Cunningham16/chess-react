import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_ndt60.png';
    }else if(color === 'light'){
        return './img/Chess_nlt60.png';
    }
}

function Knight(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);
    
    function hintsToMove(position){
        for(let elem of boardArray){
            elem.setDot = undefined;
        }

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
                        elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
                    }else if(elem.whatPlaced !== undefined && elem.whatPlaced.color !== props.color){
                        elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                    }
                }
        }
        setHints(!appearHints);
    }

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    hintsToMove(props.position);
                }}>
            <img src={setImageFigure(props.color)} alt="knight"/>
        </button>
     );
}

export default Knight;