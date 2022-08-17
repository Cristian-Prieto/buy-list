import styles from "./Item.module.css";
import { IoTrashSharp } from "react-icons/io5";

export function Item({ item, increaseAmount, decreaseAmount, deleteArt }) {
  return (
    <li className={styles.li}>
      <div className={styles.div}>
        <span className={styles.span}>{item.article}</span>
      </div>

      <div className={styles.btnsCont}>
        <div className={styles.arts}>
          <button
            className={styles.btns}
            onClick={() => increaseAmount(item)}
            disabled={item.total === 10}
          >
            +
          </button>
          <span className={styles.num}>{item.total}</span>
          <button
            className={styles.btns}
            onClick={() => decreaseAmount(item)}
            disabled={item.total === 1}
          >
            -
          </button>
        </div>
        <button className={styles.delete} onClick={() => deleteArt(item)}>
          <IoTrashSharp />
        </button>
      </div>
    </li>
  );
}
