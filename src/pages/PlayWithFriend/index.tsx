import { useState, useEffect } from "react";
import { Game } from "js-chess-engine";
import { ChessBoard } from "widgets/ChessBoard";
import { PlayerInfo } from "widgets/PlayerInfo";
import { BoardContext } from "shared/context";
import { GameOverPopup } from "widgets/GameOverPopup";
import { createBoard } from "widgets/ChessBoard/lib/createBoard";
import { CHESSCOLORS } from "shared/types/chessColors";

function PlayWithFriend() {
  return (
    <div className="board-game">
        <PlayerInfo color={CHESSCOLORS.BLACK} isPlayWithAI={false} />
        <ChessBoard />
        <PlayerInfo color={CHESSCOLORS.WHITE} isPlayWithAI={false} />
    </div>
  );
}

export default PlayWithFriend;
