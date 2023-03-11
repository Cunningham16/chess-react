import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <Link to="/">
          <h1>Chess React</h1>
        </Link>
        <Link to="/playfriend">
          <button className={styles.sidebar__button}>
            <img src="./img/strategy.png" alt="play" />
            <p>Play with friend</p>
          </button>
        </Link>
        <Link to="/playai">
          <button className={styles.sidebar__button}>
            <img src="./img/desktop.png" alt="computer" />
            <p>Play with AI</p>
          </button>
        </Link>
      </div>
      <Link to="/settings">
        <button className={styles.sidebar__button}>
          <img src="./img/settings.png" alt="settings" />
          <p>Settings</p>
        </button>
      </Link>
    </div>
  );
}
