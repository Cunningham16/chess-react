import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { knightMoveHints } from '../../figuresLogic/knightMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_ndt60.png';
    }else if(color === 'white'){
        return './img/Chess_nlt60.png';
    }
}

function Knight({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    knightMoveHints(position, boardArray, setHints, appearHints, figureObject)
                }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="knight"/>
        </button>
    );
}

export default Knight;