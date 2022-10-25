import React from 'react';
import { useContext } from 'react';
import { BoardContext } from "../../context";
import classes from './figures.module.css';

function Pawn(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);
    function setImageFigure(color){
        if(color === 'dark'){
            return './img/Chess_pdt60.png';
        }else if(color === 'light'){
            return './img/Chess_plt60.png';
        }
    }

    let array1 = [1, 9, 17, 25, 33, 41, 49, 57];
    let array2 = [8, 16, 24, 32, 40, 48, 56, 64];

    function hintsToMove(position){
        for(let elem of boardArray){
            elem.setDot = undefined;
        }
        setHints(!appearHints)
        for(let elem of boardArray){
            let pawnMoveBlack = elem.whatPlaced === undefined && props.color === 'dark';
            let pawnMoveWhite = elem.whatPlaced === undefined && props.color === 'light';
            let firstMoveBlack = (elem.id === position+8 || elem.id === position+16) && pawnMoveBlack;
            let firstMoveWhite = (elem.id === position-8 || elem.id === position-16) && pawnMoveWhite;
            let pawnAttackBlack = elem.whatPlaced !== undefined && props.color === 'dark';
            let pawnAttackWhite = elem.whatPlaced !== undefined && props.color === 'light';
            if(firstMoveBlack && position <= 16){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'dot'};
            }else if(firstMoveWhite && position >= 48){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'dot'};
            }else if(pawnMoveWhite && position < 48 && elem.id === position-8){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'dot'};
            }else if(pawnMoveBlack && position > 16 && elem.id === position+8){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'dot'};
            }else if(pawnAttackWhite && (elem.id === position-7 || elem.id === position-9) && (!array1.includes(position) && !array2.includes(position))){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(pawnAttackBlack && (elem.id === position+7 || elem.id === position+9) && (!array1.includes(position) && !array2.includes(position))){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(pawnAttackWhite && elem.id === position-7 && array1.includes(position)){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(pawnAttackBlack && elem.id === position+7 && array1.includes(position)){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(pawnAttackWhite && elem.id === position-9 && array2.includes(position)){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }else if(pawnAttackBlack && elem.id === position+9 && array2.includes(position)){
                elem.setDot = {position: elem.id, id: 'dot', figurePosition: position, type: 'circle'};
            }
        }
        setHints(!appearHints)
    }

    return ( 
        <button className={classes.board_figure}
               onClick={() => {hintsToMove(props.position)}}
        >
            <img src={setImageFigure(props.color)} alt="img" />
        </button>
    );
}

export default Pawn;