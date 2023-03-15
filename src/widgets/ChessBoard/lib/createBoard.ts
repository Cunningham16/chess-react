import { arrayFigures } from "../config/arrayFigures";

export function createBoard() {
  let array = [];

  function setColor(i: number) {
    if (i < 8 && i % 2 === 0) {
      return "black";
    } else if (i < 16 && i > 8 && i % 2 !== 0) {
      return "black";
    } else if (i < 24 && i >= 16 && i % 2 === 0) {
      return "black";
    } else if (i < 32 && i >= 24 && i % 2 !== 0) {
      return "black";
    } else if (i < 40 && i >= 32 && i % 2 === 0) {
      return "black";
    } else if (i < 48 && i >= 40 && i % 2 !== 0) {
      return "black";
    } else if (i < 56 && i >= 48 && i % 2 === 0) {
      return "black";
    } else if (i < 64 && i >= 56 && i % 2 !== 0) {
      return "black";
    } else {
      return "white";
    }
  }

  function setPosition(i: number) {
    let object: { x: number; y: number } = { y: 0, x: 0 };
    if (i - 8 <= 0) {
      object.x = i - 1;
      object.y = 0;
    } else if (i - 16 <= 0 && i - 8 > 0) {
      object.x = i - 9;
      object.y = 1;
    } else if (i - 24 <= 0 && i - 16 > 0) {
      object.x = i - 17;
      object.y = 2;
    } else if (i - 32 <= 0 && i - 24 > 0) {
      object.x = i - 25;
      object.y = 3;
    } else if (i - 40 <= 0 && i - 32 > 0) {
      object.x = i - 33;
      object.y = 4;
    } else if (i - 48 <= 0 && i - 40 > 0) {
      object.x = i - 41;
      object.y = 5;
    } else if (i - 56 <= 0 && i - 48 > 0) {
      object.x = i - 49;
      object.y = 6;
    } else if (i - 56 > 0) {
      object.x = i - 57;
      object.y = 7;
    }
    return object;
  }

  function setFigure(i) {
    for (let pos of arrayFigures) {
      if (i === pos.position) {
        return {
          color: pos.color,
          id: pos.id,
        };
      }
    }
  }

  for (let i = 1; i < 65; i++) {
    array[i - 1] = {
      whatPlaced: setFigure(i),
      position: setPosition(i),
      color: setColor(i - 1),
      setDot: undefined,
    };
  }
  return array.reverse();
}
