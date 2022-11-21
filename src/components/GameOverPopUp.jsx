import React from 'react';
import { useContext } from 'react';
import { BoardContext } from '../context';
import '../styles/gameOverPopUp.css';

function GameOverPopUp({ message, whoWins }) {
    const {setIsEndCase} = useContext(BoardContext);

    function closePopup(e){
        e.preventDefault();
        setIsEndCase({
            status: false,
            type: undefined,
            color: undefined,
        })
    }

    return ( 
        <section className='popup'>
            <a href="#" onClick={e => {closePopup(e)}}></a>
            <div className="popup__content">
                <div className="popup__header">
                    <h3>{`Game Over! ${whoWins} win this battle!`}</h3>
                    <h4>{message}</h4>
                </div>
                <div className="popup__winner-log">
                    <div className="winner-log">
                        <img src="./img/user-image.svg" alt="" />
                        <h5>White</h5>
                    </div>
                    <p>{'1:0'}</p>
                    <div className="winner-log">
                        <img src="./img/user-image.svg" alt="" />
                        <h5>Black</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameOverPopUp;