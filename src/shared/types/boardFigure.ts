import { CHESSCOLORS } from "./chessColors";
import { FIGURES } from "./figures";

export interface boardFigure {
  type: FIGURES;
  color: CHESSCOLORS;
}