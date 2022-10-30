import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './dot.module.css';

function Dot(props) {   
    const {boardArray, setHints, appearHints} = useContext(BoardContext)

    function moveFigure(objectDot){
        for(let elem of boardArray){
            if(elem.whatPlaced !== undefined && elem.position === objectDot.figurePosition){
                let figure = elem.whatPlaced;
                elem.whatPlaced = undefined;
                for(let newPos of boardArray){
                    if(newPos.position === objectDot.position){
                        newPos.whatPlaced = figure;
                    }
                }
            }
        }
        setHints(!appearHints)
        for(let elem of boardArray){
            elem.setDot = undefined;
        }
        setHints(!appearHints)
    }

    function setTypeHint(type){
        switch (type) {
            case 'dot':
                return classes.dot;
            case 'circle':
                return classes.circle;
            case 'toClean':
                return classes.hidden;
        
            default:
                break;
        }
    }

    return ( 
        <button className={setTypeHint(props.objectDot.type)}
                onClick={() => {
                    moveFigure(props.objectDot);
                }}>
            {props.children}
        </button>
     );
}

export default Dot;