import { BoardContext } from "shared/context";
import { useCallback, useContext, useEffect, useMemo } from "react";
import styles from "./styles.module.scss";
import { BoardSection } from "widgets/BoardSection";
import { useAppSelector, useAppDispatch } from "shared/hooks/reduxHooks";
import { createGame } from "../model/ChessBoardSlice";
import { ChessFigure } from "widgets/ChessFigure";


export const Board = () => {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.boardSession);

  const computedBoard = useMemo(() => board, [board]);

  useEffect(() => {
    dispatch(createGame());
  }, []);

  return (
    <div className={styles.boardContainer}>
      <section className={styles.board}>
        {computedBoard.map((elem, index) => (
          <BoardSection objectBoard={elem} key={elem.position} index={index} />
        ))}
      </section>
      <section className={styles.figures}>
        {computedBoard.map((elem, index) => (
          <ChessFigure object={elem} key={index}/>
        ))}
      </section>
    </div>
  );
};
