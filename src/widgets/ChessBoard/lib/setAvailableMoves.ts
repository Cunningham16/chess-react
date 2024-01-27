import { Square } from "chess.js";
import { boardTile } from "shared/types/boardTile";

export const setAvaliableMoves: (
  board: boardTile[],
  moves: string[]
) => boardTile[] = (board: boardTile[], moves: string[]) => {
  return board.map((elem) => {
    if (moves.includes(elem.position)) {
      elem.isHintVisible = true;
    }
    return elem;
  });
};
