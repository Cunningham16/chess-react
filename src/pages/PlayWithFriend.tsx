import { useState, useEffect } from "react";
import { Game } from "js-chess-engine";
import { ChessBoard } from "widgets/ChessBoard";
import PlayerInfo from "components/PlayerInfo";
import { BoardContext } from "shared/context";
import { GameOverPopup } from "widgets/GameOverPopup";
import { createBoard } from "components/board-init/createArrayBoard";

function PlayWithFriend() {
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
  };

  function setPopup() {
    if (isEndCase.status === true && isEndCase.type === "timeOut") {
      return (
        <GameOverPopup message={"Time is out"} whoLose={isEndCase.color} />
      );
    } else if (isEndCase.status === true && isEndCase.type === "checkmate") {
      return <GameOverPopup message={"Checkmate"} whoLose={isEndCase.color} />;
    }
  }

  useEffect(() => {
    if (boardEngine.board.configuration.checkMate === true) {
      setIsEndCase({
        status: true,
        type: "checkmate",
        color: turn,
      });
    }
  }, [boardEngine.board.configuration.checkMate]);

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

    if (turn === "black") {
      const boardContainer: HTMLDivElement =
        document.querySelector(".board-game");
      boardContainer.style.flexDirection = "column";
    }

    setBoardEngine(new Game());

    setTurn("white");
  }, [isRetry]);

  return (
    <div className="board-game">
      <BoardContext.Provider value={contextObject}>
        {setPopup()}
        <PlayerInfo color="black" isPlayWithAI={false} />
        <ChessBoard isPlayWithAI={false} />
        <PlayerInfo color="white" isPlayWithAI={false} />
      </BoardContext.Provider>
    </div>
  );
}

export default PlayWithFriend;
