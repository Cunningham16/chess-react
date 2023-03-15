export function setImgLight(id: string) {
  if (id === "pawn") {
    return "./img/Chess_plt60.png";
  } else if (id === "queen") {
    return "./img/Chess_qlt60.png";
  } else if (id === "bishop") {
    return "./img/Chess_blt60.png";
  } else if (id === "knight") {
    return "./img/Chess_nlt60.png";
  } else if (id === "rook") {
    return "./img/Chess_rlt60.png";
  }
}
