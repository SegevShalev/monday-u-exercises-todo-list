import React, { useState } from "react";
import styles from "../style/TodosHeader.module.css";
import { addTodo, removeAllTodos } from "../todos-client";
import { MdOutlineAddCircle, MdDeleteSweep } from "react-icons/md";
import {
  DEFAULT_PLACEHOLDER_TEXT,
  UNVALID_PLACEHOLDER_TEXT,
} from "../constants";

export default function TodosHeader({ onItemAdd }) {
  const [inputText, setInputText] = useState("");

  const [unvalidInput, setUnvalidInput] = useState(false);

  const addNewTodo = async () => {
    if (inputText.length === 0) {
      setUnvalidInput(true);
      return;
    }
    await addTodo(inputText);
    onItemAdd();
    setUnvalidInput(false);
    setInputText("");
  };

  const deleteAllTodos = async () => {
    await removeAllTodos();
    onItemAdd();
  };

  const enterPressed = async (event) => {
    if (event.key === "Enter") {
      await addNewTodo();
    }
  };

  let placeHolderText = unvalidInput
    ? UNVALID_PLACEHOLDER_TEXT
    : DEFAULT_PLACEHOLDER_TEXT;

  return (
    <div>
      <h1 className={styles.title}>My Todo App</h1>
      <div className={styles.addTask}>
        <label className="input-field">
          <input
            value={inputText} //defaultValue is not working
            placeholder={placeHolderText}
            className={`${styles.inputHeader} ${
              unvalidInput ? styles.redPlaceholder : ""
            } `}
            type="text"
            required
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => enterPressed(e)}
          />
        </label>
        <button className={styles.addBtn} type="button" onClick={addNewTodo}>
          <MdOutlineAddCircle />
        </button>
        <button
          className={styles.deleteAllBtn}
          onClick={deleteAllTodos}
          type="button"
        >
          <MdDeleteSweep />
        </button>
      </div>
    </div>
  );
}
