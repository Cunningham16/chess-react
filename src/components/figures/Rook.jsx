import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { rookMoveHints } from '../../figuresLogic/rookMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_rdt60.png';
    }else if(color === 'light'){
        return './img/Chess_rlt60.png';
    }
}

function Rook({ position, color, figureObject }) {
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
                    rookMoveHints(position, boardArray, setHints, appearHints, figureObject);
                }}
            disabled={setBlocked()}>
            <img src={setImageFigure(color)} alt="rook"/>
        </button>
     );
}

export default Rook;