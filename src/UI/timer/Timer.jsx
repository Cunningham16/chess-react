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

function Timer({ color }) {
    const {turn, setIsEndCase, isRetry} = useContext(BoardContext);
    const [time, setTime] = useState(600);
    const [isStart, setIsStart] = useState(true)

    useEffect(function () {
        if(isStart){
            setTimeout(() => {
                if (turn === color) {
                    setTime(time - 1);
                }
        
                if(time === 1){
                    setIsEndCase({
                        status: true,
                        type: 'timeOut',
                        color: color,
                    })
                    setIsStart(false);
                }
            }, 1000);
        }
    })

    useEffect(() => {
        if(isRetry === true){
            setTime(600);
            setIsStart(true);
        }
    }, [isRetry])

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