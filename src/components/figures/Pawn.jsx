import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';
import { pawnMoveHints } from '../../figuresLogic/pawnMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';
import PromotionPawn from '../../UI/promotionPawn/PromotionPawn';

function setImageFigure(color){
    if(color === 'black'){
        return './img/Chess_pdt60.png';
    }else if(color === 'white'){
        return './img/Chess_plt60.png';
    }
}

function Pawn({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn} = useContext(BoardContext);

    function promotePawn(){
        if(position.y === 7 && color === 'black'){
            return <PromotionPawn color='black' position = {position}/>
        }else if(position.y === 0 && color === 'white'){
            return <PromotionPawn color='white' position = {position}/>
        }
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {
                    pawnMoveHints(position, boardArray, setHints, appearHints, figureObject);
               }}
               disabled={isTurn(color, turn)}>
            {promotePawn()}
            <img src={setImageFigure(color)} alt="img" />
        </button>
    );
}

export default Pawn;