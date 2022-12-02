import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';
import { setHintsToMove } from '../../figuresLogic/setHintsToMove';
import { isTurn } from '../../figuresLogic/setTurn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_pdt60.png';
    }else if(color === 'white'){
        return './img/Chess_plt60.png';
    }
}

function Pawn({ position, color }) {
    const {boardArray, appearHints, setHints, turn, boardEngine} = useContext(BoardContext);

    function promotePawn(){
        if(position.y === 0 || position.y === 7){
            for(let elem of boardArray){
                if(position === elem.position){
                    elem.whatPlaced = {color: color, id: 'queen'}
                    setHints(!appearHints)
                }
            }
        }
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {
                    setHintsToMove(position, boardArray, setHints, appearHints, boardEngine);
               }}
               disabled={isTurn(color, turn)}>
            {promotePawn()}
            <img src={setImageFigure(color)} alt="img" />
        </button>
    );
}

export default Pawn;