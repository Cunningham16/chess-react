import { FigureProps } from "../ui";

export const setImageFigure = (
  color: FigureProps["color"],
  id: FigureProps["id"]
) => {
  if (id === "bishop") {
    if (color === "black") {
      return "./img/Chess_bdt60.png";
    } else if (color === "white") {
      return "./img/Chess_blt60.png";
    }
  } else if (id === "king") {
    if (color === "black") {
      return "./img/Chess_kdt60.png";
    } else if (color === "white") {
      return "./img/Chess_klt60.png";
    }
  } else if (id === "knight") {
    if (color === "black") {
      return "./img/Chess_ndt60.png";
    } else if (color === "white") {
      return "./img/Chess_nlt60.png";
    }
  } else if (id === "pawn") {
    if (color === "black") {
      return "./img/Chess_pdt60.png";
    } else if (color === "white") {
      return "./img/Chess_plt60.png";
    }
  } else if (id === "queen") {
    if (color === "black") {
      return "./img/Chess_qdt60.png";
    } else if (color === "white") {
      return "./img/Chess_qlt60.png";
    }
  } else if (id === "rook") {
    if (color === "black") {
      return "./img/Chess_rdt60.png";
    } else if (color === "white") {
      return "./img/Chess_rlt60.png";
    }
  }
};
