import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { knightMoveHints } from '../../figuresLogic/knightMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_ndt60.png';
    }else if(color === 'light'){
        return './img/Chess_nlt60.png';
    }
}

function Knight({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn, isEndCase} = useContext(BoardContext);

    function setBlocked(){
        if(isEndCase.status){
            return true;
        }else{
            return isTurn(color, turn)
        }
    }

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    knightMoveHints(position, boardArray, setHints, appearHints, figureObject)
                }}
                disabled={setBlocked()}>
            <img src={setImageFigure(color)} alt="knight"/>
        </button>
    );
}

export default Knight;