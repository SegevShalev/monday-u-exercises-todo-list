import React, { useState, useRef, useEffect } from "react";
import { MdOutlineAddCircle, MdDeleteSweep } from "react-icons/md";
import { connect } from "react-redux";

import { addTodoAction } from "../actions/add-todo-action";
import { removeAllTodoAction } from "../actions/remove-all-todos-action";
import styles from "../style/TodosHeader.module.css";
import { removeAllTodos } from "../todos-client";
import {
  DEFAULT_PLACEHOLDER_TEXT,
  UNVALID_PLACEHOLDER_TEXT,
} from "../constants";

function TodosHeader({ addTodoAction, removeAllTodoAction }) {
  const [inputText, setInputText] = useState("");
  const [unvalidInput, setUnvalidInput] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [unvalidInput]);

  const addNewTodo = () => {
    if (inputText.length === 0) {
      setUnvalidInput(true);
      return;
    }
    addTodoAction(inputText);
    setUnvalidInput(false);
    setInputText("");
  };

  const deleteAllTodos = () => {
    removeAllTodoAction();
  };

  const enterPressed = (event) => {
    if (event.key === "Enter") {
      addNewTodo();
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

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  addTodoAction,
  removeAllTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosHeader);
