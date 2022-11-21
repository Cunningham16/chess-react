import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { BoardContext } from '../context';
import Timer from '../UI/timer/Timer';

function PlayerInfo({ color }) {
    const {fallenFiguresLight, fallenFiguresDark} = useContext(BoardContext);

    function setColor(color){
        if(color === 'dark'){
            return 'Black';
        }else if(color === 'light'){
            return 'White';
        }
    }

    function setImgLight(id){
        if(id === 'pawn'){
            return './img/Chess_plt60.png';
        }else if(id === 'queen'){
            return './img/Chess_qlt60.png';
        }else if(id === 'bishop'){
            return './img/Chess_blt60.png';
        }else if(id === 'knight'){
            return './img/Chess_nlt60.png';
        }else if(id === 'rook'){
            return './img/Chess_rlt60.png';
        }
    }

    function setImgDark(id){
        if(id === 'pawn'){
            return './img/Chess_pdt60.png';
        }else if(id === 'queen'){
            return './img/Chess_qdt60.png';
        }else if(id === 'bishop'){
            return './img/Chess_bdt60.png';
        }else if(id === 'knight'){
            return './img/Chess_ndt60.png';
        }else if(id === 'rook'){
            return './img/Chess_rdt60.png';
        }
    }

    function setFigures(objectFigure){
        if (color !== objectFigure.color && color === 'dark') {
            return setImgLight(objectFigure.id)
        }else if (color !== objectFigure.color && color === 'light'){
            return setImgDark(objectFigure.id)
        }
    }

    return ( 
        <div className='player-info'>
            <div className='player-info__left-side'>
                <img src="./img/user-image.svg" alt="userImg" />
                <div className="info">
                    <p className="name">{setColor(color)}</p>
                    <div className="fallen-figures">
                        {color === 'dark' ?
                        fallenFiguresLight.map(elem =>
                            <img src={setFigures(elem)} alt="" /> 
                        )
                        : fallenFiguresDark.map(elem =>
                            <img src={setFigures(elem)} alt="" />
                        )}
                    </div>
                </div>
            </div>
            <Timer color = {color}/>
        </div>
    );
}

export default PlayerInfo;