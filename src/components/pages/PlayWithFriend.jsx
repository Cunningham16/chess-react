import React, { useState, useEffect } from "react";
import Board from "../Board";
import PlayerInfo from "../PlayerInfo";
import { BoardContext } from '../../context';
import GameOverPopUp from '../GameOverPopUp';
import { createBoard } from '../board-init/createArrayBoard';

function PlayWithFriend(props) {
    const [turn, setTurn] = useState('light');
    const [boardArray, setBoardArray] = useState(createBoard())
    const [appearHints, setHints] = useState();
    const [fallenFiguresLight, setFallenFiguresLight] = useState([]);
    const [fallenFiguresDark, setFallenFiguresDark] = useState([]);
    const [isEndCase, setIsEndCase] = useState({
      type: undefined,
      status: false,
      color: undefined
    })
    const [isRetry, setIsRetry] = useState(false);

    const contextObject = {
      fallenFiguresLight, 
      setFallenFiguresLight,
      fallenFiguresDark, 
      setFallenFiguresDark,
      boardArray,
      setBoardArray,
      appearHints, 
      setHints,
      turn, 
      setTurn, 
      isEndCase, 
      setIsEndCase,
      isRetry, 
      setIsRetry
    }

    function setPopup(){
      if(isEndCase.status === true && isEndCase.type === 'timeOut'){
        return <GameOverPopUp message={'Time is out'} whoWins={isEndCase.color} />
      }
    }

    useEffect(() => {
      setPopup();
      for(let elem of boardArray){
        if(elem.setDot !== undefined){
            elem.setDot = undefined
        }
      }
      setHints(!appearHints) 
    }, [isEndCase])

    useEffect(() => {
      setIsEndCase({
        type: undefined,
        status: false,
        color: undefined
      })
      setBoardArray(createBoard())
      setFallenFiguresDark([])
      setFallenFiguresLight([])
      setHints()
      setIsRetry(false)

      if(turn === 'dark'){
        const boardContainer = document.querySelector('.board-game');
        boardContainer.style.flexDirection = 'column';
      }
      setTurn('light')
    }, [isRetry])

    return ( 
        <div className='board-game'>
            <BoardContext.Provider value={contextObject}>
              {setPopup()}
              <PlayerInfo color = 'dark'/>
              <Board />
              <PlayerInfo color = 'light'/>
            </BoardContext.Provider>
        </div>
    );
}

export default PlayWithFriend;