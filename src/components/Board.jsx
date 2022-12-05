import React from 'react';
import { BoardContext } from '../context';
import { useContext } from 'react';
import '../styles/board.css';
import BoardSection from '../UI/boardSection/BoardSection';

function Board({ isPlayWithAI }) {
    const {boardArray} = useContext(BoardContext);

    return ( 
        <section className="board">
            {boardArray.map(elem => 
                <BoardSection objectBoard = {elem} isPlayWithAI = {isPlayWithAI}/>
            )}
        </section>
     );
}

export default Board;