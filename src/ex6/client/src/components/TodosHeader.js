import React, { useState, useRef, useEffect } from "react";
import { MdOutlineAddCircle, MdDeleteSweep } from "react-icons/md";

import styles from "../style/TodosHeader.module.css";
import { addTodo, removeAllTodos } from "../todos-client";
import {
  DEFAULT_PLACEHOLDER_TEXT,
  UNVALID_PLACEHOLDER_TEXT,
} from "../constants";

export default function TodosHeader({ onItemAdd }) {
  const [inputText, setInputText] = useState("");
  const [unvalidInput, setUnvalidInput] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [unvalidInput]);

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
      <div className={styles.addTask}>
        <input
          ref={inputRef}
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
