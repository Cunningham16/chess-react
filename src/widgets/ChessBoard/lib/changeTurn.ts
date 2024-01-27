import { CHESSCOLORS } from "shared/types/chessColors";

export const changeTurn = (currentTurn: CHESSCOLORS) => {
  if (currentTurn === CHESSCOLORS.WHITE) {
    return CHESSCOLORS.BLACK;
  } else if (currentTurn === CHESSCOLORS.BLACK) {
    return CHESSCOLORS.WHITE;
  }
};
