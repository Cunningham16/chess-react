import React, { useContext, useEffect } from "react";
import { BoardContext } from "shared/context";
import { HintToMove } from "widgets/HintToMove";
import classes from "./styles.module.scss";
import { ChessFigure } from "widgets/ChessFigure";

function colorSection(color: "white" | "black") {
  if (color === "black") {
    return classes.dark;
  } else if (color === "white") {
    return classes.light;
  }
}

export function BoardSection({ objectBoard, isPlayWithAI }) {
  const { boardArray } = useContext(BoardContext);

  function declare(object) {
    if (object.whatPlaced !== undefined) {
      return (
        <ChessFigure
          position={object.position}
          id={object.whatPlaced.id}
          color={object.whatPlaced.color}
        />
      );
    }
  }

  function declareHints(object) {
    if (object.setDot !== undefined) {
      return (
        <HintToMove objectDot={object.setDot} isPlayWithAI={isPlayWithAI} />
      );
    }
  }

  useEffect(() => {
    declareHints(objectBoard);
    declare(objectBoard);
  }, [boardArray]);

  return (
    <div className={colorSection(objectBoard.color)}>
      {declareHints(objectBoard)}
      {declare(objectBoard)}
    </div>
  );
}
