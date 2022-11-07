import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { bishopMoveHints } from '../../figuresLogic/bishopMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_bdt60.png';
    }else if(color === 'light'){
        return './img/Chess_blt60.png';
    }
}

function Bishop(props) {
    const {boardArray, setHints, appearHints, turn, setTurn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    bishopMoveHints(props.position, boardArray, setHints, appearHints, props, setTurn);
                }}
                disabled={isTurn(props.color, turn)}>
            <img src={setImageFigure(props.color)} alt="bishop" />
        </button>
     );
}

export default Bishop;