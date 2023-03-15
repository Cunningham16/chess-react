import React, { useContext, useEffect, useState } from "react";
import { BoardContext } from "shared/context";
import classes from "./styles.module.scss";

function convertTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds: number | string = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;
}

export function Timer({ color }) {
  const { turn, setIsEndCase, isRetry, isEndCase } = useContext(BoardContext);
  const [time, setTime] = useState(600);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        if (turn === color) {
          setTime(time - 1);
        }

        if (time === 1) {
          setIsEndCase({
            status: true,
            type: "timeOut",
            color: color,
          });
          setIsStart(false);
        }
      }, 1000);
    }
  });

  useEffect(() => {
    if (isRetry === true) {
      setTime(600);
      setIsStart(true);
    }
  }, [isRetry]);

  function setColorTimer(color) {
    if (color === "black") {
      if (turn === "black") {
        return `${classes.dark} ${classes.dark_active}`;
      } else if (turn === "white") {
        return classes.dark;
      }
    } else if (color === "white") {
      if (turn === "white") {
        return `${classes.light} ${classes.light_active}`;
      } else if (turn === "black") {
        return classes.light;
      }
    }
  }

  useEffect(() => {
    setColorTimer(color);
  }, [turn]);

  return <div className={setColorTimer(color)}>{convertTime(time)}</div>;
}
