import { useContext } from "react";
import { BoardContext } from "shared/context";
import { TimerPlay } from "widgets/TimerPlay";
import { setColor } from "../lib/setColor";
import { setImgDark } from "../lib/setImgDark";
import { setImgLight } from "../lib/setImgLight";
import styles from "./styles.module.scss";

function PlayerInfo({ color, isPlayWithAI }) {
  const { fallenFiguresLight, fallenFiguresDark } = useContext(BoardContext);

  function setFigures(objectFigure) {
    if (color !== objectFigure.color && color === "black") {
      return setImgLight(objectFigure.id);
    } else if (color !== objectFigure.color && color === "white") {
      return setImgDark(objectFigure.id);
    }
  }

  return (
    <div className={styles.playerInfo}>
      <div className={styles.playerInfo__leftSide}>
        <img src="./img/user-image.svg" alt="userImg" />
        <div className={styles.info}>
          <p className={styles.name}>{setColor(color)}</p>
          <div className={styles.fallenFigures}>
            {color === "black"
              ? fallenFiguresLight.map((elem) => (
                  <img src={setFigures(elem)} alt="" />
                ))
              : fallenFiguresDark.map((elem) => (
                  <img src={setFigures(elem)} alt="" />
                ))}
          </div>
        </div>
      </div>
      {!isPlayWithAI && <TimerPlay color={color} />}
    </div>
  );
}

export default PlayerInfo;
