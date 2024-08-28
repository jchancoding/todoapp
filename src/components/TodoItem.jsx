import { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
