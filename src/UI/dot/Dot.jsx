import React, { useContext } from 'react';
import { BoardContext } from '../../context';
import classes from './dot.module.css';
import { changeTurn } from '../../figuresLogic/changeTurn';
import { convertToEnginePosition } from '../../components/board-init/convertToEnginePos';
import { convertToAppPosition } from '../../components/board-init/convertToAppPosition';

function Dot({ objectDot, children, isPlayWithAI }) {   
    const {boardArray, setBoardArray, setTurn, fallenFiguresLight, fallenFiguresDark, boardEngine, setIsPlayerMadeMove, setBoardEngine} = useContext(BoardContext);

    function setFallenFigure(color, newPos){
        if(color === 'black'){
            fallenFiguresDark.push(newPos.whatPlaced);
        }else if( color === 'white'){
            fallenFiguresLight.push(newPos.whatPlaced);
        }
    }

    function setChangeBoardDeleting(elem){
        let index = boardArray.indexOf(elem)
        setBoardArray(
            boardArray.map((obj, i) => {
                if(index === i){
                    obj.whatPlaced = undefined
                }
                
                return obj
            })
        )
    }

    function setChangeBoardFigureAdd(elem, figure){
        let index = boardArray.indexOf(elem)
        setBoardArray(
            boardArray.map((obj, i) => {
                if(index === i){
                    obj.whatPlaced = figure
                }
                
                return obj
            })
        )
    }

    function makeMovePlayer(movePlayer, boardArray){
        for(let move in movePlayer){
          let from = convertToAppPosition(move)
          let to = convertToAppPosition(movePlayer[move])
          for(let elem of boardArray){
            if(elem.position.x === from.x && elem.position.y === from.y){
              if(elem.whatPlaced.id === 'king'){
                if(to.x === 2 && to.y === 0){
                  for(let y of boardArray){
                    if(y.position.x === 0 && y.position.y === 0){
                      let rook = y.whatPlaced
                      setChangeBoardDeleting(y)
                      for(let x of boardArray){
                        if(x.position.x === 3 && x.position.y === 0){
                            setChangeBoardFigureAdd(x, rook)
                        }
                      }
                    }
                  }
                }else if(to.x === 6 && to.y === 0){
                  for(let y of boardArray){
                    if(y.position.x === 7 && y.position.y === 0){
                      let rook = y.whatPlaced
                      setChangeBoardDeleting(y)
                      for(let x of boardArray){
                        if(x.position.x === 5 && x.position.y === 0){
                            setChangeBoardFigureAdd(x, rook)
                        }
                      }
                    }
                  }
                }else if(to.x === 6 && to.y === 7){
                  for(let y of boardArray){
                    if(y.position.x === 7 && y.position.y === 7){
                      let rook = y.whatPlaced
                      setChangeBoardDeleting(y)
                      for(let x of boardArray){
                        if(x.position.x === 5 && x.position.y === 7){
                            setChangeBoardFigureAdd(x, rook)
                        }
                      }
                    }
                  }
                }else if(to.x === 2 && to.y === 7){
                  for(let y of boardArray){
                    if(y.position.x === 0 && y.position.y === 7){
                      let rook = y.whatPlaced
                      setChangeBoardDeleting(y)
                      for(let x of boardArray){
                        if(x.position.x === 3 && x.position.y === 7){
                            setChangeBoardFigureAdd(x, rook)
                        }
                      }
                    }
                  }
                }  
              }
              let figure = elem.whatPlaced
              setChangeBoardDeleting(elem)
              elem.whatPlaced = undefined
              for(let newPos of boardArray){
                if(newPos.position.x === to.x && newPos.position.y === to.y){
                  if(newPos.whatPlaced !== undefined){
                    setFallenFigure(newPos.whatPlaced.color, newPos)
                  }
                  setChangeBoardFigureAdd(newPos, figure)
                }
              }
            }
          }
        }
      }

    function moveFigure(objectDot){
        if(isPlayWithAI === false || isPlayWithAI === undefined){
            setBoardArray(
                boardArray.reverse().map((obj) => {
                    obj.setDot = undefined
                    return obj
                })
            )
        }else{
            setBoardArray(
                boardArray.map((obj) => {
                    obj.setDot = undefined
                    return obj
                })
            )
        }
        for(let newPos of boardArray){
            if(newPos.position === objectDot.position){
                makeMovePlayer(boardEngine.move(convertToEnginePosition(objectDot.figurePosition), convertToEnginePosition(objectDot.position)), boardArray)
                setBoardEngine(() => boardEngine)
                if(isPlayWithAI === false || isPlayWithAI === undefined){
                    changeTurn(newPos.position, setTurn, boardArray, setBoardArray)
                }else{
                    setIsPlayerMadeMove(true)
                }
            }
        }
    }        

    function setTypeHint(type){
        switch (type) {
            case 'dot':
                return classes.dot;
            case 'circle':
                return classes.circle;
            case 'toClean':
                return classes.hidden;
            case 'castling':
                return classes.dot;
            default:
                break;
        }
    }

    return ( 
        <button className={setTypeHint(objectDot.type)}
                onClick={() => {
                    moveFigure(objectDot);
                    if(isPlayWithAI === false || isPlayWithAI === undefined){
                        boardArray.reverse()
                    }
                }}>
            {children}
        </button>
     );
}

export default Dot;