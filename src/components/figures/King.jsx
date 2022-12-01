import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { setHintsToMove } from '../../figuresLogic/setHintsToMove';
import { isTurn } from '../../figuresLogic/setTurn';
import { castlingHints } from '../../figuresLogic/castlingHints';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_kdt60.png';
    }else if(color === 'white'){
        return './img/Chess_klt60.png';
    }
}

function King({ position, color }) {
    const {boardArray, appearHints, setHints, turn, boardEngine} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    setHintsToMove(position, boardArray, setHints, appearHints, boardEngine);
                    castlingHints(boardArray, setHints, appearHints, turn)
                }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt=""/>
        </button>
     );
}

export default King;