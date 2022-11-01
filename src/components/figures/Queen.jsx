import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { queenMoveHints } from '../../figuresLogic/queenMoveHints';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_qdt60.png';
    }else if(color === 'light'){
        return './img/Chess_qlt60.png';
    }
}

function Queen(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() =>{queenMoveHints(props.position, boardArray, setHints, appearHints, props)}}>
            <img src={setImageFigure(props.color)} alt="queen"/>
        </button>
    );
}

export default Queen;