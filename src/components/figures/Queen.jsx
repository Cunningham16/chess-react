import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { queenMoveHints } from '../../figuresLogic/queenMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_qdt60.png';
    }else if(color === 'light'){
        return './img/Chess_qlt60.png';
    }
}

function Queen({ position, color, figureObject }) {
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
                    queenMoveHints(position, boardArray, setHints, appearHints, color, figureObject);
                }}
                disabled={setBlocked()}>
            <img src={setImageFigure(color)} alt="queen"/>
        </button>
    );
}

export default Queen;