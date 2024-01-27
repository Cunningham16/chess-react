import { boardTile } from "shared/types/boardTile";

export const clearAvaliableMoves: (board: boardTile[]) => boardTile[] = (
  board: boardTile[]
) => {
  return board.map((elem) => {
    elem.isHintVisible = false;
    return elem;
  });
};
