import React, { useContext } from "react";
import { BoardContext } from "shared/context";
import styles from "./styles.module.scss";
import { changeTurn } from "shared/figuresLogic/changeTurn";
import { convertToEnginePosition } from "shared/utils/convertToEnginePos";
import { convertToAppPosition } from "shared/utils/convertToAppPosition";
import { useAppDispatch } from "shared/hooks/reduxHooks";
import { makeMove } from "widgets/ChessBoard/model/ChessBoardSlice";
import { Square } from "chess.js";

interface Props {
  to: Square;
  from: Square;
}

export const HintToMove = ({ from, to }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.dot}
      onClick={() => {
        dispatch(makeMove({ from, to }));
      }}
    ></button>
  );
};
