import React, { useState, useEffect } from "react";
import { Game } from "js-chess-engine";
import { ChessBoard } from "widgets/ChessBoard";
import { PlayerInfo } from "widgets/PlayerInfo";
import { BoardContext } from "shared/context";
import { GameOverPopup } from "widgets/GameOverPopup";
import { createBoard } from "widgets/ChessBoard/lib/createBoard";
import { convertToAppPosition } from "shared/utils/convertToAppPosition";

function PlayWithAI() {
  const [boardEngine, setBoardEngine] = useState(new Game());
  const [turn, setTurn] = useState("white");
  const [boardArray, setBoardArray] = useState(createBoard());
  const [fallenFiguresLight, setFallenFiguresLight] = useState([]);
  const [fallenFiguresDark, setFallenFiguresDark] = useState([]);
  const [isEndCase, setIsEndCase] = useState({
    type: undefined,
    status: false,
    color: undefined,
  });
  const [isPromote, setIsPromote] = useState(false);
  const [isRetry, setIsRetry] = useState(false);
  const [isPlayerMadeMove, setIsPlayerMadeMove] = useState(false);

  const contextObject = {
    fallenFiguresLight,
    setFallenFiguresLight,
    fallenFiguresDark,
    setFallenFiguresDark,
    boardArray,
    setBoardArray,
    turn,
    setTurn,
    isEndCase,
    setIsEndCase,
    isRetry,
    setIsRetry,
    boardEngine,
    setBoardEngine,
    isPromote,
    setIsPromote,
    isPlayerMadeMove,
    setIsPlayerMadeMove,
  };

  function setPopup() {
    if (isEndCase.status === true && isEndCase.type === "checkmate") {
      return <GameOverPopup message={"Checkmate"} whoLose={isEndCase.color} />;
    } else if (isEndCase.status === true && isEndCase.type === "pat") {
      return <GameOverPopup message={"Pat"} whoLose={isEndCase.color} />;
    }
  }

  function makeMoveAI(moveAI) {
    for (let move in moveAI) {
      let from = convertToAppPosition(move);
      let to = convertToAppPosition(moveAI[move]);
      for (let elem of boardArray) {
        if (elem.position.x === from.x && elem.position.y === from.y) {
          if (elem.whatPlaced.id === "king") {
            if (from.x === 4 && from.y === 0) {
              if (to.x === 2 && to.y === 0) {
                for (let y of boardArray) {
                  if (y.position.x === 0 && y.position.y === 0) {
                    let rook = y.whatPlaced;
                    setChangeBoardDeleting(y);
                    for (let x of boardArray) {
                      if (x.position.x === 3 && x.position.y === 0) {
                        setChangeBoardFigureAdd(x, rook);
                      }
                    }
                  }
                }
              } else if (to.x === 6 && to.y === 0) {
                for (let y of boardArray) {
                  if (y.position.x === 7 && y.position.y === 0) {
                    let rook = y.whatPlaced;
                    setChangeBoardDeleting(y);
                    for (let x of boardArray) {
                      if (x.position.x === 5 && x.position.y === 0) {
                        setChangeBoardFigureAdd(x, rook);
                      }
                    }
                  }
                }
              }
            } else if (from.x === 4 && from.y === 7) {
              if (to.x === 6 && to.y === 7) {
                for (let y of boardArray) {
                  if (y.position.x === 7 && y.position.y === 7) {
                    let rook = y.whatPlaced;
                    setChangeBoardDeleting(y);
                    for (let x of boardArray) {
                      if (x.position.x === 5 && x.position.y === 7) {
                        setChangeBoardFigureAdd(x, rook);
                      }
                    }
                  }
                }
              } else if (to.x === 2 && to.y === 7) {
                for (let y of boardArray) {
                  if (y.position.x === 0 && y.position.y === 7) {
                    let rook = y.whatPlaced;
                    setChangeBoardDeleting(y);
                    for (let x of boardArray) {
                      if (x.position.x === 3 && x.position.y === 7) {
                        setChangeBoardFigureAdd(x, rook);
                      }
                    }
                  }
                }
              }
            }
          }
          let figure = elem.whatPlaced;
          setChangeBoardDeleting(elem);
          elem.whatPlaced = undefined;
          for (let newPos of boardArray) {
            if (newPos.position.x === to.x && newPos.position.y === to.y) {
              if (newPos.whatPlaced !== undefined) {
                setFallenFigure(newPos.whatPlaced.color, newPos);
              }
              setChangeBoardFigureAdd(newPos, figure);
              setIsPlayerMadeMove(false);
            }
          }
        }
      }
    }
  }

  function setChangeBoardDeleting(elem) {
    let index = boardArray.indexOf(elem);
    setBoardArray(
      boardArray.map((obj, i) => {
        if (index === i) {
          obj.whatPlaced = undefined;
        }

        return obj;
      })
    );
  }

  function setChangeBoardFigureAdd(elem, figure) {
    let index = boardArray.indexOf(elem);
    setBoardArray(
      boardArray.map((obj, i) => {
        if (index === i) {
          obj.whatPlaced = figure;
        }

        return obj;
      })
    );
  }

  function setFallenFigure(color, newPos) {
    if (color === "black") {
      fallenFiguresDark.push(newPos.whatPlaced);
    } else if (color === "white") {
      fallenFiguresLight.push(newPos.whatPlaced);
    }
  }

  useEffect(() => {
    let status = boardEngine.exportJson();
    if (status.checkMate === true) {
      setIsEndCase({
        status: true,
        type: "checkmate",
        color: turn,
      });
    } else if (status.isFinished === true && status.checkMate === false) {
      setIsEndCase({
        status: true,
        type: "pat",
        color: turn,
      });
    }

    if (isPlayerMadeMove === true && isEndCase.status !== true) {
      setTimeout(() => {
        if (boardEngine.board.configuration.checkMate === true) {
          setIsEndCase({
            status: true,
            type: "checkmate",
            color: turn,
          });
        }
        makeMoveAI(boardEngine.aiMove(0));
        setBoardEngine(boardEngine);
      }, 700);

      if (boardEngine.board.configuration.checkMate === true) {
        setIsEndCase({
          status: true,
          type: "checkmate",
          color: turn,
        });
      }
    }
  }, [isPlayerMadeMove]);

  useEffect(() => {
    setPopup();
    setBoardArray(
      boardArray.map((obj) => {
        obj.setDot = undefined;
        return obj;
      })
    );
  }, [isEndCase]);

  useEffect(() => {
    setIsEndCase({
      type: undefined,
      status: false,
      color: undefined,
    });
    setBoardArray(createBoard());
    setFallenFiguresDark([]);
    setFallenFiguresLight([]);
    setIsRetry(false);
    setIsPlayerMadeMove(false);

    if (turn === "black") {
      const boardContainer: HTMLDivElement =
        document.querySelector(".board-game");
      boardContainer.style.flexDirection = "column";
    }

    setBoardEngine(new Game());

    setTurn("white");
  }, [isRetry]);

  return (
    <section className="game-session">
      <div className="board-game">
        <BoardContext.Provider value={contextObject}>
          {setPopup()}
          <PlayerInfo color="black" isPlayWithAI={true} />
          <ChessBoard isPlayWithAI={true} />
          <PlayerInfo color="white" isPlayWithAI={true} />
        </BoardContext.Provider>
      </div>
      <div className="change-log">Hello world</div>
    </section>
  );
}

export default PlayWithAI;
