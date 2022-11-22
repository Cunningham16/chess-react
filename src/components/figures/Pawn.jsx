import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';
import { pawnMoveHints } from '../../figuresLogic/pawnMoveHints';
import { isTurn } from '../../figuresLogic/setTurn';
import PromotionPawn from '../../UI/promotionPawn/PromotionPawn';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_pdt60.png';
    }else if(color === 'light'){
        return './img/Chess_plt60.png';
    }
}

function Pawn({ position, color, figureObject }) {
    const {boardArray, appearHints, setHints, turn, isEndCase} = useContext(BoardContext);

    function promotePawn(){
        if(position.y === 7 && color === 'dark'){
            return <PromotionPawn color='dark' position = {position}/>
        }else if(position.y === 0 && color === 'light'){
            return <PromotionPawn color='light' position = {position}/>
        }
    }

    function setBlocked(){
        if(isEndCase.status){
            return true;
        }else{
            return isTurn(color, turn)
        }
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {
                    pawnMoveHints(position, boardArray, setHints, appearHints, figureObject);
               }}
               disabled={setBlocked()}>
            {promotePawn()}
            <img src={setImageFigure(color)} alt="img" />
        </button>
    );
}

export default Pawn;