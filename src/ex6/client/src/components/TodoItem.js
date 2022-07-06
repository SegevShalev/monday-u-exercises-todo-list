import React, { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
import { MdOutlineModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import { removeTodo, changeTodoStatus } from "../todos-client";
import { MAX_TEXT_LENGTH } from "../constants";
import styles from "../style/TodosItem.module.css";
function TodoItem({
  todoName = "no name was found",
  todoStatus,
  todoId,
  onItemChange,
}) {
  const [status, setStatus] = useState(todoStatus);

  const deleteTodo = async () => {
    await removeTodo(todoId);
    onItemChange();
  };

  const changeStatus = async () => {
    await changeTodoStatus(todoId, !status);
    onItemChange();
  };
  let itemName =
    todoName.length > MAX_TEXT_LENGTH
      ? todoName.substring(0, MAX_TEXT_LENGTH)
      : todoName;

  return (
    <div className={styles.todoRow}>
      <input
        onClick={changeStatus}
        type="checkbox"
        className={styles.checkbox}
        checked={status}
        onChange={() => setStatus(!status)}
      />
      <div className={styles.itemName}>
        <label>{itemName}</label>
      </div>
      <div>
        <button onClick={deleteTodo}>
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string,
  todoId: PropTypes.number,
  todoStatus: PropTypes.bool,
  onItemChange: PropTypes.func,
};

export default TodoItem;
