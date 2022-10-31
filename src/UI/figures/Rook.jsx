import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_rdt60.png';
    }else if(color === 'light'){
        return './img/Chess_rlt60.png';
    }
}

function Rook(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);

    function hintsToMove(position){
        for(let elem of boardArray){
            elem.setDot = undefined;
        }

        for(let elem of boardArray){
            for(let i = 0; i <= 7; i++){
                if(elem.whatPlaced === undefined 
                    && (((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                    || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y))){
                        elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
                }
                
                if(elem.whatPlaced !== undefined 
                    && (((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                    || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y))
                    && elem.whatPlaced.color !== props.color){
                        elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
                }else if(elem.whatPlaced !== undefined 
                    && (((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                    || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y))
                    && elem.whatPlaced.color === props.color){
                        elem.setDot = {type: 'toClean'};
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

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    hintsToMove(props.position);
                }}>
            <img src={setImageFigure(props.color)} alt="rook"/>
        </button>
     );
}

export default Rook;