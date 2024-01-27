import { ReactElement } from "react";
import classes from "./styles.module.scss";
import { setImageFigure } from "../lib/setImageFigure";
import { CHESSCOLORS } from "shared/types/chessColors";
import { useAppDispatch, useAppSelector } from "shared/hooks/reduxHooks";
import { clearHints, setHints } from "widgets/ChessBoard/model/ChessBoardSlice";
import { Piece, Square } from "chess.js";
import { boardTile } from "shared/types/boardTile";

export interface FigureProps {
  object: boardTile;
}

export const Figure = ({ object }): ReactElement<FigureProps> => {
  const dispatch = useAppDispatch();
  const { turn } = useAppSelector((state) => state.boardSession);

  const onDragStartHandler = (e) => {
    console.log("drag");
  };

  const onDragLeaveHandler = (e) => {};

  const onDragEndHandler = (e) => {
    console.log("ffdf");
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    console.log("drop");
  };

  const disableHandler = () => {
    if (object.whatPlaced === null) {
      return false;
    }

    return object.whatPlaced.color === turn;
  };

  return (
    <button
      draggable
      onDragStart={(e) => onDragStartHandler(e)}
      onDragLeave={(e) => onDragLeaveHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDrop={(e) => onDropHandler(e)}
      className={classes.board_figure}
      onClick={() => {
        dispatch(clearHints());
        dispatch(setHints(object.position));
      }}
      disabled={disableHandler()}
    >
      {object.whatPlaced && (
        <img
          src={setImageFigure(object.whatPlaced.color, object.whatPlaced.type)}
          alt=''
          draggable={false}
        />
      )}
    </button>
  );
};
