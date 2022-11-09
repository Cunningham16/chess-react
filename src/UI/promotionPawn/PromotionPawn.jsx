import React from 'react';
import { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './PromotionPawn.module.css';

function setImageFigure(color){
    if(color === 'dark'){
        const arr = [
            './img/Chess_qdt60.png',
            './img/Chess_rdt60.png',
            './img/Chess_bdt60.png',
            './img/Chess_ndt60.png'
        ]
        return arr;
    }else if(color === 'light'){
        const arr = [
            './img/Chess_qlt60.png',
            './img/Chess_rlt60.png',
            './img/Chess_blt60.png',
            './img/Chess_nlt60.png'
        ]
        return arr;
    }
}

function getFigureId(elem, array){
    switch (array.indexOf(elem)) {
        case 0:
            return 'queen'
        case 1:
            return 'rook'
        case 2:
            return 'bishop'
        case 3:
            return 'knight'
        default:
            break;
    }
}

function PromotionPawn(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);
    const arrayImages = setImageFigure(props.color);

    function setNewFigure(position, boardArray, figure, appearHints, setHints){
        for(let elem of boardArray){
            if(elem.position === position){
                elem.whatPlaced = {color: props.color, id: figure}
                setHints(!appearHints);
            }
        }
    }

    return ( 
        <section className={classes.dropdown}>
            {arrayImages.map(elem => 
                <button onClick={() =>{
                        setNewFigure(props.position, boardArray, getFigureId(elem, arrayImages), appearHints, setHints)
                    }}>
                    <img src={elem} alt=''/>
                </button>
            )}
        </section>
    );
}

export default PromotionPawn;