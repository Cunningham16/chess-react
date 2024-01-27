import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chess, Square, Piece } from "chess.js";
import { boardTile } from "shared/types/boardTile";
import { createBoard } from "../lib/createBoard";
import { setAvaliableMoves } from "../lib/setAvailableMoves";
import { clearAvaliableMoves } from "../lib/clearAvailableMoves";
import { CHESSCOLORS } from "shared/types/chessColors";
import { changeTurn } from "../lib/changeTurn";

interface sliceState {
  board: boardTile[];
  turn: CHESSCOLORS;
  boardConfig: string;
  fallenFigures: Piece[];
  isGameOver: boolean;
  hintFromSquare: Square | null;
}

const initialState: sliceState = {
  board: [],
  turn: CHESSCOLORS.WHITE,
  boardConfig: new Chess().pgn(),
  fallenFigures: [],
  isGameOver: false,
  hintFromSquare: null,
};

const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createGame(state) {
      const engine = new Chess()
      state.boardConfig = engine.pgn();
      console.log(state.boardConfig);
      state.board = createBoard(engine.board());
      state.fallenFigures = [];
      state.turn = CHESSCOLORS.WHITE;
      state.isGameOver = false;
      state.hintFromSquare = null;
    },


    setHints(state, square: PayloadAction<Square>) {
      const engine = new Chess()
      engine.loadPgn(state.boardConfig);

      const rawMoves = engine.moves({ square: square.payload, verbose: true });
      const moves = rawMoves.map(elem => elem.to)
      console.log(moves)
      state.hintFromSquare = square.payload;
      state.board = setAvaliableMoves(state.board, moves);
    },


    clearHints(state) {
      state.hintFromSquare = null;
      state.board = clearAvaliableMoves(state.board);
    },


    makeMove(state, action: PayloadAction<{ from: Square; to: Square }>) {
      const engine = new Chess();
      engine.loadPgn(state.boardConfig);

      const toSquare = engine.get(action.payload.to);
      if (toSquare !== null) {
        state.fallenFigures.push(toSquare);
      }
      engine.move({
        from: action.payload.from,
        to: action.payload.to,
      });
      state.board = createBoard(engine.board());
      state.turn = changeTurn(state.turn);
      console.log(engine.history());
      state.boardConfig = engine.pgn();
    },
  },
});

// Extract the action creators object and the reducer
export const { makeMove, setHints, clearHints, createGame } = slice.actions;

export const boardSession = slice.reducer;
