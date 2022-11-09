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

function Pawn(props) {
    const {boardArray, appearHints, setHints, turn, setTurn} = useContext(BoardContext);

    function promotePawn(){
        if(props.position.y === 7 && props.color === 'dark'){
            return <PromotionPawn color='dark' position = {props.position}/>
        }else if(props.position.y === 0 && props.color === 'light'){
            return <PromotionPawn color='light' position = {props.position}/>
        }
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {
                    pawnMoveHints(props.position, boardArray, setHints, appearHints, props, setTurn);
               }}
               disabled={isTurn(props.color, turn)}>
            {promotePawn()}
            <img src={setImageFigure(props.color)} alt="img" />
        </button>
    );
}

export default Pawn;