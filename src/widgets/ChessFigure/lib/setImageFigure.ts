import { FIGURES } from "shared/types/figures";
import { FigureProps } from "../ui";
import { CHESSCOLORS } from "shared/types/chessColors";

export const setImageFigure = (
  color: CHESSCOLORS,
  id: FIGURES
) => {
  if (id === FIGURES.BISHOP) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_bdt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_blt60.png";
    }
  } else if (id === FIGURES.KING) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_kdt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_klt60.png";
    }
  } else if (id === FIGURES.KNIGHT) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_ndt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_nlt60.png";
    }
  } else if (id === FIGURES.PAWN) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_pdt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_plt60.png";
    }
  } else if (id === FIGURES.QUEEN) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_qdt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_qlt60.png";
    }
  } else if (id === FIGURES.ROOK) {
    if (color === CHESSCOLORS.BLACK) {
      return "./img/Chess_rdt60.png";
    } else if (color === CHESSCOLORS.WHITE) {
      return "./img/Chess_rlt60.png";
    }
  }
};
