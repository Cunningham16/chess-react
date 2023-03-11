import React from "react";
import { useContext } from "react";
import { BoardContext } from "shared/context";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export function GameOverPopUp({ message, whoLose }) {
  const { setIsRetry } = useContext(BoardContext);

  function clearBoard() {
    setIsRetry(true);
  }

  function whoWinsLog(whoLose: string) {
    if (whoLose === "white") {
      return "Black";
    } else if (whoLose === "black") {
      return "White";
    }
  }

  function setCount(whoLose) {
    if (whoLose === "black") {
      return "1:0";
    } else if (whoLose === "white") {
      return "0:1";
    }
  }

  return (
    <section className={styles.popup}>
      <div className={styles.popup__content}>
        <div className={styles.popup__header}>
          <h3>Game Over! {whoWinsLog(whoLose)} win this battle!</h3>
          <h4>{message}</h4>
        </div>
        <div className={styles.popup__winnerLog}>
          <div className={styles.winnerLog}>
            <img src="./img/user-image.svg" alt="" />
            <h5>White</h5>
          </div>
          <p>{setCount(whoLose)}</p>
          <div className={styles.winnerLog}>
            <img src="./img/user-image.svg" alt="" />
            <h5>Black</h5>
          </div>
        </div>
        <div className={styles.popup__buttons}>
          <button
            className={styles.button__primary}
            onClick={() => {
              clearBoard();
            }}
          >
            Retry
          </button>
          <Link to="/">
            <button className={styles.button__secondary}>
              Return to Main Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
