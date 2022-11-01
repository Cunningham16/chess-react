import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './figures.module.css';

function setImageFigure(color){
    if(color === 'dark'){
        return './img/Chess_qdt60.png';
    }else if(color === 'light'){
        return './img/Chess_qlt60.png';
    }
}

function Queen(props) {
    const {boardArray, appearHints, setHints} = useContext(BoardContext);

    function hintsToMove(position){
        for(let elem of boardArray){
            elem.setDot = undefined;
        }

        for(let elem of boardArray){
            const dotObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'dot'};
            const circleObject = {position: elem.position, id: 'dot', figurePosition: position, type: 'circle'};
            const clearObject = {type: 'toClean'};

            for(let i = 0; i <= 7; i++){
                const moveHoristontalVertical = ((elem.position.y === position.y-i || elem.position.y === position.y+i) && elem.position.x === position.x)
                || ((elem.position.x === position.x-i || elem.position.x === position.x+i) && elem.position.y === position.y)

                if(elem.whatPlaced === undefined && moveHoristontalVertical){
                    elem.setDot = dotObject;
                }
                
                if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color !== props.color){
                    elem.setDot = circleObject;
                }else if(elem.whatPlaced !== undefined && moveHoristontalVertical && elem.whatPlaced.color === props.color){
                    elem.setDot = clearObject;
                }

                const moveDiagonal = (elem.position.y === position.y-i || elem.position.y === position.y+i) 
                                    && (elem.position.x === position.x-i || elem.position.x === position.x+i);
                
                if(elem.whatPlaced === undefined && moveDiagonal){
                        elem.setDot = dotObject;
                }
                
                if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color !== props.color){
                        elem.setDot = circleObject;
                }else if(elem.whatPlaced !== undefined && moveDiagonal && elem.whatPlaced.color === props.color){
                        elem.setDot = clearObject;
                }
            }    
            setHints(!appearHints)
        }

        for(let elem of boardArray){
            if(elem.setDot !== undefined && elem.setDot.type === 'circle'){
                clearUnnessesaryCells(elem, position);
            }else if(elem.setDot !== undefined && elem.setDot.type === 'toClean'){
                clearUnnessesaryCells(elem, position);
            }
        }


        function clearUnnessesaryCells(elem, position){
            if(elem.position.x > position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y > elem.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y < elem.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(elem.position.x > position.x && elem.position.y < position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && u.position.y < elem.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(elem.position.x < position.x && elem.position.y > position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && u.position.y > elem.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(position.x > elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x < elem.position.x && position.y === u.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(position.x < elem.position.x && position.y === elem.position.y){
                for(let u of boardArray){
                    if(u.position.x > elem.position.x && position.y === u.position.y){
                        u.setDot = undefined;
                    } 
                }
            }else if(position.y > elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y < elem.position.y && position.x === u.position.x){
                        u.setDot = undefined;
                    } 
                }
            }else if(position.y < elem.position.y && position.x === elem.position.x){
                for(let u of boardArray){
                    if(u.position.y > elem.position.y && position.x === u.position.x){
                        u.setDot = undefined;
                    } 
                }
            }
        }
    }

    return ( 
        <button className={classes.board_figure}
                onClick={() =>{hintsToMove(props.position)}}>
            <img src={setImageFigure(props.color)} alt="queen"/>
        </button>
    );
}

export default Queen;