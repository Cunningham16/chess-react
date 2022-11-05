import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { kingMoveHints } from '../../figuresLogic/kingMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_kdt60.png';
    }else if(color === 'light'){
        return './img/Chess_klt60.png';
    }
}

function King(props) {
    const {boardArray, appearHints, setHints, turn, setTurn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    kingMoveHints(props.position, boardArray, setHints, appearHints, props, setTurn)
                }}
                disabled={isTurn(props.color, turn)}>
            <img src={setImageFigure(props.color)} alt=""/>
        </button>
     );
}

export default King;