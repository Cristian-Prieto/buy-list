import { useState } from "react";
import styles from "./AddItem.module.css";

export function AddItem({ add }) {
  const [form, setForm] = useState("");

  const handleChangeForm = (event) => {
    setForm(event.target.value);
  };

  const handleAddArticle = () => {
    add(form);
    setForm("");
  };

  return (
    <div className={styles.div}>
      <input
        placeholder="Nuevo articulo"
        value={form}
        onChange={handleChangeForm}
        className={styles.input}
      />
      <button className={styles.btn} onClick={handleAddArticle}>
        +
      </button>
    </div>
  );
}
