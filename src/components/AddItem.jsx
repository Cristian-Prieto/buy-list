import { useState } from "react";
import styles from "./AddItem.module.css";

export function AddItem({ add }) {
  const [form, setForm] = useState("");

  const handleChangeForm = (event) => {
    setForm(event.target.value);
  };

  const handleAddArticle = (event) => {
    event.preventDefault();
    add(form);
    setForm("");
  };

  return (
    <form className={styles.div} onSubmit={handleAddArticle}>
      <input placeholder="Nuevo articulo" value={form} onChange={handleChangeForm} className={styles.input} />
      <button type="submit" className={styles.btn}>
        +
      </button>
    </form>
  );
}
