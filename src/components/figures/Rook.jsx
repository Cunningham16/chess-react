import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { setHintsToMove } from '../../figuresLogic/setHintsToMove';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_rdt60.png';
    }else if(color === 'white'){
        return './img/Chess_rlt60.png';
    }
}

function Rook({ position, color }) {
    const {boardArray, turn, boardEngine, setBoardArray} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    setHintsToMove(position, boardArray, boardEngine, setBoardArray);
                }}
            disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="rook"/>
        </button>
     );
}

export default Rook;