import React, { useContext } from 'react';
import { BoardContext } from 'shared/context';
import classes from './figures.module.css';
import { setHintsToMove } from 'shared/figuresLogic/setHintsToMove';
import { isTurn } from 'shared/figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_qdt60.png';
    }else if(color === 'white'){
        return './img/Chess_qlt60.png';
    }
}

function Queen({ position, color }) {
    const {boardArray, turn, boardEngine, setBoardArray} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    setHintsToMove(position, boardArray, boardEngine, setBoardArray);
               }}
                disabled={isTurn(color, turn)}>
            <img src={setImageFigure(color)} alt="queen"/>
        </button>
    );
}

export default Queen;