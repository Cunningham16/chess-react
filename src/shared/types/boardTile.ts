import { Square } from "chess.js";
import { boardFigure } from "./boardFigure";
import { CHESSCOLORS } from "./chessColors";

export interface boardTile {
  position: Square;
  whatPlaced: boardFigure | null;
  tileColor: CHESSCOLORS;
  isHintVisible: boolean;
}
