import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { setHintsToMove } from '../../figuresLogic/setHintsToMove';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_bdt60.png';
    }else if(color === 'white'){
        return './img/Chess_blt60.png';
    }
}

function Bishop({ position, color }) {
    const {boardArray, setHints, appearHints, turn, boardEngine} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    setHintsToMove(position, boardArray, setHints, appearHints, boardEngine);
                }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="bishop" />
        </button>
     );
}

export default Bishop;