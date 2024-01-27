import { useContext, useEffect } from "react";
import { BoardContext } from "shared/context";
import { HintToMove } from "widgets/HintToMove";
import styles from "./styles.module.scss";
import { ChessFigure } from "widgets/ChessFigure";
import { boardTile } from "shared/types/boardTile";
import { CHESSCOLORS } from "shared/types/chessColors";
import { useAppSelector } from "shared/hooks/reduxHooks";
import { Droppable } from "react-beautiful-dnd";

function colorSection(color: CHESSCOLORS) {
  if (color === CHESSCOLORS.BLACK) {
    return styles.black;
  } else if (color === CHESSCOLORS.WHITE) {
    return styles.white;
  }
}

export function BoardSection({
  objectBoard,
  index,
}: {
  objectBoard: boardTile;
  index: number;
}): JSX.Element {
  const { hintFromSquare } = useAppSelector((state) => state.boardSession);
  //{
  //  objectBoard.whatPlaced && (
  //    <ChessFigure
  //      index={index}
  //      position={objectBoard.position}
  //      type={objectBoard.whatPlaced.type}
  //      color={objectBoard.whatPlaced.color}
  //    />
  //  );
  //}
  //{objectBoard.isHintVisible && (
  //      <HintToMove from={hintFromSquare} to={objectBoard.position} />
  //    )}
  return <div className={`${colorSection(objectBoard.tileColor)}`}></div>;
}
