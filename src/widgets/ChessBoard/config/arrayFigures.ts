import { boardFigure } from "shared/types/boardFigure";
import { FIGURES } from "shared/types/figures";

export const arrayFigures: boardFigure[] = [
  { position: {x: "a", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "b", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "c", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "d", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "e", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "f", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "g", y: 7}, color: "black", id: FIGURES.PAWN },
  { position: {x: "h", y: 7}, color: "black", id: FIGURES.PAWN },

  { position: {x: "a", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "b", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "c", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "d", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "e", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "f", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "g", y: 2}, color: "white", id: FIGURES.PAWN },
  { position: {x: "h", y: 2}, color: "white", id: FIGURES.PAWN },

  { position: {x: "c", y: 8}, color: "black", id: FIGURES.BISHOP },
  { position: {x: "f", y: 8}, color: "black", id: FIGURES.BISHOP },

  { position: {x: "c", y: 1}, color: "white", id: FIGURES.BISHOP },
  { position: {x: "f", y: 1}, color: "white", id: FIGURES.BISHOP },

  { position: {x: "b", y: 8}, color: "black", id: FIGURES.KNIGHT },
  { position: {x: "g", y: 8}, color: "black", id: FIGURES.KNIGHT },

  { position: {x: "b", y: 1}, color: "white", id: FIGURES.KNIGHT },
  { position: {x: "g", y: 1}, color: "white", id: FIGURES.KNIGHT },

  { position: {x: "a", y: 8}, color: "black", id: FIGURES.ROOK },
  { position: {x: "h", y: 8}, color: "black", id: FIGURES.ROOK },

  { position: {x: "a", y: 1}, color: "white", id: FIGURES.ROOK },
  { position: {x: "h", y: 1}, color: "white", id: FIGURES.ROOK },

  { position: {x: "d", y: 8}, color: "black", id: FIGURES.QUEEN },
  { position: {x: "d", y: 1}, color: "white", id: FIGURES.QUEEN },

  { position: {x: "e", y: 8}, color: "black", id: FIGURES.KING },
  { position: {x: "e", y: 8}, color: "white", id: FIGURES.KING },
];
