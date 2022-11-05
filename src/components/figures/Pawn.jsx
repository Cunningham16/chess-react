import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';
import { pawnMoveHints } from '../../figuresLogic/pawnMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_pdt60.png';
    }else if(color === 'light'){
        return './img/Chess_plt60.png';
    }
}

function Pawn(props) {
    const {boardArray, appearHints, setHints, turn, setTurn} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
               onClick={() => {pawnMoveHints(props.position, boardArray, setHints, appearHints, props, setTurn)}}
               disabled={isTurn(props.color, turn)}>
            <img src={setImageFigure(props.color)} alt="img" />
        </button>
    );
}

export default Pawn;