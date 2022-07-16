import React, { useState, useRef, useEffect } from "react";
import { MdOutlineAddCircle, MdDeleteSweep } from "react-icons/md";
import { connect } from "react-redux";

import { addTodoAction } from "../actions/add-todo-action";
import { removeAllTodoAction } from "../actions/remove-all-todos-action";
import { unDeleteTodoAction } from "../actions/undelete-todo-action";
import { filterTodosAction } from "../actions/filter-todos-action";
import { Hide, Show, Mirror } from "monday-ui-react-core/dist/allIcons";

import styles from "../style/TodosHeader.module.css";
import {
  DEFAULT_PLACEHOLDER_TEXT,
  UNVALID_PLACEHOLDER_TEXT,
} from "../constants";

function TodosHeader({
  addTodoAction,
  removeAllTodoAction,
  filterTodosAction,
  unDeleteTodoAction,
  todos,
}) {
  const [inputText, setInputText] = useState("");
  const [unvalidInput, setUnvalidInput] = useState(false);
  const [hideIcon, setHideIcon] = useState(true);
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
    filterTodosAction("SEARCH", todos, "");
  };

  const deleteAllTodos = () => {
    removeAllTodoAction();
  };

  const enterPressed = (event) => {
    if (event.key === "Enter") {
      addNewTodo();
    }
  };

  const filterIconPressed = () => {
    setHideIcon(!hideIcon);
    filterTodosAction("UNDONE", todos);
  };

  const onChangeEvent = (e) => {
    setInputText(e.target.value);
    filterTodosAction("SEARCH", todos, e.target.value);
  };

  let placeHolderText = unvalidInput
    ? UNVALID_PLACEHOLDER_TEXT
    : DEFAULT_PLACEHOLDER_TEXT;

  return (
    <div>
      <div className={styles.addTask}>
        <button className={styles.undoneBtn} onClick={filterIconPressed}>
          {hideIcon ? <Show /> : <Hide />}
        </button>
        <input
          ref={inputRef}
          value={inputText}
          placeholder={placeHolderText}
          className={`${styles.inputHeader} ${
            unvalidInput ? styles.redPlaceholder : ""
          } `}
          type="text"
          required
          onChange={(e) => onChangeEvent(e)}
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
        <button onClick={unDeleteTodoAction}>
          <Mirror />
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ itemsEntities }) {
  return { todos: itemsEntities.todos };
}

const mapDispatchToProps = {
  addTodoAction,
  removeAllTodoAction,
  filterTodosAction,
  unDeleteTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosHeader);
