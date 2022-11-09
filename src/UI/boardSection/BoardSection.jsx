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

function colorSection(color, object){
    if(color === "dark"){
        return classes.dark;
    }else if(color === "light"){
        return classes.light;
    }
}

function BoardSection(props) { 
    const {appearHints} = useContext(BoardContext);

    function declare(object){
        if(object.whatPlaced !== undefined){
            let idFigure = object.whatPlaced.id;
            switch (idFigure) {
                case 'pawn':
                    return(
                        <Pawn position={object.position} color={object.whatPlaced.color}/>
                    );
                case 'bishop':
                    return(
                        <Bishop position={object.position} color={object.whatPlaced.color}/>
                    );
                case 'knight':
                    return(
                        <Knight position={object.position} color={object.whatPlaced.color}/>
                    );
                case 'rook':
                    return(
                        <Rook position={object.position} color={object.whatPlaced.color}/>
                    );
                case 'queen':
                    return(
                        <Queen position={object.position} color={object.whatPlaced.color}/>
                    );
                case 'king':
                    return(
                        <King position={object.position} color={object.whatPlaced.color}/>
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
        declareHints(props.objectBoard);
        declare(props.objectBoard);
    }, [appearHints])

    return ( 
        <div className = {colorSection(props.objectBoard.color)}>
            {declareHints(props.objectBoard)}
            {declare(props.objectBoard)}
        </div>
    );
}

export default BoardSection;