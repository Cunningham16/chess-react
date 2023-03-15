export function setImgDark(id: string) {
  if (id === "pawn") {
    return "./img/Chess_pdt60.png";
  } else if (id === "queen") {
    return "./img/Chess_qdt60.png";
  } else if (id === "bishop") {
    return "./img/Chess_bdt60.png";
  } else if (id === "knight") {
    return "./img/Chess_ndt60.png";
  } else if (id === "rook") {
    return "./img/Chess_rdt60.png";
  }
}
