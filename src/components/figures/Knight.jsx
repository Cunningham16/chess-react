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

function Knight(props) {
    const {boardArray, appearHints, setHints, turn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    knightMoveHints(props.position, boardArray, setHints, appearHints, props)
                }}
                disabled={isTurn(props.color, turn)}>
            <img src={setImageFigure(props.color)} alt="knight"/>
        </button>
    );
}

export default Knight;