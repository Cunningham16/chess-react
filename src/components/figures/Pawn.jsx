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
    const {boardArray, turn, boardEngine, setBoardArray} = useContext(BoardContext);

    function promotePawn(){
        if(position.y === 0 || position.y === 7){
            for(let elem of boardArray){
                if(position === elem.position){
                    let index = boardArray.indexOf(elem)
                    setBoardArray(
                        boardArray.map((obj, i) => {
                            if(index === i){
                                obj.whatPlaced = {color: color, id: 'queen'}
                            }

                            return obj
                        })
                    )
                }
            }
        }
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {
                    setHintsToMove(position, boardArray, boardEngine, setBoardArray);
               }}
               disabled={isTurn(color, turn)}>
            {promotePawn()}
            <img src={setImageFigure(color)} alt="img" />
        </button>
    );
}

export default Pawn;