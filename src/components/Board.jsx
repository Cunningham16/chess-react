import React, { useEffect } from 'react';
import { BoardContext } from '../context';
import { useContext } from 'react';
import '../styles/board.css';
import BoardSection from '../UI/boardSection/BoardSection';

function Board() {
    const {boardArray} = useContext(BoardContext);

    return ( 
        <section className="board">
            {boardArray.map(elem => 
                <BoardSection objectBoard = {elem}/>
            )}
        </section>
     );
}

export default Board;