import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { setHintsToMove } from '../../figuresLogic/setHintsToMove';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_qdt60.png';
    }else if(color === 'white'){
        return './img/Chess_qlt60.png';
    }
}

function Queen({ position, color }) {
    const {boardArray, appearHints, setHints, turn, boardEngine} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    setHintsToMove(position, boardArray, setHints, appearHints, boardEngine);
               }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="queen"/>
        </button>
    );
}

export default Queen;