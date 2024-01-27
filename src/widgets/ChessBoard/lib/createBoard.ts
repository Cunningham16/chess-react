import { boardPosition } from "shared/types/boardPosition";
import { arrayFigures } from "../config/arrayFigures";
import { boardTile } from "shared/types/boardTile";
import { SQUARES, Square, PieceSymbol, Color } from "chess.js";
import { CHESSCOLORS } from "shared/types/chessColors";
import { FIGURES } from "shared/types/figures";

// "w" | "b"
type colors = (typeof CHESSCOLORS)[keyof typeof CHESSCOLORS];
type figures = (typeof FIGURES)[keyof typeof FIGURES];

function determineSquareColor(num: number) {
  const i = num-1;
  if (
    (i >= 0 && i <= 7) ||
    (i >= 16 && i <= 23) ||
    (i >= 32 && i <= 39) ||
    (i >= 48 && i <= 55)
  ) {
    return i % 2 === 0 ? CHESSCOLORS.WHITE : CHESSCOLORS.BLACK;
  }
  if (
    (i >= 8 && i <= 15) ||
    (i >= 24 && i <= 31) ||
    (i >= 40 && i <= 47) ||
    (i >= 56 && i <= 63)
  ) {
    return i % 2 !== 0 ? CHESSCOLORS.WHITE : CHESSCOLORS.BLACK;
  }
}

export const createBoard = (
  boardGame: {
    square: Square;
    type: PieceSymbol;
    color: Color;
  }[][]
) => {
  let i: number = 1;
  let array: boardTile[] = [];
  for (let line of boardGame) {
    for (let square of line) {
      if (square === null) {
        array.push({
          position: SQUARES[i - 1],
          tileColor: determineSquareColor(i),
          whatPlaced: null,
          isHintVisible: false,
        });
      } else {
        array.push({
          position: square.square,
          tileColor: determineSquareColor(i),
          whatPlaced: {
            type: square.type as figures,
            color: square.color as colors,
          },
          isHintVisible: false,
        });
      }
      i++;
    }
  }
  return array;
};
