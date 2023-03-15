import { BoardContext } from "shared/context";
import { useContext } from "react";
import styles from "./styles.module.scss";
import { BoardSection } from "widgets/BoardSection";

export const Board = ({ isPlayWithAI }) => {
  const { boardArray } = useContext(BoardContext);

  return (
    <section className={styles.board}>
      {boardArray.map((elem) => (
        <BoardSection objectBoard={elem} isPlayWithAI={isPlayWithAI} />
      ))}
    </section>
  );
};
