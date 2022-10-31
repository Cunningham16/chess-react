import React, { useContext, useEffect } from 'react';
import { BoardContext } from '../../context';
import Dot from '../dot/Dot';
import Bishop from '../figures/Bishop';
import King from '../figures/King';
import Knight from '../figures/Knight';
import Pawn from '../figures/Pawn';
import Queen from '../figures/Queen';
import Rook from '../figures/Rook';
import classes from './boardSection.module.css';

function BoardSection(props) { 
    const {appearHints} = useContext(BoardContext);

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
                        <Pawn position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
                    );
                case 'bishop':
                    return(
                        <Bishop position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
                    );
                case 'knight':
                    return(
                        <Knight position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
                    );
                case 'rook':
                    return(
                        <Rook position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
                    );
                case 'queen':
                    return(
                        <Queen position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
                    );
                case 'king':
                    return(
                        <King position={props.objectBoard.position} color={props.objectBoard.whatPlaced.color}/>
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
        <div className = {colorSection()}>
            {declareHints()}
            {declare()}
        </div>
    );
}

export default BoardSection;