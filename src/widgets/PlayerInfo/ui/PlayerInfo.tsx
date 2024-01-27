import { useContext } from "react";
import { BoardContext } from "shared/context";
import { TimerPlay } from "widgets/TimerPlay";
import { setColor } from "../lib/setColor";
import { setImgDark } from "../lib/setImgDark";
import { setImgLight } from "../lib/setImgLight";
import styles from "./styles.module.scss";
import { CHESSCOLORS } from "shared/types/chessColors";
import { useAppSelector } from "shared/hooks/reduxHooks";
import { Piece } from "chess.js";

function PlayerInfo({
  color,
  isPlayWithAI,
}: {
  color: CHESSCOLORS;
  isPlayWithAI: boolean;
}) {
  const { fallenFigures } = useAppSelector((state) => state.boardSession);

  function setFigures(figure: Piece) {
    if (color !== figure.color && color === CHESSCOLORS.BLACK) {
      return setImgLight(figure.type);
    } else if (color !== figure.color && CHESSCOLORS.WHITE) {
      return setImgDark(figure.type);
    }
  }
  //{!isPlayWithAI && <TimerPlay color={color} />}
  return (
    <div className={styles.playerInfo}>
      <div className={styles.playerInfo__leftSide}>
        <img src='./img/user-image.svg' alt='userImg' />
        <div className={styles.info}>
          <p className={styles.name}>{setColor(color)}</p>
          <div className={styles.fallenFigures}>
            {fallenFigures.map((elem) => {
              if (elem.color === color) {
                return <img src={setFigures(elem)} alt='' />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerInfo;
