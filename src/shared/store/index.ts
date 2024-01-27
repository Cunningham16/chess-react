import { configureStore } from "@reduxjs/toolkit";
import { boardSession } from "widgets/ChessBoard/model/ChessBoardSlice";

const reducer = {
    boardSession
}

export const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;