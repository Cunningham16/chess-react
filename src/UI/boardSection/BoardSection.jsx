import React, { useContext, useEffect } from 'react';
import { BoardContext } from '../../context';
import Dot from '../dot/Dot';
import Bishop from '../../components/figures/Bishop';
import King from '../../components/figures/King';
import Knight from '../../components/figures/Knight';
import Pawn from '../../components/figures/Pawn';
import Queen from '../../components/figures/Queen';
import Rook from '../../components/figures/Rook';
import classes from './boardSection.module.css';

function colorSection(color){
    if(color === "dark"){
        return classes.dark;
    }else if(color === "light"){
        return classes.light;
    }
}

function BoardSection({ objectBoard }) { 
    const {appearHints} = useContext(BoardContext);

    function declare(object){
        if(object.whatPlaced !== undefined){
            let idFigure = object.whatPlaced.id;
            switch (idFigure) {
                case 'pawn':
                    return(
                        <Pawn position={object.position} 
                              color={object.whatPlaced.color} 
                              figureObject = {object.whatPlaced}/>
                    );
                case 'bishop':
                    return(
                        <Bishop position={object.position} 
                                color={object.whatPlaced.color} 
                                figureObject = {object.whatPlaced}/>
                    );
                case 'knight':
                    return(
                        <Knight position={object.position} 
                                color={object.whatPlaced.color} 
                                figureObject = {object.whatPlaced}/>
                    );
                case 'rook':
                    return(
                        <Rook position={object.position} 
                              color={object.whatPlaced.color} 
                              figureObject = {object.whatPlaced}/>
                    );
                case 'queen':
                    return(
                        <Queen position={object.position} 
                               color={object.whatPlaced.color} 
                               figureObject = {object.whatPlaced}/>
                    );
                case 'king':
                    return(
                        <King position={object.position} 
                              color={object.whatPlaced.color} 
                              figureObject = {object.whatPlaced}/>
                    );            
                default:
                    break;
            }
        }
    }

    function declareHints(object){
        if(object.setDot !== undefined){
            return (
                <Dot objectDot = {object.setDot}/>
            );
        }
    }

    useEffect(() => {
        declareHints(objectBoard);
        declare(objectBoard);
    }, [appearHints])

    return ( 
        <div className = {colorSection(objectBoard.color)}>
            {declareHints(objectBoard)}
            {declare(objectBoard)}
        </div>
    );
}

export default BoardSection;