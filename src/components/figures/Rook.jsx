import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { rookMoveHints } from '../../figuresLogic/rookMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_rdt60.png';
    }else if(color === 'white'){
        return './img/Chess_rlt60.png';
    }
}

function Rook({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    rookMoveHints(position, boardArray, setHints, appearHints, figureObject);
                }}
            disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="rook"/>
        </button>
     );
}

export default Rook;