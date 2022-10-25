import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BoardContext } from '../../context';
import Dot from '../dot/Dot';
import Pawn from '../figures/Pawn';
import classes from './boardSection.module.css';

function BoardSection(props) { 
    const {boardArray, appearHints} = useContext(BoardContext);

    function colorSection(){
        if(props.objectBoard.color === "dark"){
            return classes.dark;
        }else if(props.objectBoard.color === "light"){
            return classes.light;
        }
    }

    function declare(){
        if(props.objectBoard.whatPlaced !== undefined){
            let idFigure = props.objectBoard.whatPlaced.id;
            switch (idFigure) {
                case 'pawn':
                    return(
                        <Pawn position={props.objectBoard.id} color={props.objectBoard.whatPlaced.color}/>
                    );            
                default:
                    break;
            }
        }
    }

    function declareHints(){
        if(props.objectBoard.setDot !== undefined){
            return (
                <Dot objectDot = {props.objectBoard.setDot}/>
            );
        }
    }

    useEffect(() => {
        declareHints();
        declare();
    }, [appearHints])

    return ( 
        <div className = {colorSection()} id = {props.objectBoard.id}>
            {declareHints()}
            {declare()}
        </div>
    );
}

export default BoardSection;