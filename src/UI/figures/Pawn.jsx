import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';

function Pawn(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);
    function setImageFigure(color){
        if(color === 'dark'){
            return './img/Chess_pdt60.png';
        }else if(color === 'light'){
            return './img/Chess_plt60.png';
        }
    }

    function hintsToMove(position){
        for(let elem of boardArray){
            elem.setDot = undefined;
        }

        for(let elem of boardArray){
            let pawnMoveBlack = elem.whatPlaced === undefined && props.color === 'dark';
            let pawnMoveWhite = elem.whatPlaced === undefined && props.color === 'light';

            let pawnAttackBlack = elem.whatPlaced !== undefined 
                                    && props.color === 'dark' 
                                    && elem.whatPlaced.color !== 'dark'
                                    && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                    && elem.position.y === position.y+1;

            
            let pawnAttackWhite = elem.whatPlaced !== undefined 
                                    && props.color === 'light' 
                                    && elem.whatPlaced.color !== 'light'
                                    && (elem.position.x === position.x-1 || elem.position.x === position.x+1)
                                    && elem.position.y === position.y-1;


            let pawnFirstMoveBlack = pawnMoveBlack 
                                        && elem.position.x === position.x 
                                        && (elem.position.y === position.y+1 || elem.position.y === position.y+2) 
                                        && position.y === 1;

            let pawnFirstMoveWhite = pawnMoveWhite 
                                        && elem.position.x === position.x 
                                        && (elem.position.y === position.y-1 || elem.position.y === position.y-2) 
                                        && position.y === 6;

            let pawnDefaultMoveBlack = pawnMoveBlack
                                        && elem.position.x === position.x
                                        && elem.position.y === position.y+1
                                        && position.y !== 1;

            let pawnDefaultMoveWhite = pawnMoveWhite
                                        && elem.position.x === position.x
                                        && elem.position.y === position.y-1
                                        && position.y !== 6;

            if(pawnFirstMoveBlack || pawnFirstMoveWhite || pawnDefaultMoveBlack || pawnDefaultMoveWhite){
                elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            }else if(pawnAttackWhite || pawnAttackBlack){
                elem.setDot = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            }            
        }
        setHints(!appearHints)
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {hintsToMove(props.position)}}
        >
            <img src={setImageFigure(props.color)} alt="img" />
        </button>
    );
}

export default Pawn;