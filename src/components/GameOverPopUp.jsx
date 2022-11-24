import React from 'react';
import { useContext } from 'react';
import { BoardContext } from '../context';
import '../styles/gameOverPopUp.css';
import { Link } from 'react-router-dom';

function GameOverPopUp({ message, whoWins }) {
    const {setIsRetry} = useContext(BoardContext);

    function clearBoard(){
        setIsRetry(true)
    }

    function whoWinsLog(whoWins){
        if(whoWins === 'light'){
            return 'Black'
        }else if(whoWins === 'dark'){
            return 'White'
        }
    }

    function setCount(whoWins){
        if(whoWins === 'dark'){
            return '1:0'
        }else if(whoWins === 'light'){
            return '0:1'
        }
    }

    return ( 
        <section className='popup'>
            <div className="popup__content">
                <div className="popup__header">
                    <h3>Game Over! {whoWinsLog(whoWins)} win this battle!</h3>
                    <h4>{message}</h4>
                </div>
                <div className="popup__winner-log">
                    <div className="winner-log">
                        <img src="./img/user-image.svg" alt="" />
                        <h5>White</h5>
                    </div>
                    <p>{setCount(whoWins)}</p>
                    <div className="winner-log">
                        <img src="./img/user-image.svg" alt="" />
                        <h5>Black</h5>
                    </div>
                </div>
                <div className="popup__buttons">
                    <button className="button__primary"
                            onClick={() => {clearBoard()}}>Retry</button>
                    <Link to='/'>
                        <button className="button__secondary">Return to Main Menu</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default GameOverPopUp;