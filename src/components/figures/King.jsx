import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { kingMoveHints } from '../../figuresLogic/kingMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';
import { castlingHints } from '../../figuresLogic/castlingHints';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_kdt60.png';
    }else if(color === 'white'){
        return './img/Chess_klt60.png';
    }
}

function King({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn, isEndCase} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    kingMoveHints(position, boardArray, setHints, appearHints, figureObject);
                    castlingHints(boardArray, setHints, appearHints, turn)
                }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt=""/>
        </button>
     );
}

export default King;