import React, { useState } from "react";
import { removeTodo, changeTodoStatus } from "../todos-client";
import styles from "../style/TodosItem.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { MAX_TEXT_LENGTH } from "../constants";

export default function TodoItem({ todo, onItemChange }) {
  const deleteTodo = async () => {
    await removeTodo(todo.id);
    onItemChange();
  };

  const [status, setStatus] = useState(todo.status);

  const changeStatus = async () => {
    await changeTodoStatus(todo.id, !status);
    onItemChange();
  };
  let itemName =
    todo.itemName.length > MAX_TEXT_LENGTH
      ? todo.itemName.substring(0, MAX_TEXT_LENGTH)
      : todo.itemName;

  return (
    <div className={styles.todoRow}>
      <div className={styles.itemName}>
        <label>{itemName}</label>
      </div>
      <div>
        <input
          onClick={changeStatus}
          type="checkbox"
          className={styles.checkbox}
          checked={status}
          onChange={() => setStatus(!status)}
        />
        {/*  <button>
          <MdOutlineModeEdit />
        </button> */}
        <button onClick={deleteTodo}>
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}
