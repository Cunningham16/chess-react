import React, { useContext, useEffect } from 'react';
import { BoardContext } from 'shared/context';
import Dot from '../dot/Dot';
import Bishop from 'components/figures/Bishop';
import King from 'components/figures/King';
import Knight from 'components/figures/Knight';
import Pawn from 'components/figures/Pawn';
import Queen from 'components/figures/Queen';
import Rook from 'components/figures/Rook';
import classes from './boardSection.module.css';

function colorSection(color){
    if(color === "black"){
        return classes.dark;
    }else if(color === "white"){
        return classes.light;
    }
}

function BoardSection({ objectBoard, isPlayWithAI }) { 
    const {boardArray} = useContext(BoardContext);

    function declare(object){
        if(object.whatPlaced !== undefined){
            let idFigure = object.whatPlaced.id;
            switch (idFigure) {
                case 'pawn':
                    return(
                        <Pawn position={object.position} 
                              color={object.whatPlaced.color}/>
                    );
                case 'bishop':
                    return(
                        <Bishop position={object.position} 
                                color={object.whatPlaced.color}/>
                    );
                case 'knight':
                    return(
                        <Knight position={object.position} 
                                color={object.whatPlaced.color}/>
                    );
                case 'rook':
                    return(
                        <Rook position={object.position} 
                              color={object.whatPlaced.color}/>
                    );
                case 'queen':
                    return(
                        <Queen position={object.position} 
                               color={object.whatPlaced.color}/>
                    );
                case 'king':
                    return(
                        <King position={object.position} 
                              color={object.whatPlaced.color}/>
                    );            
                default:
                    break;
            }
        }
    }

    function declareHints(object){
        if(object.setDot !== undefined){
            return (
                <Dot objectDot = {object.setDot} isPlayWithAI = {isPlayWithAI}/>
            );
        }
    }

    useEffect(() => {
        declareHints(objectBoard);
        declare(objectBoard);
    }, [boardArray])

    return ( 
        <div className = {colorSection(objectBoard.color)}>
            {declareHints(objectBoard)}
            {declare(objectBoard)}
        </div>
    );
}

export default BoardSection;