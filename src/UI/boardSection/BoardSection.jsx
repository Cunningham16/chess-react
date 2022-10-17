import React from 'react';
import classes from './boardSection.module.css';

function BoardSection(props) {
    function colorSection(){
        if(props.objectBoard.color === "dark"){
            return classes.dark;
        }else if(props.objectBoard.color === "light"){
            return classes.light;
        }
    }

    return ( 
        <div className = {colorSection()}>
            {props.children}
        </div>
    );
}

export default BoardSection;