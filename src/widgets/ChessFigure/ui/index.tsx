import { ReactElement, useContext } from "react";
import { BoardContext } from "shared/context";
import classes from "./styles.module.scss";
import { setHintsToMove } from "shared/figuresLogic/setHintsToMove";
import { isTurn } from "shared/figuresLogic/setTurn";
import { setImageFigure } from "../lib/setImageFigure";

export interface FigureProps {
  position: { x: number; y: number };
  color: "white" | "black";
  id: "pawn" | "knight" | "queen" | "king" | "rook" | "bishop";
}

export const Figure = ({ position, color, id }): ReactElement<FigureProps> => {
  const { boardArray, turn, boardEngine, setBoardArray } =
    useContext(BoardContext);

  return (
    <button
      className={classes.board_figure}
      onClick={() => {
        setHintsToMove(position, boardArray, boardEngine, setBoardArray);
      }}
      disabled={isTurn(color, turn)}
    >
      <img src={setImageFigure(color, id)} alt="" />
    </button>
  );
};
