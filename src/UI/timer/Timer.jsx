import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BoardContext } from '../../context';
import classes from './Timer.module.css';

function convertTime(time){
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60);
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    return `${minutes}:${seconds}`
}

function Timer(props) {
    const {color} = props;
    const {turn} = useContext(BoardContext);
    const [time, setTime] = useState(600);

    useEffect(function () {
        setTimeout(() => {
            if (turn === color) {
                setTime(time - 1);
            }
        }, 1000);
    })

    function setColorTimer(color){
        if(color === 'dark'){
            if(turn === 'dark'){
                return `${classes.dark} ${classes.dark_active}`;
            }else if(turn === 'light'){
                return classes.dark;
            }
        }else if(color === 'light'){
            if(turn === 'light'){
                return `${classes.light} ${classes.light_active}`;
            }else if (turn === 'dark'){
                return classes.light;
            }
        }
    }

    useEffect(() => {
        setColorTimer(color);
    }, [turn])

    return ( 
        <div className={setColorTimer(color)}>
            {convertTime(time)}
        </div>
    );
}

export default Timer;