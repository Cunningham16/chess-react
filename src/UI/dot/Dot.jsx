import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './dot.module.css';
import { changeTurn } from '../../figuresLogic/changeTurn';

function Dot(props) {   
    const {boardArray, 
            setBoardArray,
            setHints, 
            appearHints, 
            setTurn, 
            fallenFiguresLight,
            fallenFiguresDark} = useContext(BoardContext);

    function setFallenFigure(color, newPos){
        if(color === 'black'){
            fallenFiguresDark.push(newPos.whatPlaced);
        }else if( color === 'white'){
            fallenFiguresLight.push(newPos.whatPlaced);
        }
    }

    function moveFigure(objectDot){
        if(objectDot.type !== 'castling'){
            for(let elem of boardArray){
                if(elem.whatPlaced !== undefined && elem.position === objectDot.figurePosition){
                    let figure = elem.whatPlaced;
                    elem.whatPlaced = undefined;
                    for(let newPos of boardArray){
                        if(newPos.position === objectDot.position){
                            if(newPos.whatPlaced !== undefined){
                                setFallenFigure(newPos.whatPlaced.color, newPos)
                            }
                            newPos.whatPlaced = figure;
                            changeTurn(newPos.position, setTurn, boardArray, setBoardArray);
                        }
                    }
                }
            }
        }else if(objectDot.type === 'castling'){
            let king;
            let rook; 
            for(let elem of boardArray){
                if(elem.whatPlaced !== undefined 
                    && (elem.position === objectDot.kingPosition || elem.position === objectDot.rookPosition)){
                    if(elem.whatPlaced.id === 'king'){
                        king = elem;
                    }else if(elem.whatPlaced.id === 'rook'){
                        rook = elem;
                    }
                }
            }

            if(king.position.x < rook.position.x){
                for(let newPos of boardArray){
                    if(objectDot.position.x-1 === newPos.position.x && objectDot.position.y === newPos.position.y){
                        newPos.whatPlaced = rook.whatPlaced;
                    }
                }           
            }else if(king.position.x > rook.position.x){
                for(let newPos of boardArray){
                    if(objectDot.position.x+1 === newPos.position.x && objectDot.position.y === newPos.position.y){
                        newPos.whatPlaced = rook.whatPlaced;
                    }
                }
            }

            for(let newPos of boardArray){
                if(newPos.position === objectDot.position){
                    newPos.whatPlaced = king.whatPlaced;
                    changeTurn(newPos.position, setTurn, boardArray, setBoardArray);
                }
            } 

            for(let elem of boardArray){
                if(elem.whatPlaced !== undefined 
                    && (elem.position === objectDot.kingPosition || elem.position === objectDot.rookPosition)){
                        elem.whatPlaced = undefined;
                }
            }
        }

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
            case 'castling':
                return classes.dot;
            default:
                break;
        }
    }

    return ( 
        <button className={setTypeHint(props.objectDot.type)}
                onClick={() => {
                    moveFigure(props.objectDot);
                    boardArray.reverse()
                }}>
            {props.children}
        </button>
     );
}

export default Dot;