import React, { useState } from "react";
import styles from "./List.module.css";
import { AddItem } from "./AddItem";
import { Item } from "./Item";

const INITIAL_LIST = [];

export function List() {
  const [list, setList] = useState(INITIAL_LIST);

  const add = (itemName) => {
    const itemAlreadyExist = list.find((art) => art.article === itemName);
    if (!itemAlreadyExist && itemName) {
      const newList = [...list];
      newList.push({ article: itemName, total: 1 });
      setList(newList);
    }
  };

  const increaseAmount = (articleToModify) => {
    const newList = list.map((art) => {
      if (art.article === articleToModify.article) {
        return { ...art, total: art.total + 1 };
      }
      return art;
    });
    setList(newList);
  };

  const decreaseAmount = (articleToModify) => {
    const newList = list.map((art) => {
      if (art.article === articleToModify.article) {
        return { ...art, total: art.total - 1 };
      }
      return art;
    });
    setList(newList);
  };

  const deleteArt = (articleToDelete) => {
    const newList = list.filter(
      (art) => art.article !== articleToDelete.article
    );
    setList(newList);
  };

  const totalItems = list.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber.total,
    0
  );

  return (
    <div className={styles.div}>
      <AddItem add={add} />
      <ul className={styles.ul}>
        {list.map((item) => (
          <Item
            key={item.article}
            item={item}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            deleteArt={deleteArt}
          />
        ))}
      </ul>
      <h2 className={styles.h2}>Total de artículos: {totalItems}</h2>
    </div>
  );
}
