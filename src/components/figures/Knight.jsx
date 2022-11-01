import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { knightMoveHints } from '../../figuresLogic/knightMoveHints';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_ndt60.png';
    }else if(color === 'light'){
        return './img/Chess_nlt60.png';
    }
}

function Knight(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    knightMoveHints(props.position, boardArray, setHints, appearHints, props)
                }}>
            <img src={setImageFigure(props.color)} alt="knight"/>
        </button>
     );
}

export default Knight;