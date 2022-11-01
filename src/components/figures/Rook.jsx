import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';
import { rookMoveHints } from '../../figuresLogic/rookMoveHints';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_rdt60.png';
    }else if(color === 'light'){
        return './img/Chess_rlt60.png';
    }
}

function Rook(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);

    return ( 
        <button className={classes.board_figure}
                onClick={() => {
                    rookMoveHints(props.position, boardArray, setHints, appearHints, props);
                }}>
            <img src={setImageFigure(props.color)} alt="rook"/>
        </button>
     );
}

export default Rook;