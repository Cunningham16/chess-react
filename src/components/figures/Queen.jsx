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

function Queen(props) {
    const {boardArray, appearHints, setHints, turn, setTurn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() =>{queenMoveHints(props.position, boardArray, setHints, appearHints, props, setTurn)}}
                disabled={isTurn(props.color, turn)}>
            <img src={setImageFigure(props.color)} alt="queen"/>
        </button>
    );
}

export default Queen;